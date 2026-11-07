/* ==========================================================================
   Nha khoa Quỳnh Thư - script.js (JavaScript thuần, không thư viện)
   0. Cấu hình HOURS 2 cơ sở + tính "Đang mở / Đã đóng" (giờ Việt Nam)
   1. Header thu nhỏ khi cuộn + menu tự đổi mục đang xem
   2. Menu con "Dịch vụ" + menu điện thoại
   3. Thanh nút cố định + bảng chọn cơ sở khi bấm "Tìm đường" / "Chỉ đường"
   4. Bản đồ chỉ tải khi bấm
   5. Đếm sự kiện Clarity: bam_goi, bam_zalo, bam_chi_duong, xem_bang_gia, bam_dich_vu
   Dùng chung cho trang chủ và 6 trang dịch vụ (dich-vu/*.html): phần nào không có trên trang thì tự bỏ qua.
   6. Hiện dần khi cuộn
   7. Chat Zalo (nút nổi, chỉ máy tính) + Clarity: mo_chat_zalo
   ========================================================================== */
(function () {
  "use strict";

  var doc = document;
  var $ = function (sel, root) { return (root || doc).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || doc).querySelectorAll(sel)); };

  /* ------------------------------------------------------------------------
     0. GIỜ LÀM VIỆC + TRẠNG THÁI MỞ CỬA
     - Múi giờ: Asia/Ho_Chi_Minh.
     - Ngày: 0 = Chủ nhật, 1 = Thứ 2, ... 6 = Thứ 7. Ngày nghỉ: để null.
     - Giờ lấy từ Google Maps ngày 2026-11-03 (cả 2 cơ sở giống nhau).
     - Thử: thêm ?gio=20:30 vào địa chỉ (thêm &thu=0 để thử Chủ nhật).
     ------------------------------------------------------------------------ */
  var TIME_ZONE = "Asia/Ho_Chi_Minh";
  var WEEK = {
    0: ["08:00", "18:00"],
    1: ["08:00", "19:00"], 2: ["08:00", "19:00"], 3: ["08:00", "19:00"],
    4: ["08:00", "19:00"], 5: ["08:00", "19:00"], 6: ["08:00", "19:00"]
  };
  var HOURS = {
    cs1: { name: "Cơ sở 1", days: WEEK },
    cs2: { name: "Cơ sở 2", days: WEEK }
  };
  var DAY_NAMES = ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];

  function toMinutes(hhmm) {
    var p = String(hhmm).split(":");
    return parseInt(p[0], 10) * 60 + parseInt(p[1] || "0", 10);
  }

  /* Thứ + phút hiện tại theo giờ Việt Nam. Ghi đè bằng ?gio=HH:MM&thu=0..6 */
  function nowInVietnam() {
    var parts = new Intl.DateTimeFormat("en-US", {
      timeZone: TIME_ZONE, weekday: "short", hour: "2-digit", minute: "2-digit", hour12: false
    }).formatToParts(new Date());
    var map = {};
    parts.forEach(function (x) { map[x.type] = x.value; });
    var day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(map.weekday);
    var minutes = (parseInt(map.hour, 10) % 24) * 60 + parseInt(map.minute, 10);

    var params = new URLSearchParams(location.search);
    var gio = params.get("gio");
    var thu = params.get("thu");
    if (gio && /^\d{1,2}:\d{2}$/.test(gio)) minutes = toMinutes(gio);
    if (thu && /^[0-6]$/.test(thu)) day = parseInt(thu, 10);
    return { day: day, minutes: minutes };
  }

  /* { open, closes: "19:00", next: "mở lại 08:00 ngày mai" } */
  function branchStatus(branch, now) {
    var today = branch.days[now.day];
    if (today && now.minutes >= toMinutes(today[0]) && now.minutes < toMinutes(today[1])) {
      return { open: true, closes: today[1] };
    }
    if (today && now.minutes < toMinutes(today[0])) {
      return { open: false, next: "mở lại " + today[0] + " hôm nay" };
    }
    for (var i = 1; i <= 7; i++) {
      var d = (now.day + i) % 7;
      var h = branch.days[d];
      if (h) return { open: false, next: "mở lại " + h[0] + " " + (i === 1 ? "ngày mai" : DAY_NAMES[d]) };
    }
    return { open: false, next: "" };
  }

  /* "all" = cả 2 cơ sở (cùng giờ), "cs1" / "cs2" = từng cơ sở */
  function statusOf(key, now) {
    if (key === "all") {
      var a = branchStatus(HOURS.cs1, now);
      var b = branchStatus(HOURS.cs2, now);
      if (a.open && b.open) return { open: true, main: "Đang mở cửa", sub: "Đóng cửa lúc " + a.closes };
      if (!a.open && !b.open) return { open: false, main: "Đã đóng cửa", sub: a.next ? a.next.charAt(0).toUpperCase() + a.next.slice(1) : "" };
      return { open: true, main: a.open ? "Cơ sở 1 đang mở" : "Cơ sở 2 đang mở", sub: (a.open ? "Cơ sở 2" : "Cơ sở 1") + " đã đóng" };
    }
    var br = HOURS[key];
    if (!br) return null;
    var s = branchStatus(br, now);
    return s.open
      ? { open: true, main: "Đang mở cửa", sub: "Đóng cửa lúc " + s.closes }
      : { open: false, main: "Đã đóng cửa", sub: s.next ? s.next.charAt(0).toUpperCase() + s.next.slice(1) : "" };
  }

  function renderStatus() {
    var now = nowInVietnam();
    $$("[data-status]").forEach(function (el) {
      var r = statusOf(el.getAttribute("data-status"), now);
      if (!r) return;
      el.textContent = r.main.replace(" cửa", "") + (r.sub ? " · " + r.sub.charAt(0).toLowerCase() + r.sub.slice(1).replace(" cửa", "") : "");
      el.classList.toggle("is-open", r.open);
      el.classList.toggle("is-closed", !r.open);
    });
    /* Footer: 2 dòng "Đang mở cửa" + "(Đóng cửa lúc 19:00)" như thiết kế */
    $$("[data-status-main]").forEach(function (el) {
      var r = statusOf(el.getAttribute("data-status-main"), now);
      if (r) el.textContent = r.main;
    });
    $$("[data-status-sub]").forEach(function (el) {
      var r = statusOf(el.getAttribute("data-status-sub"), now);
      if (r) el.textContent = r.sub ? "(" + r.sub + ")" : "";
    });
  }
  renderStatus();
  setInterval(renderStatus, 60 * 1000);

  /* ------------------------------------------------------------------------
     1. HEADER THU NHỎ KHI CUỘN + MENU TỰ ĐỔI MỤC ĐANG XEM
     ------------------------------------------------------------------------ */
  var header = $(".site-header");
  var navLinks = $$("[data-nav]");
  /* Mục nào thuộc menu nào (các mục không có trong menu gắn vào mục gần nhất) */
  var NAV_OF = {
    "dich-vu": "dich-vu", "gioi-thieu": "dich-vu", "tre-em": "dich-vu",
    "bang-gia": "bang-gia", "truoc-sau": "bang-gia", "doi-ngu": "bang-gia",
    "phong-kham": "danh-gia", "danh-gia": "danh-gia",
    "dia-chi": "dia-chi", "hoi-dap": "dia-chi"
  };
  var sections = Object.keys(NAV_OF).map(function (id) { return doc.getElementById(id); }).filter(Boolean);

  function setActive(key) {
    navLinks.forEach(function (a) {
      if (a.getAttribute("data-nav") === key) a.setAttribute("aria-current", "true");
      else a.removeAttribute("aria-current");
    });
  }

  if (header) {
    var ticking = false;
    var onScroll = function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        /* 2 ngưỡng khác nhau để không bật/tắt qua lại quanh 1 điểm */
        var y = window.scrollY;
        if (y > 24) header.classList.add("is-scrolled");
        else if (y < 4) header.classList.remove("is-scrolled");
        var line = window.scrollY + 220;
        var current = "dau-trang";
        sections.forEach(function (s) { if (s.offsetTop <= line) current = NAV_OF[s.id]; });
        if (window.innerHeight + window.scrollY >= doc.documentElement.scrollHeight - 4) current = "dia-chi";
        setActive(current);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ------------------------------------------------------------------------
     2. MENU CON "DỊCH VỤ" (máy tính: rê chuột là mở bằng CSS; nút mũi tên dùng cho
        điện thoại, bàn phím và màn hình cảm ứng) + MENU ĐIỆN THOẠI
     ------------------------------------------------------------------------ */
  var sub = $(".has-sub");
  var subBtn = sub && $(".sub-toggle", sub);
  function setSub(open) {
    if (!sub || !subBtn) return;
    sub.classList.toggle("is-open", open);
    subBtn.setAttribute("aria-expanded", String(open));
    subBtn.setAttribute("aria-label", open ? "Đóng danh sách dịch vụ" : "Mở danh sách dịch vụ");
  }
  if (sub && subBtn) {
    subBtn.addEventListener("click", function () { setSub(!sub.classList.contains("is-open")); });
    doc.addEventListener("click", function (e) {
      if (sub.classList.contains("is-open") && !sub.contains(e.target)) setSub(false);
    });
    /* Esc: đóng hẳn (kể cả khi đang mở bằng rê chuột / focus). Cờ is-esc chặn CSS mở lại
       cho tới khi chuột hoặc focus rời khỏi menu. */
    doc.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && (sub.classList.contains("is-open") || sub.matches(":hover, :focus-within"))) {
        setSub(false);
        sub.classList.add("is-esc");
        subBtn.focus();
      }
    });
    sub.addEventListener("mouseleave", function () { sub.classList.remove("is-esc"); });
    sub.addEventListener("focusout", function (e) {
      if (!sub.contains(e.relatedTarget)) sub.classList.remove("is-esc");
    });
  }

  var toggle = $(".menu-toggle");
  var nav = $("#menu-chinh");
  if (toggle && nav) {
    var setMenu = function (open) {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Đóng menu" : "Mở menu");
      nav.classList.toggle("is-open", open);
      if (!open) setSub(false); /* đóng hamburger thì thu luôn danh sách dịch vụ */
    };
    toggle.addEventListener("click", function () {
      setMenu(toggle.getAttribute("aria-expanded") !== "true");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setMenu(false);
    });
    doc.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        setMenu(false);
        toggle.focus();
      }
    });
    window.matchMedia("(min-width: 1024px)").addEventListener("change", function (mq) {
      if (mq.matches) setMenu(false);
    });
  }

  /* ------------------------------------------------------------------------
     3. THANH NÚT CỐ ĐỊNH + BẢNG CHỌN CƠ SỞ
     - Ẩn thanh khi nút của hero đang hiện trên màn hình.
     - "Tìm đường" / "Chỉ đường" mở <dialog>: có sẵn bẫy focus, Esc để đóng.
     ------------------------------------------------------------------------ */
  var bar = $("[data-action-bar]");
  var heroCta = $("#hero-cta");
  if (bar && heroCta && "IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      var visible = entries[0].isIntersecting;
      bar.classList.toggle("is-hidden", visible);
      if (visible) bar.setAttribute("inert", ""); else bar.removeAttribute("inert");
    }).observe(heroCta);
  }

  var sheet = $("#chon-co-so");
  if (sheet) {
    var openSheet = function () {
      renderStatus();
      if (typeof sheet.showModal === "function") sheet.showModal();
      else sheet.setAttribute("open", "");
    };
    var closeSheet = function () {
      if (typeof sheet.close === "function") sheet.close();
      else sheet.removeAttribute("open");
    };
    $$("[data-sheet-open]").forEach(function (btn) { btn.addEventListener("click", openSheet); });
    $$("[data-sheet-close]", sheet).forEach(function (btn) { btn.addEventListener("click", closeSheet); });
    sheet.addEventListener("click", function (e) { if (e.target === sheet) closeSheet(); });
    $$("a", sheet).forEach(function (a) { a.addEventListener("click", closeSheet); });
  }

  /* ------------------------------------------------------------------------
     4. BẢN ĐỒ TỰ HIỆN CƠ SỞ 2 KHI CUỘN GẦN TỚI MỤC (không tải iframe Google Maps lúc mở trang,
        nên không làm chậm phần đầu trang). Nút "Xem bản đồ" chỉ là dự phòng khi trình duyệt cũ.
     ------------------------------------------------------------------------ */
  /* query: tên địa điểm trên Google Maps, để bản đồ hiện thẻ phòng khám (tên, địa chỉ, rating, "Mở trong Maps")
     thay vì chỉ ghim theo tọa độ. lat/lng giữ vị trí bản đồ đúng cơ sở. */
  var BRANCH_GEO = {
    cs1: { name: "Cơ sở 1", query: "NHA KHOA QUỲNH THƯ, 217 Văn Tiến Dũng", lat: 15.9955452, lng: 108.2134546 },
    cs2: { name: "Cơ sở 2", query: "NHA KHOA QUỲNH THƯ _ cơ sở 2", lat: 16.0125987, lng: 108.2196122 }
  };
  var mapBox = $("[data-map]");
  if (mapBox) {
    var current = "cs2"; /* Bản đồ mở Cơ sở 2 trước (theo yêu cầu 2026-11-03) */
    var frame = $("[data-map-frame]", mapBox);
    var tabs = $("[data-map-tabs]", mapBox);
    var mapSrc = function (key) {
      var b = BRANCH_GEO[key];
      return "https://maps.google.com/maps?q=" + encodeURIComponent(b.query) +
        "&ll=" + b.lat + "," + b.lng + "&z=17&hl=vi&output=embed";
    };
    var loadMap = function () {
      var iframe = $("iframe", frame);
      if (!iframe) {
        iframe = doc.createElement("iframe");
        iframe.loading = "lazy";
        iframe.referrerPolicy = "no-referrer-when-downgrade";
        iframe.allowFullscreen = true;
        frame.innerHTML = "";
        frame.appendChild(iframe);
        if (tabs) tabs.hidden = false;
      }
      iframe.title = "Bản đồ Google Maps " + BRANCH_GEO[current].name;
      var url = mapSrc(current);
      if (iframe.getAttribute("src") !== url) iframe.src = url; /* cùng địa chỉ thì không tải lại */
    };
    var loadBtn = $("[data-map-load]", mapBox);
    if (loadBtn) loadBtn.addEventListener("click", loadMap);
    /* Tự tải bản đồ (Cơ sở 2, zoom 17) khi mục "2 cơ sở" sắp vào màn hình, cách 600px */
    if ("IntersectionObserver" in window) {
      var mapObs = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) {
          loadMap();
          mapObs.disconnect();
        }
      }, { rootMargin: "600px 0px" });
      mapObs.observe(mapBox);
    } else {
      loadMap();
    }

    /* Chọn cơ sở: đổi bản đồ, nút tab trên bản đồ và viền sáng của thẻ cơ sở tương ứng */
    var selectBranch = function (key) {
      current = key;
      $$("[data-map-branch]", mapBox).forEach(function (b) {
        b.setAttribute("aria-pressed", String(b.getAttribute("data-map-branch") === key));
      });
      $$("[data-branch]").forEach(function (card) {
        card.classList.toggle("is-active", card.getAttribute("data-branch") === key);
      });
      loadMap();
    };
    $$("[data-map-branch]", mapBox).forEach(function (btn) {
      btn.addEventListener("click", function () { selectBranch(btn.getAttribute("data-map-branch")); });
    });
    /* Nút "Xem trên bản đồ" trong thẻ cơ sở. Điện thoại / máy tính bảng: bản đồ nằm dưới thẻ nên cuộn tới bản đồ. */
    $$("[data-show-map]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        selectBranch(btn.getAttribute("data-show-map"));
        if (window.innerWidth < 1024) {
          var calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
          mapBox.scrollIntoView({ behavior: calm ? "auto" : "smooth", block: "center" });
        }
      });
    });
  }

  /* ------------------------------------------------------------------------
     5. ĐẾM SỰ KIỆN CLARITY
     Gắn data-track="call | zalo | directions | price | service" vào nút/link
     (service = bấm thẻ dịch vụ để mở trang riêng trong dich-vu/).
     window.clarity được tạo sẵn trong <head> (hàng đợi), nên gọi lúc nào cũng an toàn.
     ------------------------------------------------------------------------ */
  var TRACK_EVENTS = { call: "bam_goi", zalo: "bam_zalo", directions: "bam_chi_duong", price: "xem_bang_gia", service: "bam_dich_vu" };
  var priceViewed = false;
  function track(name) {
    if (name === "xem_bang_gia") {
      if (priceViewed) return;
      priceViewed = true;
    }
    if (typeof window.clarity === "function") window.clarity("event", name);
  }
  doc.addEventListener("click", function (e) {
    var el = e.target.closest("[data-track]");
    if (!el) return;
    var name = TRACK_EVENTS[el.getAttribute("data-track")];
    if (name) track(name);
  });
  var priceSection = doc.getElementById("bang-gia");
  if (priceSection && "IntersectionObserver" in window) {
    var priceObs = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) {
        track("xem_bang_gia");
        priceObs.disconnect();
      }
    }, { threshold: 0.4 });
    priceObs.observe(priceSection);
  }

  /* ------------------------------------------------------------------------
     6. HIỆN DẦN KHI CUỘN (.reveal). Hero không dùng hiệu ứng này.
     ------------------------------------------------------------------------ */
  var reveals = $$(".reveal");
  if (!("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var revealObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObs.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { revealObs.observe(el); });
  }

  /* ------------------------------------------------------------------------
     6b. MỤC ĐÁNH GIÁ (#danh-gia)
     - Thẻ đánh giá chạy ngang: nhân đôi danh sách (bản sao aria-hidden) để chạy vòng liền mạch.
       Chỉ chạy khi mục nằm trong màn hình; dừng khi rê chuột / chạm (CSS).
     - Điểm Google từng cơ sở đếm từ 0 lên khi cuộn tới.
     - Giảm chuyển động: giữ lưới tĩnh, không đếm số.
     ------------------------------------------------------------------------ */
  var reviewsSection = doc.getElementById("danh-gia");
  var calmMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reviewsSection && !calmMotion && "IntersectionObserver" in window) {
    var marquee = $("[data-marquee]", reviewsSection);
    var list = marquee && $(".reviews", marquee);
    if (list) {
      Array.prototype.slice.call(list.children).forEach(function (li) {
        var copy = li.cloneNode(true);
        copy.setAttribute("aria-hidden", "true");
        list.appendChild(copy);
      });
      marquee.style.setProperty("--rv-dur", (list.children.length / 2) * 9 + "s");
      marquee.classList.add("is-marquee", "is-paused");
      new IntersectionObserver(function (entries) {
        marquee.classList.toggle("is-paused", !entries[0].isIntersecting);
      }).observe(marquee);
    }

    var counters = $$(".rv-summary [data-count]", reviewsSection);
    counters.forEach(function (el) { el.textContent = el.getAttribute("data-count").indexOf(".") > -1 ? "0,0" : "0"; });
    var countObs = new IntersectionObserver(function (entries) {
      if (!entries[0].isIntersecting) return;
      countObs.disconnect();
      var t0 = null, dur = 1400;
      function step(ts) {
        if (t0 === null) t0 = ts;
        var p = Math.min((ts - t0) / dur, 1), ease = 1 - Math.pow(1 - p, 3);
        counters.forEach(function (el) {
          var raw = el.getAttribute("data-count"), dec = raw.indexOf(".") > -1, v = parseFloat(raw) * ease;
          el.textContent = dec ? v.toFixed(1).replace(".", ",") : String(Math.round(v));
        });
        if (p < 1) window.requestAnimationFrame(step);
      }
      window.requestAnimationFrame(step);
    }, { threshold: 0.3 });
    countObs.observe($(".rv-summary", reviewsSection));
  }

  /* ------------------------------------------------------------------------
     7. CHAT ZALO (nút nổi góc phải dưới, CHỈ hiện trên máy tính ≥ 1024px)
     - Bấm nút: mở/đóng bảng nhỏ có nút "Mở Zalo để chat".
     - Đóng bằng nút ×, phím Esc, hoặc bấm ra ngoài bảng.
     - Clarity: mo_chat_zalo khi mở bảng; bam_zalo khi bấm "Mở Zalo" (qua data-track).
     ------------------------------------------------------------------------ */
  var zalo = $("[data-zalo-chat]");
  if (zalo) {
    var zToggle = $("[data-zalo-toggle]", zalo);
    var zPanel = $("#zalo-chat-panel");
    var setZalo = function (open, returnFocus) {
      zPanel.hidden = !open;
      zToggle.setAttribute("aria-expanded", String(open));
      zToggle.setAttribute("aria-label", open ? "Chat Zalo, đóng khung chat" : "Chat Zalo, mở khung chat");
      if (open) {
        renderStatus();
        zPanel.focus();
        track("mo_chat_zalo");
      } else if (returnFocus) {
        zToggle.focus();
      }
    };
    zToggle.setAttribute("aria-label", "Chat Zalo, mở khung chat");
    zToggle.addEventListener("click", function () { setZalo(zPanel.hidden, false); });
    $$("[data-zalo-close]", zalo).forEach(function (b) {
      b.addEventListener("click", function () { setZalo(false, true); });
    });
    doc.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !zPanel.hidden) setZalo(false, true);
    });
    doc.addEventListener("click", function (e) {
      if (!zPanel.hidden && !zalo.contains(e.target)) setZalo(false, false);
    });
  }
})();
