/* ==========================================================================
   Nha khoa Quỳnh Thư - script.js (JavaScript thuần, không thư viện)
   0. Cấu hình HOURS 2 cơ sở + tính "Đang mở / Đã đóng" (giờ Việt Nam)
   1. Header thu nhỏ khi cuộn
   2. Menu điện thoại
   3. Thanh nút cố định + bảng chọn cơ sở khi bấm "Chỉ đường"
   4. Bản đồ chỉ tải khi bấm
   5. Đếm sự kiện Clarity: bam_goi, bam_zalo, bam_chi_duong, xem_bang_gia
   6. Hiện dần khi cuộn
   ========================================================================== */
(function () {
  "use strict";

  var doc = document;
  var $ = function (sel, root) { return (root || doc).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || doc).querySelectorAll(sel)); };

  /* Hiện mục "Đội ngũ" khi đã có ảnh + thông tin bác sĩ [CẦN XÁC NHẬN] */
  var SHOW_TEAM = false;
  if (SHOW_TEAM) {
    var team = doc.getElementById("doi-ngu");
    if (team) team.hidden = false;
  }

  /* ------------------------------------------------------------------------
     0. GIỜ LÀM VIỆC + TRẠNG THÁI MỞ CỬA
     - Múi giờ: Asia/Ho_Chi_Minh (đúng giờ Việt Nam dù khách ở đâu).
     - Ngày: 0 = Chủ nhật, 1 = Thứ 2, ... 6 = Thứ 7. Ngày nghỉ: để null.
     - [CẦN XÁC NHẬN] giờ mở cửa và ngày làm việc. Hiện chỉ chắc chắn đóng lúc 19:00.
       Giá trị "08:00" bên dưới là TẠM để thử, phải sửa theo phòng khám.
     - Thử: thêm ?gio=08:00 vào địa chỉ (có thể thêm &thu=0 để thử Chủ nhật).
     ------------------------------------------------------------------------ */
  var TIME_ZONE = "Asia/Ho_Chi_Minh";
  var HOURS = {
    cs1: {
      name: "Cơ sở 1",
      days: {
        0: ["08:00", "19:00"], 1: ["08:00", "19:00"], 2: ["08:00", "19:00"], 3: ["08:00", "19:00"],
        4: ["08:00", "19:00"], 5: ["08:00", "19:00"], 6: ["08:00", "19:00"]
      }
    },
    cs2: {
      name: "Cơ sở 2",
      days: {
        0: ["08:00", "19:00"], 1: ["08:00", "19:00"], 2: ["08:00", "19:00"], 3: ["08:00", "19:00"],
        4: ["08:00", "19:00"], 5: ["08:00", "19:00"], 6: ["08:00", "19:00"]
      }
    }
  };
  var DAY_NAMES = ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];

  function toMinutes(hhmm) {
    var p = String(hhmm).split(":");
    return parseInt(p[0], 10) * 60 + parseInt(p[1] || "0", 10);
  }

  /* Lấy thứ + phút hiện tại theo giờ Việt Nam. Có thể ghi đè bằng ?gio=HH:MM&thu=0..6 */
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

  /* Trả về { open: true/false, closes: "19:00", next: "mở lại 08:00 ngày mai" } */
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

  function statusText(key, now) {
    if (key === "all") {
      var s1 = branchStatus(HOURS.cs1, now);
      var s2 = branchStatus(HOURS.cs2, now);
      if (s1.open && s2.open) {
        return { open: true, text: "Cơ sở 1 và Cơ sở 2 đang mở · đóng lúc " + s1.closes };
      }
      if (!s1.open && !s2.open) {
        return { open: false, text: "Đã đóng cửa" + (s1.next ? " · " + s1.next : "") };
      }
      return {
        open: true,
        text: (s1.open ? "Cơ sở 1 đang mở · Cơ sở 2 đã đóng" : "Cơ sở 2 đang mở · Cơ sở 1 đã đóng")
      };
    }
    var b = HOURS[key];
    if (!b) return null;
    var s = branchStatus(b, now);
    return s.open
      ? { open: true, text: "Đang mở · đóng lúc " + s.closes }
      : { open: false, text: "Đã đóng" + (s.next ? " · " + s.next : "") };
  }

  function renderStatus() {
    var now = nowInVietnam();
    $$("[data-status]").forEach(function (el) {
      var r = statusText(el.getAttribute("data-status"), now);
      if (!r) return;
      el.textContent = r.text;
      el.classList.toggle("is-open", r.open);
      el.classList.toggle("is-closed", !r.open);
    });
  }
  renderStatus();
  setInterval(renderStatus, 60 * 1000);

  /* ------------------------------------------------------------------------
     1. HEADER THU NHỎ KHI CUỘN (sau 8px)
     ------------------------------------------------------------------------ */
  var header = $(".site-header");
  if (header) {
    var ticking = false;
    var onScroll = function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        header.classList.toggle("is-scrolled", window.scrollY > 8);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ------------------------------------------------------------------------
     2. MENU ĐIỆN THOẠI
     ------------------------------------------------------------------------ */
  var toggle = $(".menu-toggle");
  var nav = $("#menu-chinh");
  if (toggle && nav) {
    var setMenu = function (open) {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Đóng menu" : "Mở menu");
      nav.classList.toggle("is-open", open);
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
     - Ẩn thanh khi nút CTA của hero đang hiện trên màn hình.
     - "Chỉ đường" mở <dialog>: có sẵn bẫy focus, Esc để đóng.
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
    /* Bấm ra vùng tối bên ngoài thì đóng */
    sheet.addEventListener("click", function (e) { if (e.target === sheet) closeSheet(); });
    /* Chọn cơ sở xong thì đóng bảng */
    $$("a", sheet).forEach(function (a) { a.addEventListener("click", closeSheet); });
  }

  /* ------------------------------------------------------------------------
     4. BẢN ĐỒ CHỈ TẢI KHI BẤM (không tải iframe Google Maps lúc mở trang)
     ------------------------------------------------------------------------ */
  var BRANCH_GEO = {
    cs1: { name: "Cơ sở 1", lat: 15.9955452, lng: 108.2134546 },
    cs2: { name: "Cơ sở 2", lat: 16.0125987, lng: 108.2196122 }
  };
  var mapBox = $("[data-map]");
  if (mapBox) {
    var current = "cs1";
    var frame = $("[data-map-frame]", mapBox);
    var mapSrc = function (key) {
      var b = BRANCH_GEO[key];
      return "https://maps.google.com/maps?q=" + b.lat + "," + b.lng + "&z=17&hl=vi&output=embed";
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
      }
      iframe.title = "Bản đồ Google Maps " + BRANCH_GEO[current].name;
      iframe.src = mapSrc(current);
    };
    var loadBtn = $("[data-map-load]", mapBox);
    if (loadBtn) loadBtn.addEventListener("click", loadMap);

    $$("[data-map-branch]", mapBox).forEach(function (btn) {
      btn.addEventListener("click", function () {
        current = btn.getAttribute("data-map-branch");
        $$("[data-map-branch]", mapBox).forEach(function (b) {
          b.setAttribute("aria-pressed", String(b === btn));
        });
        if ($("iframe", frame)) loadMap();
      });
    });
  }

  /* ------------------------------------------------------------------------
     5. ĐẾM SỰ KIỆN CLARITY
     Gắn data-track="call | zalo | directions | price" vào nút/link.
     window.clarity được tạo sẵn trong <head> (hàng đợi), nên gọi lúc nào cũng an toàn.
     ------------------------------------------------------------------------ */
  var TRACK_EVENTS = {
    call: "bam_goi",
    zalo: "bam_zalo",
    directions: "bam_chi_duong",
    price: "xem_bang_gia"
  };
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
  /* Xem bảng giá: tính 1 lần khi mục Bảng giá hiện ít nhất 40% */
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
     Tắt khi người dùng chọn giảm chuyển động (CSS xử lý).
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
    }, { rootMargin: "0px 0px -10% 0px" });
    reveals.forEach(function (el) { revealObs.observe(el); });
  }
})();
