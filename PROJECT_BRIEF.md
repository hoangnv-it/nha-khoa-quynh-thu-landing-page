# PROJECT BRIEF: Landing page Nha khoa Quỳnh Thư

Đây là "luật" của dự án. Đọc hết trước khi sửa bất cứ thứ gì.
Thiết kế đã chốt: `docs/design-spec-v2.md.md` và `design/Nha Khoa Quỳnh Thư Website Homepage.png`.
Nếu spec v2 khác file này về kỹ thuật, làm theo file này.
Ảnh thiết kế chỉ để tham khảo bố cục, màu. Chữ trong ảnh (ví dụ "An toàn", "Nhẹ nhàng không đau") KHÔNG được dùng.

---

## 1. Thông tin phòng khám

| Mục | Giá trị |
|---|---|
| Tên hiển thị | Nha Khoa QUỲNH THƯ |
| Công ty | Công ty TNHH MTV Nha khoa Quỳnh Thư |
| Cơ sở 1 | 217 Văn Tiến Dũng, Hòa Xuân, Đà Nẵng [CẦN XÁC NHẬN: nguồn khác ghi 114 hoặc 132] |
| Cơ sở 2 | 303 Lê Quảng Chí, Hòa Xuân, Đà Nẵng [CẦN XÁC NHẬN: ảnh bìa ghi 273] |
| Điện thoại (cả 2 cơ sở) | 0944 479 405, link `tel:+84944479405` |
| Zalo | `https://zalo.me/0944479405` [CẦN XÁC NHẬN] |
| Email | lequynhthu@gmail.com |
| Facebook CS1 | https://www.facebook.com/nhakhoaquynhthu |
| Facebook CS2 | https://www.facebook.com/nhakhoaquynhthu2 |
| Tọa độ CS1 | 15.9955452, 108.2134546 |
| Tọa độ CS2 | 16.0125987, 108.2196122 |
| Google Maps CS1 | Xem: `https://www.google.com/maps/search/?api=1&query=15.9955452,108.2134546` · Chỉ đường: `https://www.google.com/maps/dir/?api=1&destination=15.9955452,108.2134546` [CẦN XÁC NHẬN link trang Google Maps chính thức] |
| Google Maps CS2 | Xem: `https://www.google.com/maps/search/?api=1&query=16.0125987,108.2196122` · Chỉ đường: `https://www.google.com/maps/dir/?api=1&destination=16.0125987,108.2196122` [CẦN XÁC NHẬN link trang Google Maps chính thức] |
| Rating Google | CS1: 4,9★ (42 đánh giá). CS2: 4,7★ (61 đánh giá). Ngày cập nhật: [CẦN XÁC NHẬN] |
| Giờ làm việc | Đóng cửa 19:00. Giờ mở cửa và ngày làm việc [CẦN XÁC NHẬN]. Cấu hình ở `HOURS` trong `public/script.js` (đang để tạm 08:00). |
| Đội ngũ | BS Quỳnh Thư (chủ phòng khám), cô Linh, nha sĩ Tuấn [CẦN XÁC NHẬN họ tên, chức danh, ảnh] |

**Dịch vụ** (theo ảnh bìa Facebook):
- Nha khoa trẻ em: dự phòng và điều trị bệnh răng miệng cho trẻ em (dịch vụ đặc biệt)
- Điều trị sâu răng, tủy răng 1 lần [CẦN XÁC NHẬN cách diễn đạt]
- Trám răng thẩm mỹ
- Niềng răng: chỉnh răng hô, móm, lệch lạc
- Răng sứ thẩm mỹ, răng nhựa tháo lắp
- Tẩy trắng răng, đính đá
- Nhổ răng, nhổ răng khôn, lấy vôi răng

**Tiện ích:** Chụp phim CBCT · Scan miệng · Phần mềm quản lý lịch hẹn và bệnh án · Trả góp 0% · Thẻ ATM/Visa/Master · Hỗ trợ hồ sơ bệnh án để thanh toán bảo hiểm · Dụng cụ được tiệt trùng [CẦN XÁC NHẬN].

**Logo:** logo tạm, chờ file gốc. Hiện là SVG dựng lại theo mô tả (răng có trái tim bên trong + "Nha Khoa" / "QUỲNH THƯ"). Chữ trong SVG dùng font hệ thống. Có file gốc thì bỏ vào `anh-goc/`, xuất lại `public/assets/logo/`.

