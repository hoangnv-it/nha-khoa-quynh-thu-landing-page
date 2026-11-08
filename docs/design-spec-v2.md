# Design spec v2 (cập nhật 2026-11-03): Landing page Nha khoa Quỳnh Thư

> Bản này mô tả đúng ảnh thiết kế đã chốt: `design/Nha Khoa Quỳnh Thư Website Homepage.png`.
> Giao diện (bố cục, màu, font, icon, kích thước, hình khối) phải giống ảnh 100%.
> Riêng phần chữ: chữ nào trong ảnh vi phạm quy tắc nội dung (mục 9) thì thay bằng chữ đúng luật, giữ nguyên độ dài và vị trí.
> Mục kỹ thuật: làm theo `PROJECT_BRIEF.md` (HTML/CSS/JS thuần, mọi file trong `public/`, chạy được bằng file://).
> Mục nào ghi **[CẦN XÁC NHẬN]** phải hỏi phòng khám trước khi ra mắt. Không tự bịa.

---

## 0. Vai trò và mục tiêu

- Landing page 1 trang cho **Nha khoa Quỳnh Thư**, nha khoa gia đình, **2 cơ sở tại Hòa Xuân, Đà Nẵng**.
- Giọng điệu: chuyên nghiệp, sạch sẽ, gần gũi, đáng tin.
- Ý chính: **"Phố lên đèn"**: phòng khám mở cửa đến 19:00, bố mẹ tan làm vẫn kịp đưa cả nhà đi khám.
- Mục tiêu: khách **Gọi**, **nhắn Zalo**, hoặc **Tìm đường** đến cơ sở gần nhất.
- Toàn bộ chữ trên web bằng tiếng Việt.

### Quy tắc hình ảnh
- Chỉ dùng **ảnh thật** do phòng khám đăng (Facebook 2 cơ sở, ảnh "Của chủ sở hữu" trên Google Maps). Không dùng ảnh AI, ảnh hoạt hình người hoặc tòa nhà.
- Ảnh tòa nhà trong ảnh thiết kế (thẻ 2 cơ sở) là ảnh minh họa: thay bằng ảnh thật của từng cơ sở.
- Minh họa được phép: 6 icon dịch vụ (bộ icon do phòng khám/chủ dự án cung cấp ngày 2026-11-03, phong cách minh họa mềm, có hình bé cười ở icon Khám răng trẻ em), icon nét UI, nền bản đồ trang trí. Đây là ngoại lệ do chủ dự án chọn cho quy tắc "không hoạt hình".
- Nền tối (xanh teal) **chỉ ở Hero và Footer**. Các phần khác nền sáng.

---

## 1. Kỹ thuật (tóm tắt, chi tiết ở PROJECT_BRIEF.md)

- HTML + CSS + JS thuần. File: `public/index.html`, `public/style.css`, `public/script.js`, `public/assets/...`.
- Mobile-first. Breakpoint: < 600px, 600-1023px, ≥ 1024px. Nội dung rộng tối đa 1200px.
- Ảnh WebP, có `width`/`height`, `loading="lazy"` trừ logo và ảnh hero (`fetchpriority="high"`).
- Bảng giá, đánh giá viết thẳng trong HTML (không fetch JSON).
- Bản đồ Google tự tải khi cuộn gần tới mục "2 cơ sở" (cách 600px), không tải lúc mở trang.
- Font tự host: **Be Vietnam Pro** 400/500/700 (toàn trang) + **Dancing Script** 600 (CHỈ dòng chữ viết tay ở footer).

---

## 2. Thông tin phòng khám (dùng đúng)

| Mục | Giá trị |
|---|---|
| Tên hiển thị | Nha Khoa **QUỲNH THƯ** |
| Công ty | Công ty TNHH MTV Nha khoa Quỳnh Thư |
| Cơ sở 1 | 217 Văn Tiến Dũng, Hòa Xuân, Đà Nẵng **[CẦN XÁC NHẬN: trang Facebook và Google Maps ghi 217, biển hiệu ghi 114]** |
| Cơ sở 2 | 303 Lê Quảng Chí, Hòa Xuân, Đà Nẵng (Google Maps, Facebook, biển hiệu đều ghi 303) |
| Điện thoại (cả 2) | 0944 479 405, `tel:+84944479405` |
| Zalo | `https://zalo.me/0944479405` (đã xác nhận 2026-11-08) |
| Email | lequynhthu@gmail.com |
| Facebook | CS1 https://www.facebook.com/nhakhoaquynhthu · CS2 https://www.facebook.com/nhakhoaquynhthu2 |
| Google Maps CS1 | 15.9955452, 108.2134546 · 4,9★ (42 đánh giá) |
| Google Maps CS2 | 16.0125987, 108.2196122 · 4,7★ (61 đánh giá) |
| Giờ làm việc (Google Maps, 2026-11-03) | Thứ 2 - Thứ 7: 08:00 - 19:00 · Chủ nhật: 08:00 - 18:00. Cả 2 cơ sở giống nhau. |
| Dịch vụ | Khám răng trẻ em · Trám răng thẩm mỹ · Điều trị tủy · Niềng răng · Răng sứ thẩm mỹ · Tẩy trắng răng · Nhổ răng, nhổ răng khôn · Cạo vôi răng · Răng tháo lắp |
| Tiện ích | Chụp phim CBCT · Scan miệng · Phần mềm quản lý lịch hẹn, bệnh án · Trả góp 0% · Thẻ ATM/Visa/Master · Hỗ trợ hồ sơ bảo hiểm |
| Giá "chỉ từ" (banner của phòng khám trên Facebook) | Cạo vôi đánh bóng từ 150.000đ · Trám răng sâu từ 199.000đ · Răng tháo lắp từ 300.000đ · Tẩy trắng răng từ 900.000đ · Răng sứ từ 1.200.000đ **[CẦN XÁC NHẬN còn áp dụng]** |
| Đội ngũ | BS Quỳnh Thư (chủ phòng khám), cô Linh, nha sĩ Tuấn **[CẦN XÁC NHẬN họ tên, chức danh, ảnh]** |

Rating luôn ghi **riêng từng cơ sở**, kèm ngày cập nhật. Không gộp.

---

## 3. Ảnh (đã lấy về `anh-goc/`, xuất WebP vào `public/assets/images/`)

| Vị trí | File web | Nguồn gốc |
|---|---|---|
| Hero | `hero.webp` 1276×956 | Ảnh do chủ dự án cung cấp ngày 2026-11-03: 2 bác sĩ khám cho bé trên ghế nha khoa (ảnh gốc `anh-goc/hero-goc.png`). Thay ảnh 2 bác sĩ lấy từ Google Maps CS2 trước đó. [CẦN XÁC NHẬN] phụ huynh/phòng khám đồng ý cho dùng ảnh bé |
| Về phòng khám (ảnh trái) | `ve-phong-kham-1.webp` | Google Maps CS2: logo "Nha Khoa QUỲNH THƯ" trên tường phòng điều trị |
| Về phòng khám (ảnh phải) | `ve-phong-kham-2.webp` | Facebook CS2: phòng điều trị ghế xanh |
| Hình ảnh hoạt động (12 ảnh) | `hoat-dong-01…12.webp` 360×276 | Facebook CS1 |
| Nha khoa trẻ em | `tre-em.webp` 720×900 | Google Maps CS2: bác sĩ khám cho bé |
| Cơ sở 1 / Cơ sở 2 | `co-so-1.webp`, `co-so-2.webp` 480×384 | Google Maps CS1 / Facebook CS2 |
| Trước & sau | `truoc-sau-01…03.webp` 640×800 | Ảnh trước/sau do phòng khám đăng |

Không dùng: ảnh chụp màn hình phần mềm lịch hẹn (có tên bệnh nhân), ảnh banner khuyến mãi có chữ "miễn phí", ảnh mờ.

---

## 4. Design tokens (lấy từ ảnh thiết kế)

### 4.1 Màu

```css
:root {
  /* ĐỔI 2026-11-07: teal -> xanh dương theo logo (xem PROJECT_BRIEF mục 4).
     Ở các mục dưới, chữ "teal" nghĩa là xanh dương --blue-*. */
  /* Xanh dương: Hero + Footer (nền tối) */
  --blue-900: #0B5C94;   /* nền hero, footer */
  --blue-800: #0F68A0;   /* gradient hero */
  --blue-600: #0F68A0;   /* eyebrow, link, nav đang chọn, nút "Xem bản đồ" */
  --blue-100: #DCEBF8;   /* viền, nền nhạt */

  /* Xanh logo + nhấn */
  --brand:    #10689E;   /* logo, icon */
  --brand-50: #E4EFFA;   /* nền khối "Về phòng khám" */
  --accent:   #035AC3;   /* viền sáng thẻ dịch vụ, dấu ngoặc kép đánh giá */

  /* Chữ */
  --ink:      #0E2F4F;   /* tiêu đề */
  --ink-2:    #3B5168;   /* chữ thường */
  --ink-3:    #5B7086;   /* chữ phụ */

  /* Nền sáng */
  --bg:       #F4F8FC;   /* nền trang */
  --card:     #FFFFFF;
  --line:     #E1EAF4;

  /* Nút chính (vàng) */
  --cta:      #FFD047;
  --cta-600:  #F5BF1F;
  --on-cta:   #1E2A33;

  /* Điểm nhấn */
  --gold:     #F5B50F;   /* sao, số rating, ngôi sao trên icon, tia trang trí */
  --open:     #1F9D61;
  --pin-red:  #C0443A;   /* ghim trên nền bản đồ */
}
```

- Vàng `--cta` dùng cho nút chính: "Gọi ngay", số điện thoại ở header, "Tìm hiểu thêm".
- Nút phụ trên nền tối: viền trắng, chữ trắng ("Tìm đường").

### 4.2 Chữ

| Token | Mobile | Desktop (1280) | Đậm |
|---|---|---|---|
| h1 hero ("Phố lên đèn") | 44px / 1.1 | 72px / 1.05 | 700 |
| h2 lớn (Dịch vụ, Về phòng khám) | 26px / 1.25 | 36px / 1.2 | 700 |
| h2 nhỏ (Hình ảnh hoạt động, 2 cơ sở) | 22px / 1.3 | 28px / 1.25 | 700 |
| Sub hero | 17px / 1.5 | 21px / 1.5 | 400 |
| Chữ thường | 15px / 1.6 | 16px / 1.65 | 400 |
| Eyebrow | 13px, IN HOA, giãn chữ .04em, màu `--teal-600` | 15px | 700 |
| Nhãn thẻ dịch vụ | 15px | 16px | 500 |
| Chữ viết tay footer | Dancing Script 600, 22px | 26px, xoay -8° | 600 |

### 4.3 Hình khối
- Nút: bo tròn hoàn toàn (999px). Cao 48px (hero 52px).
- Thẻ: bo 16px, nền trắng, viền 1px `--line`, bóng nhẹ `0 6px 24px rgba(10,60,90,.08)`.
- Ảnh: bo 10-16px. Ảnh ở khối "Về phòng khám" có viền trắng 6px, xoay nhẹ (-2° và 3°).
- Khoảng cách section: 56px mobile, 72px desktop.

---

## 5. Cấu trúc trang (theo ảnh, thêm các phần ngoài ảnh cùng phong cách)

Thứ tự: Header → Hero → Dịch vụ nổi bật → Về Nha khoa Quỳnh Thư → *Nha khoa trẻ em* → *Bảng giá* → *Trước & sau* → Hình ảnh hoạt động + đánh giá → *Khách hàng nói gì* → 2 cơ sở → *Hỏi đáp* → Footer → Thanh nút cố định (điện thoại).
(*In nghiêng*: không có trong ảnh, giữ lại, vẽ cùng phong cách: eyebrow teal + tiêu đề navy, thẻ trắng bo 16px.)

### 5.1 Header (nền trắng, dính trên cùng)
- Trái: logo xanh (hình răng có trái tim + "Nha Khoa" / "QUỲNH THƯ"), cao 56px desktop, 44px mobile.
- Giữa: menu **Trang chủ · Dịch vụ · Bảng giá · Đánh giá · Liên hệ**. Mục đang xem: chữ teal đậm, gạch chân teal 2px.
- Phải: nút vàng bo tròn có icon điện thoại "0944 479 405".
- Mobile: logo + nút menu (bảng trắng toàn chiều ngang).
- Menu con "Dịch vụ" (thêm 2026-11-04): có mũi tên nhỏ cạnh chữ. Máy tính: rê chuột hoặc Tab vào thì hộp trắng bo 16px (rộng 290px, có mũi nhọn lên) trượt xuống + mờ dần, 6 dịch vụ hiện lần lượt, mỗi dòng có icon 40px + tên; trang đang xem được tô `--teal-100`; hover icon nghiêng nhẹ. Bấm tên dịch vụ để sang trang riêng. Esc hoặc bấm ra ngoài để đóng. Điện thoại: bấm mũi tên (bên phải chữ "Dịch vụ") để xổ danh sách ngay trong hamburger (accordion trượt xuống); bấm chữ "Dịch vụ" vẫn cuộn tới mục Dịch vụ nổi bật. Có đủ ở trang chủ, 404 và 6 trang dịch vụ. Tắt chuyển động khi bật giảm chuyển động.

### 5.2 Hero (nền teal tối)
- Desktop: chữ bên trái (~50%), ảnh bên phải (~55%) tràn mép phải. Mép trái ảnh cắt theo **vòng cung lớn**, kèm một vòng cung trong suốt sáng hơn. Đáy hero là **đường lượn sóng** chuyển sang nền sáng.
- Nhãn bo tròn (nền trắng mờ, chữ teal nhạt): "Nha khoa uy tín" *(ảnh gốc: "Nha khoa Quỳnh Thư", đổi ngày 2026-11-03 theo yêu cầu)*. Thêm 2026-11-04: icon ảnh huy hiệu vàng 12 cánh có ngôi sao trắng (`assets/icons/uy-tin.svg`, 30px máy tính / 24px điện thoại) đứng trước chữ, bật nhẹ 1 lần khi trang tải (không mờ dần từ opacity 0). Icon trang trí, `alt=""`.
- H1 trắng: **"Cả nhà an tâm"** *(ảnh gốc: "Phố lên đèn", đổi ngày 2026-11-03 theo yêu cầu)*
- Sub: "Nha khoa gần nhà, mở cửa đến 19:00, chăm sóc nụ cười gia đình bạn" *(ảnh gốc ghi "mở cửa cả buổi tối", đổi cho đúng giờ thật)*
- 3 điểm nổi bật, icon nét trắng ở trên, chữ 2 dòng, ngăn bởi vạch dọc mờ:
  - khiên + dấu tích: "Thiết bị / hiện đại" *(ảnh gốc: "An toàn hiện đại")*
  - trái tim: "Báo giá / rõ ràng" *(ảnh gốc: "Nhẹ nhàng không đau")*
  - nhóm người: "Trả góp / 0%" *(ảnh gốc: "Chi phí hợp lý")*
- Nút: vàng "📞 Gọi ngay: 0944 479 405" + viền trắng "📍 Tìm đường" (mở bảng chọn cơ sở).
- Dòng trạng thái nhỏ dưới nút (JS): "Đang mở cửa · đóng lúc 19:00" / "Đã đóng cửa · mở lại 08:00 ngày mai".
- Dòng giờ làm việc (thêm 2026-11-04, viết cố định trong HTML, không do JS): icon đồng hồ + "Thứ 2 - Thứ 7: 08:00 - 19:00 · Chủ nhật: 08:00 - 18:00" (giờ in đậm). Máy tính 1 dòng, điện thoại 2 dòng. Giờ đổi thì sửa cả `HOURS` trong script, dòng này, mục 2 cơ sở, footer và JSON-LD.
- Mobile: ảnh trên (bo cong đáy), chữ dưới.

### 5.3 Dịch vụ nổi bật (nền sáng)
- Eyebrow giữa có 2 đường kẻ hai bên: "DỊCH VỤ NỔI BẬT"; h2 giữa: "Chăm sóc toàn diện cho cả gia đình".
- 6 thẻ trắng một hàng (desktop), icon dạng ô bo tròn 88px (76px trên điện thoại) ở trên, nhãn dưới, theo thứ tự: Khám răng trẻ em · Răng sứ thẩm mỹ · Điều trị tủy · Niềng răng · Tẩy trắng răng · Nhổ răng (đổi ngày 2026-11-03 cho khớp bộ icon mới: bỏ "Trám răng thẩm mỹ", thêm "Nhổ răng"; giá trám răng vẫn có trong Bảng giá). Mobile 2 cột, tablet 3 cột.
- Bấm thẻ: mở trang riêng của dịch vụ đó trong `dich-vu/` (từ 2026-11-04, xem 5.15). Clarity `bam_dich_vu`.
- Hover (và focus bàn phím): giữ hiệu ứng nâng thẻ cũ; thêm viền sáng màu xanh chạy quanh thẻ 1 vòng (1,2 giây) và chuyển động riêng của từng icon: bé lắc lư, răng sứ nhấc nhẹ + vệt sáng quét, kính lúp lướt tìm, niềng răng siết, tẩy trắng sáng lên nhấp nháy, nhổ răng giật lên. Tắt hết khi người dùng bật giảm chuyển động.

### 5.4 Về Nha khoa Quỳnh Thư (khối nền `--brand-50`, bo 20px)
- Trái: eyebrow "VỀ NHA KHOA QUỲNH THƯ", h2 "Uy tín từ chất lượng đến sự tận tâm", đoạn văn, nút vàng "Tìm hiểu thêm →".
- Đoạn văn (thay chữ vi phạm trong ảnh): "Hai cơ sở tại Hòa Xuân, phòng điều trị sạch sẽ, có chụp phim CBCT và scan miệng. Bác sĩ khám, giải thích và báo giá rõ ràng trước khi điều trị."
- Phải: 2 ảnh chồng nhau, viền trắng, xoay nhẹ; tia vàng trang trí góc trên phải.

### 5.5 Nha khoa trẻ em (thêm)
- Ảnh `tre-em.webp` + eyebrow "NHA KHOA TRẺ EM", h2 "Bé đi khám răng không còn là chuyện khó", 4 bước đánh số **[CẦN XÁC NHẬN quy trình]**, nút viền teal "Đặt lịch khám cho bé" (Zalo).

### 5.6 Bảng giá (thêm)
- Eyebrow "BẢNG GIÁ", h2 "Giá tham khảo, báo trước khi điều trị".
- Thẻ trắng dạng bảng: Dịch vụ | Giá tham khảo. 5 dòng giá "từ ..." ở mục 2 **[CẦN XÁC NHẬN]**. Dịch vụ khác: "Bác sĩ khám và báo giá".
- Ghi chú: "Giá có thể thay đổi theo tình trạng răng. Bác sĩ khám và báo giá trước khi điều trị."
- Chip: Trả góp 0% · Thẻ ATM/Visa/Master · Hỗ trợ hồ sơ bảo hiểm.

### 5.7 Trước & sau (thêm)
- 3 thẻ ảnh trước/sau của phòng khám, chú thích tên điều trị. Ghi chú: "Kết quả khác nhau tùy tình trạng của từng người."

### 5.7b Đội ngũ (thêm 2026-11-04, không có trong ảnh thiết kế)
- Nằm ngay dưới "Trước & sau". Eyebrow giữa có 2 đường kẻ: "ĐỘI NGŨ"; h2 giữa: "Bác sĩ của Nha khoa Quỳnh Thư".
- 4 thẻ (2 cột điện thoại, 4 cột từ 600px): ảnh dọc 4:5, tên, chức danh. Thẻ trắng bo 16px, viền `--line`.
- Thẻ 1: Bác sĩ Quỳnh Thư, "Chủ phòng khám" (ảnh do chủ dự án cung cấp, cắt bỏ cốc nước, `bs-quynh-thu.webp` 640×800). **[CẦN XÁC NHẬN]** họ tên đầy đủ, học hàm, chuyên môn. Không ghi số năm kinh nghiệm khi chưa xác nhận.
- Thẻ 2 đến 4: chỗ giữ chỗ (viền nét đứt, hình người mờ, "Họ tên bác sĩ" / "Chức danh, đang cập nhật"). **[CẦN XÁC NHẬN]** họ tên, chức danh, ảnh (tên đã thấy trong bài đăng: cô Linh, nha sĩ Tuấn). Có ảnh thì thay khung bằng thẻ như thẻ 1.
- Bỏ biến `SHOW_TEAM` (trước đây ẩn mục này).

### 5.8 Hình ảnh hoạt động + đánh giá (theo ảnh)
- Eyebrow trái "HÌNH ẢNH HOẠT ĐỘNG"; h2 "Nha khoa Quỳnh Thư - Luôn đồng hành cùng bạn".
- Lưới 6 cột × 2 hàng ảnh bo 10px; bên phải 1 thẻ trắng: dấu ngoặc kép xanh, câu đánh giá in nghiêng, 5 sao vàng, tên khách.
- Câu đánh giá phải là **đánh giá thật**, giữ nguyên văn: "Phòng khám sạch sẽ, dỗ con nít rất kiên trì, rất nhanh." · Phương Anh N. - Cơ sở 2 *(ảnh gốc dùng câu và tên giả "Chị Mai Anh")*.
- Mobile: lưới 3 cột, thẻ đánh giá xuống dưới.

### 5.9 Khách hàng nói gì (thêm)
- Mỗi thẻ: 5 sao vàng ở trên, câu đánh giá, tên khách. Không ghi nhãn cơ sở (đã bỏ 2026-11-03). Số sao đã đối chiếu trên Google Maps: cả 6 đều 5 sao.
- 6 đánh giá thật (nguyên văn) từ Google Maps (cơ sở ghi để đối chiếu, không hiện trên web):
  - CS1, Láng H.: "Bác sĩ và các bạn ở nha khoa rất chuyên nghiệp, tận tâm, làm răng rất nhẹ nhàng, giá cả phải chăng."
  - CS1, Hương T.: "Các chị dễ thương lắm, tư vấn tận tình, báo giá rõ ràng và giá cũng mềm nha."
  - CS1, Kim Thoa Q.: "Trám răng thẩm mỹ đẹp, lấy vôi sạch, giá cả vừa phải, phòng khám đông khách, bác sĩ cẩn thận, nhẹ nhàng."
  - CS2, Phương Anh N.: "Phòng khám sạch sẽ, dỗ con nít rất kiên trì, rất nhanh."
  - CS2, Thủy Tiên T.: "Đã trám và lấy vôi răng ở đây, rất hài lòng vì dịch vụ tốt, không đau, tư vấn rõ ràng trước khám, phòng sạch sẽ thoáng mát."
  - CS2, Thuy H.: "Tư vấn nhiệt tình, rõ ràng, răng mình hơi yếu nhưng bác sĩ làm rất nhẹ nhàng, không đau, mình rất hài lòng và sẽ quay lại."

### 5.10 2 cơ sở (theo ảnh)
- Eyebrow "2 CƠ SỞ TẠI HÒA XUÂN, ĐÀ NẴNG"; h2 "Thuận tiện cho mọi nhà".
- 2 thẻ trắng: ảnh bên trái, bên phải: icon ghim teal + "Cơ sở 1/2", địa chỉ 2 dòng, rating "4,9 ★ (42 đánh giá)" (số và sao màu vàng). Thêm dòng giờ + trạng thái và nút Gọi · Chỉ đường.
- Bố cục (đổi 2026-11-04 để bản đồ to, dễ theo dõi vị trí): máy tính = cột trái 2 thẻ cơ sở xếp dọc (rộng 340-400px), cột phải bản đồ cao bằng cả 2 thẻ (tối thiểu 580px). Máy tính bảng và điện thoại = 2 thẻ xếp dọc, bản đồ nằm dưới (cao tối thiểu 440px / 340px). Mỗi thẻ có thêm nút chữ "Xem trên bản đồ": đổi bản đồ sang cơ sở đó (điện thoại và máy tính bảng tự cuộn tới bản đồ). Thẻ cơ sở đang hiện trên bản đồ có viền teal (`.is-active`, mặc định Cơ sở 2).
- Bản đồ tự hiện Cơ sở 2 (không cần bấm), zoom 17. Nút chọn Cơ sở 1 / Cơ sở 2 nằm giữa mép dưới bản đồ (đổi 2026-11-04, trước đây ở góc trên bên trái và đè lên tên phòng khám trong thẻ thông tin của Google). Nền bản đồ trang trí + ghim đỏ + nút "Xem bản đồ" chỉ là hình chờ trong lúc bản đồ đang tải.
- (Mô tả cũ) Thẻ thứ 3: nền bản đồ trang trí + ghim đỏ + nút teal bo tròn "Xem bản đồ →". Bấm: tải Google Maps, mở **Cơ sở 2** trước (đổi 2026-11-03), có nút chọn Cơ sở 1 / Cơ sở 2. Bản đồ tìm theo tên địa điểm trên Google Maps (kèm tọa độ) để hiện thẻ phòng khám: tên, địa chỉ, rating, nút "Mở trong Maps".
- Dưới thẻ: "Đánh giá trên Google Maps." (bỏ ngày cập nhật 2026-11-07 theo yêu cầu chủ dự án)

### 5.11 Hỏi đáp (thêm)
- `<details>`: Giờ làm việc? (trả lời theo Google Maps) · Có cần đặt lịch trước không? · Bé mấy tuổi nên khám răng lần đầu? · Trả góp 0% áp dụng thế nào? · Có hỗ trợ hồ sơ bảo hiểm không? Câu trả lời chưa có: **[CẦN XÁC NHẬN]**.

### 5.12 Footer (nền teal tối, mép trên lượn sóng)
- Một hàng (desktop), 4 cột: logo trắng | cột liên hệ xếp dọc 5 dòng: 📞 0944 479 405, Zalo, ✉ lequynhthu@gmail.com, Facebook cơ sở 1, Facebook cơ sở 2 | 🕒 "Đang mở cửa" + "(Đóng cửa lúc 19:00)" | chữ viết tay 2 dòng, xoay nhẹ, có nét gạch dưới: "Nụ cười khỏe đẹp / Cho cuộc sống thêm vui!". Đường kẻ dọc ngắn cạnh logo và cạnh giờ mở cửa (đổi 2026-11-04 theo ý tưởng của chủ dự án). Điện thoại: các khối xếp dọc, liên hệ nằm ngay sau logo.
- Đường kẻ mảnh, rồi 1 dòng giữa: "© 2026 · Công ty TNHH MTV Nha khoa Quỳnh Thư | 217 Văn Tiến Dũng, 303 Lê Quảng Chí, Hòa Xuân, Đà Nẵng". Không còn dòng "Thông tin chỉ mang tính tham khảo, không thay thế chẩn đoán của bác sĩ" và không còn hàng liên hệ ở dưới cùng.

### 5.13 Thanh nút cố định (điện thoại)
- Đáy màn hình, nền trắng: **Gọi** · **Zalo** (vàng) · **Chỉ đường** (mở bảng chọn cơ sở). Ẩn khi nút của hero đang hiện.

### 5.14 Chat Zalo (thêm 2026-11-03, không có trong ảnh thiết kế)
- CHỈ máy tính ≥ 1024px. Điện thoại không hiện (đã có nút Zalo ở thanh dưới).
- Nút nổi góc phải dưới (cách mép 24px): nhãn trắng "Chat Zalo" + nút tròn 60px màu xanh Zalo `#0068FF`, logo Zalo trắng, vòng sáng nhấp nháy nhẹ (tắt khi giảm chuyển động).
- Bấm: mở khung 320px bo 16px. Đầu khung nền xanh Zalo: logo phòng khám, "Nha khoa Quỳnh Thư", "Chat qua Zalo", nút ×. Thân khung: trạng thái mở cửa (dùng `HOURS`), "Nhắn Zalo để hỏi giá, đặt lịch khám.", nút xanh "Mở Zalo để chat" (`https://zalo.me/0944479405`), "Hoặc gọi: 0944 479 405".
- Đóng: nút ×, phím Esc, bấm ra ngoài. Không dùng widget Zalo OA, không mã QR.
- Không hứa thời gian trả lời.

---

### 5.15 Trang dịch vụ (thêm 2026-11-04, không có trong ảnh thiết kế)
- 6 trang tĩnh: `public/dich-vu/kham-tre-em.html`, `rang-su.html`, `dieu-tri-tuy.html`, `nieng-rang.html`, `tay-trang.html`, `nho-rang.html`. Đường dẫn trên mạng: `/dich-vu/<tên>` (Cloudflare tự bỏ đuôi .html).
- Dùng chung `style.css`, `script.js` (đường dẫn `../`). Header, footer, thanh nút dưới, Chat Zalo, bảng chọn cơ sở giống trang chủ. Menu "Dịch vụ" sáng (`aria-current="page"`).
- Thứ tự: breadcrumb · khối đầu trang nền `--brand-50` (eyebrow "Dịch vụ", h1 tên dịch vụ, đoạn giới thiệu, chip các dịch vụ con, nút Gọi + Nhắn Zalo, trạng thái mở cửa, icon lớn 220px / 128px trên điện thoại) · Dấu hiệu thường gặp (thẻ có dấu tích) · Quy trình 4 bước + Giá tham khảo (2 cột trên máy tính) · Hình ảnh thực tế (chỉ trang có ảnh thật) · khối Đặt lịch (Gọi, Zalo, Chỉ đường) · Dịch vụ khác (5 thẻ còn lại, giữ hiệu ứng hover).
- Nội dung chỉ dùng thông tin đã có: danh sách dịch vụ trên ảnh bìa Facebook, giá "chỉ từ", ảnh trước/sau, tiện ích (CBCT, scan miệng, trả góp 0%). Danh sách dấu hiệu và quy trình có [CẦN XÁC NHẬN], chờ bác sĩ duyệt.
- Header, footer chép riêng trong từng trang: sửa ở trang chủ thì sửa cả 6 trang.
- SEO: title, description, canonical riêng; JSON-LD `BreadcrumbList`. Có trong `sitemap.xml` và `llms.txt`.

## 6. JavaScript
1. Trạng thái mở/đóng theo `HOURS` (giờ Việt Nam), cập nhật mỗi 60 giây. Thử bằng `?gio=08:00&thu=0`.
2. Header thu nhỏ khi cuộn; menu đang xem tự đổi theo vị trí cuộn.
3. Menu điện thoại.
4. Thanh nút cố định + bảng chọn cơ sở (dialog).
5. Bản đồ tự tải khi cuộn gần tới mục "2 cơ sở" (IntersectionObserver, cách 600px; trình duyệt cũ không có thì tải ngay). Mặc định Cơ sở 2, zoom 17 (`z=17`, giữ nguyên, chủ dự án đã duyệt theo ảnh 2026-11-04).
6. Clarity: `bam_goi`, `bam_zalo`, `bam_chi_duong`, `xem_bang_gia`, `mo_chat_zalo`, `bam_dich_vu`.
7. Hiện dần khi cuộn (trừ hero), tắt khi `prefers-reduced-motion`.
8. Chat Zalo: mở/đóng khung, Clarity `mo_chat_zalo` khi mở.

## 7. SEO
- Title: "Nha khoa Quỳnh Thư - Nha khoa gia đình tại Hòa Xuân, Đà Nẵng"
- Description: "2 cơ sở tại Hòa Xuân, mở cửa đến 19:00. Nha khoa trẻ em, niềng răng, răng sứ, điều trị tủy. Báo giá rõ ràng trước khi điều trị. Gọi 0944 479 405."
- OG 1200×630: ảnh hero + logo trắng.
- JSON-LD: `Organization` + 2 `Dentist` (địa chỉ, tọa độ, điện thoại, giờ làm việc, Facebook). Không `aggregateRating`.

## 8. Truy cập
- Tương phản AA, viền focus rõ, `alt` tiếng Việt cho mọi ảnh, trạng thái có chữ (không chỉ màu), vùng bấm ≥ 44px, skip link.

## 9. Quy tắc nội dung (quảng cáo y tế)
- KHÔNG: "không đau", "an toàn tuyệt đối", "tốt nhất", "cam kết 100%", "miễn phí" (trừ khi phòng khám xác nhận). Chỉ được xuất hiện trong đánh giá thật, nguyên văn.
- KHÔNG bịa đánh giá, tên khách, giá, bác sĩ, số năm kinh nghiệm.
- KHÔNG dùng dấu gạch dài "–", "—". Dùng "-", ":" hoặc dấu phẩy.
- Chữ trong ảnh thiết kế đã thay (ghi để đối chiếu):

| Trong ảnh | Trên web | Lý do |
|---|---|---|
| "mở cửa cả buổi tối" | "mở cửa đến 19:00" | Đúng giờ thật |
| "An toàn hiện đại" | "Thiết bị hiện đại" | Không hứa "an toàn" |
| "Nhẹ nhàng không đau" | "Báo giá rõ ràng" | Cấm "không đau" |
| "Chi phí hợp lý" | "Trả góp 0%" | Dùng sự thật |
| "Với đội ngũ bác sĩ giàu kinh nghiệm... cam kết... nhẹ nhàng, an toàn và hiệu quả." | "Hai cơ sở tại Hòa Xuân, phòng điều trị sạch sẽ, có chụp phim CBCT và scan miệng. Bác sĩ khám, giải thích và báo giá rõ ràng trước khi điều trị." | Không bịa kinh nghiệm, không "cam kết", "an toàn" |
| Đánh giá "Chị Mai Anh - Hòa Xuân" | Đánh giá thật của Phương Anh N. - Cơ sở 2 | Không bịa đánh giá |
| "–" | "-" | Quy tắc dấu |
| Ảnh tòa nhà ở thẻ cơ sở | Ảnh thật của cơ sở | Chỉ dùng ảnh thật |

## 10. Checklist nghiệm thu
- [ ] Giao diện giống ảnh thiết kế ở 1280px (header, hero vòng cung + sóng, 6 thẻ dịch vụ, khối Về phòng khám, lưới ảnh + thẻ đánh giá, 2 cơ sở + bản đồ, footer sóng + chữ viết tay).
- [ ] Không tràn ngang ở 360 / 390 / 768 / 1280px.
- [ ] Chỉ ảnh thật của phòng khám. Nền tối chỉ ở hero và footer.
- [ ] Rating riêng từng cơ sở, có ngày. Đánh giá thật, nguyên văn.
- [ ] Gọi, Zalo, Tìm đường chạy đúng trên điện thoại; trạng thái mở cửa đúng giờ Việt Nam.
- [ ] Không còn [CẦN XÁC NHẬN] trước khi ra mắt.
