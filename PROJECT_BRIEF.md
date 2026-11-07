# PROJECT BRIEF: Landing page Nha khoa Quỳnh Thư

Đây là "luật" của dự án. Đọc hết trước khi sửa bất cứ thứ gì.
Thiết kế đã chốt: `design/Nha Khoa Quỳnh Thư Website Homepage.png`, mô tả chi tiết ở `docs/design-spec-v2.md`.
Giao diện phải giống ảnh thiết kế 100%. Chữ trong ảnh vi phạm quy tắc nội dung (mục 8) đã được thay, xem bảng đối chiếu ở spec v2 mục 9.
Nếu spec v2 khác file này về kỹ thuật, làm theo file này.

---

## 1. Thông tin phòng khám

| Mục | Giá trị |
|---|---|
| Tên hiển thị | Nha Khoa QUỲNH THƯ |
| Công ty | Công ty TNHH MTV Nha khoa Quỳnh Thư |
| Cơ sở 1 | 217 Văn Tiến Dũng, Hòa Xuân, Đà Nẵng [CẦN XÁC NHẬN: Facebook + Google Maps ghi 217, biển hiệu ghi 114] |
| Cơ sở 2 | 303 Lê Quảng Chí, Hòa Xuân, Đà Nẵng (Google Maps, Facebook, biển hiệu đều ghi 303) |
| Điện thoại (cả 2 cơ sở) | 0944 479 405, link `tel:+84944479405` |
| Zalo | `https://zalo.me/0944479405` [CẦN XÁC NHẬN] |
| Email | lequynhthu@gmail.com |
| Facebook CS1 | https://www.facebook.com/nhakhoaquynhthu |
| Facebook CS2 | https://www.facebook.com/nhakhoaquynhthu2 |
| Tọa độ CS1 | 15.9955452, 108.2134546 |
| Tọa độ CS2 | 16.0125987, 108.2196122 |
| Google Maps CS1 | Xem: `https://www.google.com/maps/search/?api=1&query=15.9955452,108.2134546` · Chỉ đường: `https://www.google.com/maps/dir/?api=1&destination=15.9955452,108.2134546` [CẦN XÁC NHẬN link trang Google Maps chính thức] |
| Google Maps CS2 | Xem: `https://www.google.com/maps/search/?api=1&query=16.0125987,108.2196122` · Chỉ đường: `https://www.google.com/maps/dir/?api=1&destination=16.0125987,108.2196122` · Trang chính thức: `https://www.google.com/maps/place/NHA+KHOA+QU%E1%BB%B2NH+TH%C6%AF+_+c%C6%A1+s%E1%BB%9F+2/@16.0126038,108.2170373,17z/data=!3m1!4b1!4m6!3m5!1s0x31421bd244253a81:0x9f17698b08b4b538!8m2!3d16.0125987!4d108.2196122!16s%2Fg%2F11q4k5nl4q` (chủ dự án gửi 2026-11-03) |
| Rating Google | CS1: 4,9★ (42 đánh giá). CS2: 4,7★ (61 đánh giá). Cập nhật 03/11/2026. |
| Giờ làm việc | Cả 2 cơ sở: Thứ 2 - Thứ 7: 08:00 - 19:00, Chủ nhật: 08:00 - 18:00 (Google Maps, 03/11/2026). Cấu hình ở `HOURS` trong `public/script.js`. |
| Giá "chỉ từ" | Theo banner của phòng khám trên Facebook: cạo vôi 150.000đ, trám răng sâu 199.000đ, răng tháo lắp 300.000đ, tẩy trắng 900.000đ, răng sứ 1.200.000đ [CẦN XÁC NHẬN còn áp dụng] |
| Đội ngũ | ThS.BS Lê Quỳnh Thư (chủ phòng khám, bác sĩ chuyên môn, đã có ảnh trên web). Theo NhaKhoaHub (https://nhakhoahub.com/phong-kham/nha-khoa-quynh-thu-da-nang, xem 07/11/2026): hơn 15 năm kinh nghiệm, chuyên môn niềng răng, răng sứ, implant [CẦN XÁC NHẬN học vị, số năm, implant, nơi đào tạo]. Trang NhaKhoaHub ghi SĐT khác (0869 554 535) và giờ 8:00-19:00 cả tuần, khác Google Maps: KHÔNG dùng. Tên đã thấy trong bài đăng: cô Linh, nha sĩ Tuấn. [CẦN XÁC NHẬN họ tên đầy đủ, học hàm, chức danh, ảnh của từng người] |

**Dịch vụ** (theo ảnh bìa Facebook):
- Nha khoa trẻ em: dự phòng và điều trị bệnh răng miệng cho trẻ em (dịch vụ đặc biệt)
- Điều trị sâu răng, tủy răng 1 lần [CẦN XÁC NHẬN cách diễn đạt]
- Trám răng thẩm mỹ
- Niềng răng: chỉnh răng hô, móm, lệch lạc
- Răng sứ thẩm mỹ, răng nhựa tháo lắp
- Tẩy trắng răng, đính đá
- Nhổ răng, nhổ răng khôn, lấy vôi răng

**Tiện ích:** Chụp phim CBCT · Scan miệng · Phần mềm quản lý lịch hẹn và bệnh án · Trả góp 0% · Thẻ ATM/Visa/Master · Hỗ trợ hồ sơ bệnh án để thanh toán bảo hiểm · Dụng cụ được tiệt trùng [CẦN XÁC NHẬN].

**Logo:** logo tạm, chờ file gốc. SVG dựng lại theo logo trên tường phòng khám (ảnh `anh-goc/google-maps-cs2/gm2-01.jpg`). Chữ trong SVG dùng font hệ thống. Có file gốc thì bỏ vào `anh-goc/`, xuất lại `public/assets/logo/`.

**Ảnh:** ảnh thật do phòng khám đăng, lấy ngày 03/11/2026 từ 2 trang Facebook và mục "Của chủ sở hữu" trên Google Maps. Ảnh gốc ở `anh-goc/facebook-cs1`, `facebook-cs2`, `google-maps-cs1`, `google-maps-cs2`. Ảnh web (WebP) ở `public/assets/images/`. [CẦN XÁC NHẬN] phòng khám đồng ý cho dùng ảnh có mặt bệnh nhân.

**Ảnh OG** (`assets/og/og-home.jpg`): ảnh hero thật + logo trắng + "Cả nhà an tâm".

---

## 2. Mục tiêu website

- Khách bấm **Gọi**, **nhắn Zalo**, hoặc **Chỉ đường** tới cơ sở gần nhất.
- Mobile-first: thiết kế cho điện thoại trước, máy tính sau.

---

## 3. Kỹ thuật

- Chỉ dùng HTML + CSS + JavaScript thuần. KHÔNG dùng React, Vue, Next.js, Tailwind, npm, bundler.
- Mọi file của website nằm trong `public/`. Chỉ thư mục này được đưa lên mạng.
- Mở `public/index.html` trực tiếp bằng trình duyệt (file://) phải chạy được. Không dùng `fetch()` để tải JSON. Bảng giá và đánh giá viết thẳng trong HTML.
- Font tự host trong `public/fonts/`: Be Vietnam Pro 400, 500, 700 (woff2, từ Google Fonts, giấy phép OFL), chỉ gồm vietnamese, latin-ext, latin. Thêm Dancing Script 600 (OFL) CHỈ cho dòng chữ viết tay ở footer. `@font-face` ở đầu `style.css`, `font-display: swap`. Không gọi fonts.googleapis.com.
- Ảnh: WebP, kích thước khoảng gấp 2 lần khung hiển thị lớn nhất, có `width`/`height`. Ảnh dưới đầu trang có `loading="lazy"`. Ảnh gốc chất lượng cao cất trong `anh-goc/` (ngoài `public/`, không đưa lên mạng).
- Tên Worker trên Cloudflare: `nha-khoa-quynh-thu-landing-page`. `"name"` trong `wrangler.jsonc` PHẢI giống hệt tên này, lệch thì Cloudflare không tự deploy vào Worker đang nối với GitHub (đã gặp 2026-11-04). Cài đặt Build trên Cloudflare: lệnh deploy `npx wrangler deploy`, thư mục gốc `/`, nhánh production `main`.
- Hosting: Cloudflare Workers (static assets, miễn phí), nối với GitHub repo `hoangnv-it/nha-khoa-quynh-thu-landing-page` (hiện PUBLIC, nên `anh-goc/` được ghi trong `.gitignore`, không đưa lên GitHub), nhánh `main`. Chưa có tên miền riêng, tạm dùng `*.workers.dev`.
- Địa chỉ website hiện tại lưu ở `tools/site-url.txt` (tạm: `https://quynh-thu-landing-page.tai-khoan.workers.dev/`). Đổi bằng `tools/doi-ten-mien.ps1 -NewUrl "..."`, không sửa tay từng file.
- Khi có tên miền riêng: thêm Worker chuyển hướng 301 (`src/index.js`) giống dự án Diệu Hiền.
- Đo lường: Microsoft Clarity, Project ID [CLARITY_ID, chờ tạo]. Mã đặt cuối `<head>`, tải sau khi trang tải xong 1,5 giây, chỉ chạy trên http(s). Sự kiện: `bam_goi`, `bam_zalo`, `bam_chi_duong`, `xem_bang_gia` (gắn bằng `data-track="call|zalo|directions|price"`), `mo_chat_zalo` (khi mở khung Chat Zalo, gọi trong code), `bam_dich_vu` (`data-track="service"`, bấm thẻ dịch vụ).
- Ngôn ngữ: chỉ tiếng Việt (`<html lang="vi">`). Chưa làm bản tiếng Anh.
- Máy làm việc: Windows. Script tiện ích viết bằng PowerShell, lưu UTF-8 có BOM.
- Breakpoint: < 600px, 600-1023px, ≥ 1024px. Nội dung rộng tối đa 1200px.
- Chuyển ảnh sang WebP: máy chưa có cwebp, dùng canvas của Edge headless (xem nhật ký 2026-11-03).

---

## 4. Màu sắc (đã duyệt, không tự đổi)

Đổi 2026-11-07 theo yêu cầu bác sĩ: bỏ teal, dùng xanh dương giống logo. Mã màu đo từ banner Facebook của phòng khám (logo + chữ #10689E, hình tròn trang trí #035AC3). Khai báo trong `:root` ở đầu `public/style.css`. Mọi cặp chữ/nền đạt WCAG AA (≥ 4,5).

| Biến | Mã | Dùng cho |
|---|---|---|
| `--blue-900` | #0B5C94 | Nền hero + footer (CHỈ 2 chỗ này), hover nút xanh. Hero gradient #0B5C94 → #0F68A0 → #1A78BA |
| `--blue-800` | #0F68A0 | Gradient hero, chữ chip |
| `--blue-600` | #0F68A0 | Eyebrow, link, menu đang chọn, nút "Xem bản đồ" (`.btn--blue`), icon ghim |
| `--blue-100` | #DCEBF8 | Chip, nền nhạt |
| `--brand` | #10689E | Logo (SVG + favicon + ảnh OG), icon, viền focus |
| `--brand-50` | #E4EFFA | Nền khối "Về phòng khám", ghi chú bảng giá |
| `--accent` | #035AC3 | Màu nhấn: viền sáng chạy quanh thẻ dịch vụ, dấu ngoặc kép ở thẻ đánh giá |
| `--ink` | #0E2F4F | Tiêu đề |
| `--ink-2` | #3B5168 | Chữ thường |
| `--ink-3` | #5B7086 | Chữ phụ |
| `--bg` | #F4F8FC | Nền trang |
| `--card` | #FFFFFF | Nền thẻ |
| `--line` | #E1EAF4 | Viền thẻ, đường kẻ |
| `--cta` | #FFD047 | Nút chính màu vàng (Gọi, số điện thoại header, Tìm hiểu thêm, Zalo ở thanh dưới) |
| `--cta-600` | #F5BF1F | Hover nút chính |
| `--on-cta` | #1E2A33 | Chữ trên nút vàng |
| `--gold` | #F5B50F | Sao, số rating, ngôi sao trên icon, tia trang trí |
| `--open` | #1F9D61 | Chấm "Đang mở" |
| `--pin-red` | #C0443A | Ghim trên nền bản đồ |
| `--zalo` | #0068FF | CHỈ cho nút Chat Zalo nổi + khung chat (màu nhận diện của Zalo). Khai báo trong `.zalo-chat`, không đưa vào `:root` |

Nút bo tròn hoàn toàn. Thẻ bo 16px, viền `--line`, bóng `0 6px 24px rgba(10,60,90,.08)`.

---

## 5. Font

- Be Vietnam Pro, tự host (400, 500, 700) cho toàn trang. Độ đậm 600 hiển thị bằng file 700.
- Dancing Script 600: CHỈ dòng "Nụ cười khỏe đẹp / Cho cuộc sống thêm vui!" ở footer (đúng thiết kế).
- Cỡ chữ theo spec v2 mục 4.2.

---

## 6. Bố cục (theo thứ tự)

1. Header (nền trắng, dính trên cùng)
2. Hero (nền xanh dương logo, ảnh cắt vòng cung, đáy lượn sóng)
3. Dịch vụ nổi bật `#dich-vu`
4. Về Nha khoa Quỳnh Thư `#gioi-thieu`
5. Nha khoa trẻ em `#tre-em` (không có trong ảnh, giữ lại)
6. Bảng giá `#bang-gia` (không có trong ảnh, giữ lại)
7. Trước & sau `#truoc-sau` (không có trong ảnh, giữ lại)
8. Đội ngũ `#doi-ngu` (2 phần, đổi 2026-11-07: (1) hồ sơ riêng ThS.BS Lê Quỳnh Thư `.lead-doc`: ảnh, học vị, kinh nghiệm, nơi làm việc, thế mạnh, nút đặt lịch; (2) "Đội ngũ bác sĩ và trợ thủ" `.team`: 3 thẻ giữ chỗ)
9. Hình ảnh hoạt động + thẻ đánh giá `#phong-kham`
10. Khách hàng nói gì `#danh-gia` (không có trong ảnh, giữ lại). Làm lại 2026-11-07: 2 thẻ điểm Google riêng từng cơ sở (số đếm lên, sao tô dần, bấm mở Google Maps) + thẻ đánh giá chạy ngang liên tục (dừng khi rê chuột/chạm, chỉ chạy khi trong màn hình), avatar chữ cái đầu, sao bật lần lượt. Giảm chuyển động: lưới tĩnh.
11. 2 cơ sở + bản đồ `#dia-chi`
12. Hỏi đáp `#hoi-dap` (không có trong ảnh, giữ lại)
13. Footer (nền xanh dương logo, mép trên lượn sóng)
14. Thanh nút cố định trên điện thoại: Gọi / Zalo / Chỉ đường
15. Nút Chat Zalo nổi góc phải dưới, CHỈ máy tính ≥ 1024px. Bấm mở khung nhỏ: trạng thái mở cửa, nút "Mở Zalo để chat", số điện thoại. Không có mã QR. Điện thoại không hiện nút này (đã có Zalo ở thanh dưới).
16. Trang riêng cho 6 dịch vụ trong `public/dich-vu/` (thêm 2026-11-04). Bấm thẻ dịch vụ ở trang chủ để mở. Cấu trúc ở spec v2 mục 5.15.

---

## 7. Animation

- Nhẹ nhàng: hiện dần khi cuộn (class `.reveal`), header thu nhỏ khi cuộn.
- Thẻ dịch vụ: nâng lên + viền sáng chạy 1 vòng + icon chuyển động riêng khi hover (CSS thuần, dùng `@property --service-spin`).
- Hero KHÔNG mờ dần từ opacity 0.
- Tắt hết khi người dùng bật `prefers-reduced-motion`.

---

## 8. Quy tắc nội dung (quan trọng)

- KHÔNG bịa thông tin: tên bác sĩ, số năm kinh nghiệm, đánh giá, giá. Chỗ chưa có thì để [CẦN XÁC NHẬN].
- KHÔNG viết "không đau", "an toàn tuyệt đối", "tốt nhất", "cam kết 100%", "miễn phí" (trừ khi phòng khám xác nhận). Các chữ này chỉ được xuất hiện trong đánh giá thật của khách, giữ nguyên văn.
- Rating ghi riêng từng cơ sở. KHÔNG ghi ngày cập nhật trên trang (chủ dự án yêu cầu 2026-11-07; ngày lấy số liệu 03/11/2026 chỉ giữ trong mục 1 và comment code). Không gộp 2 cơ sở thành 1 số. Không gắn review schema / `aggregateRating` vào JSON-LD.
- Chỉ dùng ảnh thật của phòng khám, có đồng ý. Không dùng ảnh hoạt hình, ảnh AI vẽ người hoặc tòa nhà (ngoại lệ do chủ dự án chọn: bộ 6 icon dịch vụ ở mục Dịch vụ nổi bật, trong đó icon Khám răng trẻ em có hình bé hoạt hình).
- KHÔNG dùng dấu gạch ngang dài "–" hoặc "—" trong văn bản của website. Thay bằng "-" (giờ, khoảng giá, tiêu đề), ":" khi giải thích, hoặc dấu phẩy.
- Có bảng giá (khác Diệu Hiền), kèm ghi chú "bác sĩ khám và báo giá trước khi điều trị".
- Giữ mọi dấu [CẦN XÁC NHẬN] trong code cho tới khi phòng khám xác nhận. Không còn dấu nào trước khi ra mắt.

---

## 9. SEO

- Có: title, description, canonical, Open Graph, JSON-LD `Organization` + 2 `Dentist`.
- Một thẻ `<h1>` duy nhất. Có `sitemap.xml`, `robots.txt`, `llms.txt`, favicon.
- Thông tin phòng khám phải giống nhau ở: nội dung trang, JSON-LD, `llms.txt`, Google Maps.
- JSON-LD có `openingHoursSpecification` theo giờ trên Google Maps.

---

## 10. Hiệu năng & cache

- `public/_headers`: cache 1 năm (immutable) cho CSS, JS, font, ảnh. HTML luôn lấy bản mới.
- Sau khi sửa CSS, JS hoặc thay ảnh: chạy `tools/version-assets.ps1` trước khi đẩy lên.
  `powershell -ExecutionPolicy Bypass -File tools\version-assets.ps1`
- Script gắn `?v=<MD5 8 ký tự>` cho `style.css`, `script.js`, mọi file trong `public/assets/` ở `index.html`, `404.html` và `dich-vu/*.html`. Chạy nhiều lần không bị gắn chồng.
- Lưu ý: script tìm theo đường dẫn file, nên đừng viết tên file (ví dụ "script.js") trong chú thích HTML.
- Font không gắn mã (tên file cố định, ít khi đổi). Nếu thay font thì đổi tên file.
- Mục tiêu: HTML + CSS + JS dưới 100 KB gzip. Lighthouse mobile: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95.

---

## 11. Cách làm việc với AI

- Trước khi sửa: nói ngắn sẽ sửa gì.
- Chỉ sửa đúng phần được yêu cầu.
- Không tự đổi màu, font, bố cục.
- Sau khi sửa: kiểm tra trên màn hình máy tính và điện thoại 390px.
- Giải thích bằng tiếng Việt, câu ngắn.

---

## 12. Nhật ký thay đổi

Mỗi lần đổi quyết định quan trọng: ghi thêm 1 dòng có ngày tháng vào mục liên quan và vào đây.

- 2026-11-03: Khởi tạo dự án. Dựng khung trang, logo tạm, ảnh OG tạm, giờ mở cửa tạm 08:00 trong `HOURS`.
- 2026-11-03: Làm lại giao diện giống ảnh thiết kế. Đổi bảng màu sang teal + vàng theo ảnh (thay navy + hổ phách cũ). Thêm font Dancing Script cho chữ viết tay ở footer. Cập nhật spec v2 theo ảnh.
- 2026-11-03: Lấy ảnh thật từ 2 Facebook + Google Maps (ảnh của chủ sở hữu). Giờ làm việc và rating lấy từ Google Maps. Giá "chỉ từ" lấy từ banner Facebook của phòng khám.
- 2026-11-03: WebP tạo bằng canvas trong Edge headless + máy chủ Node tạm (không thêm vào dự án).
- 2026-11-03: Thêm Chat Zalo (cách A: nút nổi + khung nhỏ mở link zalo.me, không dùng widget Zalo OA, không mã QR, chỉ máy tính). Thêm màu `#0068FF` riêng cho thành phần này. Thêm sự kiện Clarity `mo_chat_zalo`.
- 2026-11-03: Mục "Khách hàng nói gì trên Google": bỏ nhãn "Cơ sở 1/2 · Google", thêm 5 sao trên mỗi thẻ. Số sao đã đối chiếu từng đánh giá trên Google Maps (cả 6 đều 5 sao).
- 2026-11-03: Repo GitHub đổi tên thành `nha-khoa-quynh-thu-landing-page` và đang public. Thêm `anh-goc/` vào `.gitignore` (ảnh có mặt bệnh nhân chưa được đồng ý). Muốn lưu ảnh gốc lên GitHub thì chuyển repo sang private rồi bỏ dòng này.
- 2026-11-03: Thay 6 icon dịch vụ bằng bộ icon mới do chủ dự án cung cấp (WebP 256px trong `public/assets/icons/`, ảnh gốc `anh-goc/icon-dich-vu-goc.png`). Nhãn thẻ đổi theo icon: bỏ "Trám răng thẩm mỹ", thêm "Nhổ răng". Thêm viền sáng chạy quanh thẻ và chuyển động riêng cho từng icon khi hover.
- 2026-11-03: Thay ảnh hero bằng ảnh 2 bác sĩ khám cho bé do chủ dự án cung cấp (`anh-goc/hero-goc.png`, WebP 1276x956, 94 KB). Làm lại ảnh OG với ảnh mới và tiêu đề "Cả nhà an tâm".
- 2026-11-03: Bản đồ ở mục 2 cơ sở mở Cơ sở 2 trước, tìm theo tên địa điểm Google Maps để hiện thẻ phòng khám (tên, địa chỉ, rating). Ghi link Google Maps chính thức của CS2 vào mục 1.
- 2026-11-03: Đổi chữ hero: nhãn "Nha khoa Quỳnh Thư" thành "Nha khoa uy tín", tiêu đề "Phố lên đèn" thành "Cả nhà an tâm".
- 2026-11-04: Thêm mục Đội ngũ (`#doi-ngu`) ngay dưới "Trước & sau": ảnh BS Quỳnh Thư do chủ dự án cung cấp (`anh-goc/bs-quynh-thu-goc.png`, cắt 4:5 bỏ cốc nước) + 3 thẻ giữ chỗ. Bỏ biến `SHOW_TEAM`.
- 2026-11-04: Sửa lỗi header/hero nháy khi cuộn về đầu trang. Header đổi từ `sticky` sang `fixed`, `body` chừa sẵn `padding-top: var(--header-h)`, để header thu nhỏ không làm trang co lại. Ngưỡng thu nhỏ có 2 mức: thu khi cuộn quá 24px, phóng lại khi về dưới 4px. Không quay lại dùng `sticky` cho header thu nhỏ.
- 2026-11-04: Thêm 6 trang dịch vụ (`public/dich-vu/*.html`), mở khi bấm từng thẻ ở mục Dịch vụ nổi bật (trước đây cuộn tới Bảng giá). Nội dung chỉ dùng thông tin đã có; dấu hiệu và quy trình chờ bác sĩ duyệt [CẦN XÁC NHẬN]. Header/footer chép trong từng trang. Thêm sự kiện Clarity `bam_dich_vu`. `version-assets.ps1` và `doi-ten-mien.ps1` xử lý cả `dich-vu/*.html`. Thêm vào sitemap, llms.txt, `_headers`.
- 2026-11-04: Nâng chữ viết tay footer lên 20px (chỉ máy tính) để gạch chân không đè đường kẻ.
- 2026-11-04: Menu hamburger trên điện thoại có animation: bảng menu trượt xuống + mờ dần khi mở/đóng, các mục hiện lần lượt (0,05 giây mỗi mục), hamburger vẫn biến thành dấu X. Khi đóng dùng visibility:hidden nên không Tab vào được. Giảm chuyển động thì tắt hết.
- 2026-11-04: Thêm menu con "Dịch vụ" ở header (có icon, có animation đóng/mở) ở trang chủ, 404 và 6 trang dịch vụ. HTML menu con chép trong từng trang (như header/footer): sửa danh sách dịch vụ thì sửa cả 8 trang.
- 2026-11-04: Sửa footer theo yêu cầu chủ dự án: điện thoại, Zalo, email, Facebook CS1, Facebook CS2 xếp 1 hàng dưới đường kẻ; thêm "© 2026 · " trước tên công ty; BỎ dòng "Thông tin chỉ mang tính tham khảo, không thay thế chẩn đoán của bác sĩ". Áp dụng cho cả 8 trang (trang chủ, 404, 6 trang dịch vụ). Footer chép trong từng trang: sửa thì sửa cả 8.
- 2026-11-04: Mục "2 cơ sở": bản đồ to hơn (máy tính: 2 thẻ cơ sở xếp dọc bên trái, bản đồ cao bằng cả 2 thẻ bên phải; điện thoại: bản đồ cao 340px dưới thẻ). Thêm nút "Xem trên bản đồ" trong mỗi thẻ cơ sở và viền sáng cho cơ sở đang hiện trên bản đồ.
- 2026-11-04: Bản đồ mục "2 cơ sở" tự tải và hiện Cơ sở 2 (zoom 17, giữ nguyên) khi cuộn gần tới mục, không cần bấm "Xem bản đồ". Vẫn không tải lúc mở trang nên không làm chậm phần đầu. Nút chọn cơ sở chuyển xuống giữa mép dưới bản đồ để không đè thẻ thông tin của Google.
- 2026-11-04: Footer đổi bố cục theo ý tưởng của chủ dự án: điện thoại, Zalo, email, Facebook CS1, Facebook CS2 xếp thành 1 cột dọc ngay sau logo; giờ mở cửa là cột thứ 3; xóa hàng liên hệ ở dưới cùng (dòng dưới cùng chỉ còn "© 2026 · Công ty ... | địa chỉ"). Sửa khoảng đệm cột liên hệ (trước đây luật reset ul làm mất padding). Khổ 1024-1199px: thu gọn header/footer để không chật. Bỏ phần nâng chữ viết tay 20px và khoảng đệm 76px cho laptop làm hôm trước (không còn cần ở bố cục mới; khoảng đệm 76px chỉ còn ở khổ 1024-1199px).
- 2026-11-04: Thêm icon ảnh (SVG tự vẽ: huy hiệu vàng 12 cánh + ngôi sao trắng, màu theo `--gold`) trước chữ ở nhãn hero "Nha khoa uy tín". File `public/assets/icons/uy-tin.svg`, bật nhẹ 1 lần khi tải trang. Là hình minh họa trang trí, không phải ảnh người hay ảnh AI.
- 2026-11-04: Thêm dòng giờ làm việc đầy đủ dưới dòng trạng thái ở hero (Thứ 2 - Thứ 7: 08:00 - 19:00 · Chủ nhật: 08:00 - 18:00, theo Google Maps 03/11/2026). Viết cố định trong HTML. Giờ đổi thì phải sửa ở: `HOURS` (script), hero, mục 2 cơ sở, footer, JSON-LD, llms.txt.
- 2026-11-04: Sửa `name` trong `wrangler.jsonc` từ `quynh-thu-landing-page` thành `nha-khoa-quynh-thu-landing-page` cho khớp tên Worker trên Cloudflare (Cloudflare cảnh báo lệch tên và không tự deploy khi có commit mới). Địa chỉ `*.workers.dev` phụ thuộc tên Worker, nên `tools/site-url.txt` cần cập nhật theo địa chỉ thật (chờ chủ dự án gửi).
- 2026-11-07: Đổi bảng màu từ teal sang xanh dương theo logo (bác sĩ yêu cầu). Màu đo từ banner Facebook. Biến `--teal-*` đổi tên thành `--blue-*`, class `.btn--teal` thành `.btn--blue`, thêm `--accent` #035AC3. Đổi luôn màu chữ (ink ngả xanh dương; `--ink-3` đậm hơn để đạt tương phản AA). Sửa màu logo SVG và favicon từ #1A8BCB thành #10689E (đúng logo thật). `theme-color` ở 8 trang thành #0B5C94. Ảnh OG đổi nền panel sang xanh dương (đổi màu từng điểm ảnh, giữ nguyên ảnh chụp). Nút vàng giữ nguyên.
- 2026-11-07: Mục Đội ngũ chia 2 phần theo yêu cầu chủ dự án: hồ sơ riêng ThS.BS Lê Quỳnh Thư (thông tin lấy từ NhaKhoaHub, chờ bác sĩ xác nhận) + phần chung "Đội ngũ bác sĩ và trợ thủ" (3 thẻ giữ chỗ). Thêm mục "Bác sĩ" vào llms.txt. Thêm icon `i-check`, `i-cap`.
- 2026-11-07: Làm lại mục "Khách hàng nói gì trên Google" cho sinh động (UI + animation, xem mục 6 số 10). Rating vẫn ghi riêng từng cơ sở kèm ngày, không gộp; nội dung đánh giá giữ nguyên văn; không thêm nhãn cơ sở trên từng thẻ. JS ở `script.js` mục 6b. Đổi số rating thì sửa `data-count`, chữ, `--fill` và `aria-label` trong HTML.
- 2026-11-07: Mục "Hình ảnh thực tế" ở 6 trang dịch vụ: mỗi trang đủ 4 ảnh (3 trang tẩy trắng, điều trị tủy, nhổ răng trước đây chưa có mục này). 17 ảnh mới `public/assets/images/dv-<dịch vụ>-<số>.webp` (640x800), chọn từ ảnh Facebook đã tải (`anh-goc/facebook-cs1`, `facebook-cs2`). Không dùng banner quảng cáo (có chữ "miễn phí", "không đau", "an toàn"), ảnh mặt bé bị che mờ, ảnh camera. Ảnh ngang cần giữ trọn (phim X-quang) thì lót nền thay vì cắt. Lưới `.ba-grid--svc`: điện thoại 2 cột, máy tính 4 cột. [CẦN XÁC NHẬN] đồng ý dùng ảnh có bệnh nhân + chú thích đúng ca.