**Ảnh OG** (`assets/og/og-home.jpg`): ảnh tạm (nền navy + logo + chữ). Thay bằng ảnh hero thật + logo trắng khi có.

---

## 2. Mục tiêu website

- Khách bấm **Gọi**, **nhắn Zalo**, hoặc **Chỉ đường** tới cơ sở gần nhất.
- Mobile-first: thiết kế cho điện thoại trước, máy tính sau.

---

## 3. Kỹ thuật

- Chỉ dùng HTML + CSS + JavaScript thuần. KHÔNG dùng React, Vue, Next.js, Tailwind, npm, bundler.
- Mọi file của website nằm trong `public/`. Chỉ thư mục này được đưa lên mạng.
- Mở `public/index.html` trực tiếp bằng trình duyệt (file://) phải chạy được. Không dùng `fetch()` để tải JSON. Bảng giá và đánh giá viết thẳng trong HTML.
- Font tự host trong `public/fonts/`: Be Vietnam Pro 400, 500, 700 (woff2, từ Google Fonts, giấy phép OFL), chỉ gồm vietnamese, latin-ext, latin. `@font-face` ở đầu `style.css`, `font-display: swap`. Không gọi fonts.googleapis.com.
- Ảnh: WebP, kích thước khoảng gấp 2 lần khung hiển thị lớn nhất, có `width`/`height`. Ảnh dưới đầu trang có `loading="lazy"`. Ảnh gốc chất lượng cao cất trong `anh-goc/` (ngoài `public/`, không đưa lên mạng).
- Hosting: Cloudflare Workers (static assets, miễn phí), nối với GitHub repo private `hoangnv-it/quynh-thu-landing-page`, nhánh `main`. Chưa có tên miền riêng, tạm dùng `*.workers.dev`.
- Địa chỉ website hiện tại lưu ở `tools/site-url.txt` (tạm: `https://quynh-thu-landing-page.tai-khoan.workers.dev/`). Đổi bằng `tools/doi-ten-mien.ps1 -NewUrl "..."`, không sửa tay từng file.
- Khi có tên miền riêng: thêm Worker chuyển hướng 301 (`src/index.js`) giống dự án Diệu Hiền.
- Đo lường: Microsoft Clarity, Project ID [CLARITY_ID, chờ tạo]. Mã đặt cuối `<head>`, tải sau khi trang tải xong 1,5 giây, chỉ chạy trên http(s). Sự kiện: `bam_goi`, `bam_zalo`, `bam_chi_duong`, `xem_bang_gia` (gắn bằng `data-track="call|zalo|directions|price"`).
- Ngôn ngữ: chỉ tiếng Việt (`<html lang="vi">`). Chưa làm bản tiếng Anh.
- Máy làm việc: Windows. Script tiện ích viết bằng PowerShell, lưu UTF-8 có BOM.
- Breakpoint: < 600px, 600-1023px, ≥ 1024px. Nội dung rộng tối đa 1160px.

---

## 4. Màu sắc (đã duyệt, không tự đổi)

Khai báo trong `:root` ở đầu `public/style.css`.

| Biến | Mã | Dùng cho |
|---|---|---|
| `--brand` | #0A72B8 | Xanh logo: link, icon, điểm nhấn |
| `--brand-600` | #085C95 | Hover, active |
| `--brand-50` | #EAF4FB | Nền xanh nhạt (Bảng giá) |
| `--brand-100` | #D3E8F6 | Chip, viền trên nền xanh |
| `--navy` | #0B2E4A | Nền hero + footer (CHỈ 2 chỗ này) |
| `--navy-deep` | #071F33 | Dải cuối footer, gradient hero |
| `--on-navy` | #FFFFFF | Chữ trên nền tối |
| `--on-navy-2` | #B8CCDD | Chữ phụ trên nền tối |
| `--bg` | #FFFFFF | Nền sáng |
| `--bg-soft` | #F5F8FA | Nền xen kẽ |
| `--ink` | #14212B | Chữ chính |
| `--ink-2` | #52616D | Chữ phụ |
| `--line` | #E1E8EE | Đường kẻ, viền thẻ |
| `--cta` | #F2A73B | CHỈ nút chính (Zalo / Gọi). Không dùng trang trí |
| `--cta-600` | #D98E1E | Hover nút chính |
| `--on-cta` | #2B1A00 | Chữ trên nút chính |
| `--star` | #F5B400 | Sao đánh giá |
| `--open` | #1F9D61 | Đang mở |
| `--closed` | #C0443A | Đã đóng |

Nền section xen kẽ `--bg` / `--bg-soft`, riêng Bảng giá dùng `--brand-50`.
Bo góc: nút 10px, thẻ 16px, ảnh 16px, chip 999px. Một kiểu bóng duy nhất: `0 4px 20px rgba(11,46,74,.06)`.

---

## 5. Font

- Be Vietnam Pro, tự host (400, 500, 700). Không dùng font nào khác. Không dùng font viết tay.
- Spec ghi độ đậm 600 cho h3 và eyebrow: trình duyệt hiển thị bằng file 700 (không tải thêm file 600).
- Cỡ chữ theo spec v2 mục 4.2 (đã khai báo thành biến trong `:root`).

---

## 6. Bố cục (theo thứ tự)

1. Header (nền trắng, dính trên cùng)
2. Hero (nền tối `--navy`)
3. Dịch vụ `#dich-vu`
4. Nha khoa trẻ em `#tre-em`
5. Bảng giá `#bang-gia`
6. Trước & sau `#truoc-sau`
7. Phòng khám `#phong-kham`
8. Đội ngũ `#doi-ngu` (ẩn khi chưa có ảnh, biến `SHOW_TEAM` trong `script.js`)
9. Đánh giá `#danh-gia`
10. Hai cơ sở `#dia-chi`
11. FAQ `#hoi-dap`
12. Footer (nền tối `--navy`)
13. Thanh nút cố định trên điện thoại: Gọi / Zalo / Chỉ đường

---

## 7. Animation

- Nhẹ nhàng: hiện dần khi cuộn (class `.reveal`), header thu nhỏ khi cuộn.
- Hero KHÔNG mờ dần từ opacity 0.
- Tắt hết khi người dùng bật `prefers-reduced-motion`.

---

## 8. Quy tắc nội dung (quan trọng)

- KHÔNG bịa thông tin: tên bác sĩ, số năm kinh nghiệm, đánh giá, giá. Chỗ chưa có thì để [CẦN XÁC NHẬN].
- KHÔNG viết "không đau", "an toàn tuyệt đối", "tốt nhất", "cam kết 100%", "miễn phí" (trừ khi phòng khám xác nhận). Các chữ này chỉ được xuất hiện trong đánh giá thật của khách, giữ nguyên văn.
- Rating ghi riêng từng cơ sở, kèm ngày cập nhật. Không gộp 2 cơ sở thành 1 số. Không gắn review schema / `aggregateRating` vào JSON-LD.
- Chỉ dùng ảnh thật của phòng khám, có đồng ý. Không dùng ảnh hoạt hình, ảnh AI vẽ người hoặc tòa nhà.
- KHÔNG dùng dấu gạch ngang dài "–" hoặc "—" trong văn bản của website. Thay bằng "-" (giờ, khoảng giá, tiêu đề), ":" khi giải thích, hoặc dấu phẩy.
- Có bảng giá (khác Diệu Hiền), kèm ghi chú "bác sĩ khám và báo giá trước khi điều trị".
- Giữ mọi dấu [CẦN XÁC NHẬN] trong code cho tới khi phòng khám xác nhận. Không còn dấu nào trước khi ra mắt.

---

## 9. SEO

- Có: title, description, canonical, Open Graph, JSON-LD `Organization` + 2 `Dentist`.
- Một thẻ `<h1>` duy nhất. Có `sitemap.xml`, `robots.txt`, `llms.txt`, favicon.
- Thông tin phòng khám phải giống nhau ở: nội dung trang, JSON-LD, `llms.txt`, Google Maps.
- `openingHoursSpecification` chưa thêm vào JSON-LD: chờ xác nhận giờ mở cửa.

---

## 10. Hiệu năng & cache

- `public/_headers`: cache 1 năm (immutable) cho CSS, JS, font, ảnh. HTML luôn lấy bản mới.
- Sau khi sửa CSS, JS hoặc thay ảnh: chạy `tools/version-assets.ps1` trước khi đẩy lên.
  `powershell -ExecutionPolicy Bypass -File tools\version-assets.ps1`
- Script gắn `?v=<MD5 8 ký tự>` cho `style.css`, `script.js`, mọi file trong `public/assets/` ở `index.html` và `404.html`. Chạy nhiều lần không bị gắn chồng.
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
