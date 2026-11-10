# Kế hoạch SEO - Nha khoa Quỳnh Thư

Lập ngày 2026-11-10. Chủ dự án đã duyệt: mua tên miền riêng, thêm H1 ở hero, chủ phòng khám quản lý 2 hồ sơ Google Maps, phòng khám đồng ý dùng ảnh và ca điều trị trên Facebook.

## Mục tiêu

1. Khách tìm "nha khoa Hòa Xuân", "nha khoa Hòa Quý" thấy Nha khoa Quỳnh Thư.
2. Khách tìm "nha khoa tốt nhất / uy tín" trong khu vực thấy Nha khoa Quỳnh Thư.
   Không viết chữ "tốt nhất" lên web (brief mục 8). Google xếp loại tìm kiếm này chủ yếu theo điểm, số lượng và nội dung đánh giá trên Google Maps, nên làm qua giai đoạn B.
3. Khách tìm từng dịch vụ + khu vực ("niềng răng Hòa Xuân", "nhổ răng khôn Đà Nẵng"...) và các câu hỏi dài thấy Nha khoa Quỳnh Thư.

## Giai đoạn A: Nền móng (làm trước)

- [ ] A1. Mua tên miền riêng, gắn vào Worker trên Cloudflare, chạy `tools/doi-ten-mien.ps1 -NewUrl "..."`, thêm Worker chuyển hướng 301 từ `*.workers.dev`.
- [ ] A2. Đăng ký Google Search Console + Bing Webmaster, nộp `sitemap.xml`.
- [ ] A3. Thống nhất tên, địa chỉ, số điện thoại ở mọi nơi: chốt số nhà CS1 (217 hay 114); sửa NhaKhoaHub (đang ghi SĐT 0869 554 535 và giờ 8:00-19:00 cả tuần).
- [ ] A4. Xác nhận tên phường mới sau sắp xếp hành chính 2025 của 2 cơ sở, ghi cả tên cũ và mới trên web.

## Giai đoạn B: Google Maps (chủ phòng khám làm, mình soạn nội dung)

- [ ] B1. Tối ưu 2 hồ sơ: danh mục chính "Nha sĩ", danh mục phụ; đủ danh sách dịch vụ, mỗi dịch vụ gắn link trang dịch vụ tương ứng; giờ mở cửa; ảnh thật.
- [ ] B2. Chương trình xin đánh giá thật: mã QR ở quầy + tin nhắn mẫu sau điều trị, gợi ý khách ghi dịch vụ đã làm. KHÔNG tặng quà đổi đánh giá (Google cấm).
- [ ] B3. Trả lời mọi đánh giá.
- [ ] B4. Đăng bài lên Google Maps 1-2 lần mỗi tuần (tái sử dụng bài Facebook).

## Giai đoạn C: Nội dung website

- [x] C1. H1 trang chủ: "Nha khoa Quỳnh Thư · Nha khoa gia đình tại Hòa Xuân, Đà Nẵng" (dòng nhỏ, giữ "Cả nhà an tâm").
- [x] C2. Tiêu đề, mô tả trang chủ có Hòa Xuân, Hòa Quý, Cẩm Lệ, Đà Nẵng.
- [x] C3. Đoạn "khu vực phục vụ" ở mục 2 cơ sở, kèm link 6 dịch vụ. Không tạo trang riêng cho từng phường (Google phạt trang nhồi từ khóa).
- [x] C4. H1 trang dịch vụ có "tại Hòa Xuân, Đà Nẵng".
- [x] C5. JSON-LD: `areaServed`, `availableService`, `priceRange`, `founder`, `FAQPage` (trang chủ + 6 trang dịch vụ), `Service` cho từng trang dịch vụ. Không có `aggregateRating`.
- [x] C7. Liên kết nội bộ có từ khóa (đoạn khu vực phục vụ).
- [ ] C6. (Implant đã làm 2026-11-10: dich-vu/implant.html.) Tách trang cho từ khóa lớn, nội dung lấy từ Facebook: "Nhổ răng khôn", "Trám răng, cạo vôi", "Chỉnh nha trẻ em", "Implant" (chỉ khi phòng khám xác nhận có dịch vụ).

## Giai đoạn D: Nội dung dài hạn

- [ ] D1. Mục "Ca điều trị thực tế": 4-6 bài mỗi tháng từ ca thật trên Facebook (phòng khám đã đồng ý dùng ảnh).
- [ ] D2. Bài hỏi đáp theo câu khách thật sự tìm (dữ liệu Search Console sau 1-2 tháng).
- [ ] D3. Gắn link web ở 2 trang Facebook, Zalo, Google Maps, NhaKhoaHub, Apple Maps, Cốc Cốc Maps.

## Đo kết quả

- Search Console: hiển thị và vị trí cho "nha khoa Hòa Xuân", "nha khoa Hòa Quý", "niềng răng Đà Nẵng", "nhổ răng khôn Đà Nẵng"...
- Google Maps: lượt gọi, chỉ đường, vào web, số đánh giá mới mỗi tháng.
- Microsoft Clarity (cần tạo ID): bấm Gọi, Zalo, Chỉ đường.
- Kỳ vọng: Google Maps cải thiện sau 1-3 tháng; từ khóa dịch vụ trên web 2-6 tháng sau khi có tên miền riêng và được lập chỉ mục.
