# Prompt v2: Landing page Nha khoa Quỳnh Thư — professional, real photos

> Copy everything below this line into your AI coding tool.
> Items marked **[CẦN XÁC NHẬN]** must be confirmed with the clinic before launch. Never invent them.
> v2 replaces v1. Main change: no cartoon illustrations. Real logo, real photos, professional and clear UI.

---

## 0. Role and goal

You are a senior web designer and front-end developer. Build a one-page landing page for **Nha khoa Quỳnh Thư**, a family dental clinic with **2 branches in Hòa Xuân, Đà Nẵng, Vietnam**.

- **Tone:** professional, clean, trustworthy, warm. Think "modern neighbourhood clinic", not "kids' playroom".
- **Concept line (kept from v1, used lightly):** "Phố lên đèn" — the clinic is open until 19:00, so parents can come after work. Express this through copy and the dark hero, **not** through illustrations.
- **Target users:** families living around Hòa Xuân. Working parents with small children. They care about price clarity, gentle treatment, and opening hours.
- **Main goal:** call, message on Zalo, or get directions to the nearest branch.
- **All website copy is in Vietnamese.**

### Strict visual rules
- **No AI-generated or cartoon people, buildings, mascots, or scenes.** No smiling tooth mascot.
- **No script / handwriting fonts.**
- **Only real photos** from the clinic (files listed in section 3). Light editing allowed: crop, straighten, white balance, exposure, small blur of faces of other patients, background clean-up. Do not change people's faces or teeth.
- The only illustrations allowed are the **6 service icons** (section 5.3) and simple UI line icons.
- Dark background **only in the hero and the footer**. All other sections are light.

---

## 1. Technical requirements

- Plain **HTML + CSS + vanilla JS**. No framework, no build step.
- Files: `index.html`, `css/style.css`, `js/main.js`, `data/prices.json`, `data/reviews.json`, `img/` (and `img/icons/`).
- Mobile-first. Breakpoints: < 600px, 600–1023px, ≥ 1024px. Max content width 1160px.
- Performance:
  - HTML + CSS + JS under 100 KB gzip (images not included).
  - All photos converted to **WebP**, with `srcset` (480w, 960w, 1600w) and explicit `width`/`height`. Hero image ≤ 180 KB; others ≤ 120 KB.
  - `loading="lazy"` for everything except the logo and hero image (`fetchpriority="high"` on the hero).
  - Google Maps iframe loads only after a click (facade).
  - Lighthouse mobile target: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95.
- Font: **Be Vietnam Pro** 400 / 500 / 700 from Google Fonts, `display=swap`, Vietnamese subset. No other font.
- No jQuery, no slider/carousel library, no animation library. Respect `prefers-reduced-motion`.
- `<html lang="vi">`.

---

## 2. Business facts (use exactly)

| Field | Value |
|---|---|
| Name (display) | Nha Khoa **QUỲNH THƯ** (as on the clinic sign) |
| Company | Công ty TNHH MTV Nha khoa Quỳnh Thư |
| Cơ sở 1 | 217 Văn Tiến Dũng, Hòa Xuân, Đà Nẵng **[CẦN XÁC NHẬN — other sources say 114 or 132]** |
| Cơ sở 2 | 303 Lê Quảng Chí, Hòa Xuân, Đà Nẵng **[CẦN XÁC NHẬN — cover photo says 273]** |
| Phone (both) | 0944 479 405 → `tel:+84944479405` |
| Zalo | `https://zalo.me/0944479405` **[CẦN XÁC NHẬN]** |
| Email | lequynhthu@gmail.com |
| Facebook | CS1 https://www.facebook.com/nhakhoaquynhthu · CS2 https://www.facebook.com/nhakhoaquynhthu2 |
| Google Maps CS1 | lat 15.9955452, lng 108.2134546 · 4,9★ (42 đánh giá) |
| Google Maps CS2 | lat 16.0125987, lng 108.2196122 · 4,7★ (61 đánh giá) |
| Hours | Closes 19:00. Opening time and days **[CẦN XÁC NHẬN]**. Keep in one JS config object. |
| Services (from the clinic's Facebook cover) | Điều trị sâu răng – tủy răng 1 lần · Răng sứ thẩm mỹ – răng nhựa tháo lắp · Tẩy trắng răng – đính đá · Nhổ răng · Niềng răng – chỉnh răng hô/móm/lệch lạc · **Đặc biệt:** dự phòng và điều trị bệnh răng miệng cho trẻ em |
| Also seen in reviews | Trám răng thẩm mỹ, lấy vôi răng, nhổ răng khôn |
| Facilities (from clinic posts) | Chụp phim CBCT · Scan miệng · Phần mềm quản lý lịch hẹn và bệnh án · Trả góp 0% · Thẻ ATM/Visa/Master · Hỗ trợ hồ sơ bệnh án để thanh toán bảo hiểm |
| Team names seen | BS Quỳnh Thư (chủ phòng khám), cô Linh, nha sĩ Tuấn **[CẦN XÁC NHẬN full names, titles, photos]** |

**Ratings:** always show **per branch** with the date, e.g. "4,9★ · 42 đánh giá Google (Cơ sở 1) — cập nhật [ngày]". Never merge the two into one number.

---

## 3. Brand assets and photos

### 3.1 Logo
- Real logo: a **tooth outline with a heart inside**, plus the wordmark "Nha Khoa" (small, medium weight) over "**QUỲNH THƯ**" (large, bold). Colour: brand blue.
- Request the original vector/PNG file from the clinic **[CẦN XÁC NHẬN]**. Until then, rebuild it as a clean SVG that traces the sign exactly (do not redesign it). Create 2 versions: blue on white, white on dark.

### 3.2 Photo shortlist (all from the clinic's Facebook and Google Maps)
Ask the clinic for the **original files** (higher quality) and written OK to use them. Patients' faces need consent or must be cropped/blurred.

| Slot | Photo to use | Edit |
|---|---|---|
| `hero.webp` | Google Maps CS2 (Dec 2024): 2 dentists in blue/white uniform treating a patient, clean white room, blue chair | Crop 4:5 (mobile) and 16:10 (desktop). Warm the white balance a little. Darken the left side with a gradient for text. |
| `branch-1.webp` | Photo of CS1 storefront or reception **[CẦN XÁC NHẬN — none found online; ask the clinic or take a new photo]** | 4:3 |
| `branch-2.webp` | Google Maps CS2: treatment room with the "Nha Khoa QUỲNH THƯ" logo on the glass wall | 4:3, keep the logo visible |
| `kids.webp` | Facebook: dentist examining a child, parent watching (several similar photos) | 4:3, consent from parent |
| `ba-01.webp`, `ba-02.webp` | Facebook: clinic's own "Hình ảnh trước & sau điều trị" graphics (red/green labels) | Use as provided; add caption |
| `clinic-01…06.webp` | Facebook: bright treatment area with glass partitions; waiting area with blue curtains; dentist at work with loupes; teeth-whitening session; CBCT/scan equipment if available | 4:3 or 1:1, same colour grade |
| `team-*.webp` | Portraits of each doctor **[CẦN XÁC NHẬN — ask the clinic]** | 4:5, same light background |

Do **not** use: the restaurant photo wrongly listed on the CS2 Google Maps page, low-resolution video frames, photos with patient names or screens showing personal data (e.g. the appointment software screenshots).

### 3.3 Photo treatment (consistent "look")
- Same grade on all photos: slightly warm white balance, +5–10 contrast, clean whites, no filters.
- Corner radius 16px. No tilted photos, no stickers, no frames.
- Optional: thin 1px `--line` border on photos with white backgrounds.

---

## 4. Design tokens

### 4.1 Colours (taken from the real logo)

```css
:root {
  /* Brand */
  --brand:        #0A72B8;  /* logo blue: links, icons, headings accent */
  --brand-600:    #085C95;  /* hover, active */
  --brand-50:     #EAF4FB;  /* light blue section background */
  --brand-100:    #D3E8F6;  /* chips, borders on blue */

  /* Dark — ONLY hero and footer */
  --navy:         #0B2E4A;  /* hero + footer background */
  --navy-deep:    #071F33;  /* footer bottom strip, hero gradient */
  --on-navy:      #FFFFFF;
  --on-navy-2:    #B8CCDD;

  /* Light */
  --bg:           #FFFFFF;
  --bg-soft:      #F5F8FA;  /* alternate sections */
  --ink:          #14212B;  /* body text */
  --ink-2:        #52616D;  /* secondary text */
  --line:         #E1E8EE;

  /* Action + status */
  --cta:          #F2A73B;  /* warm "lamp" amber — ONLY for primary CTA buttons */
  --cta-600:      #D98E1E;
  --on-cta:       #2B1A00;
  --star:         #F5B400;
  --open:         #1F9D61;
  --closed:       #C0443A;
}
```

- Blue is the main colour. Amber is **only** for the primary CTA (Zalo / call). Do not use amber for decoration.
- Section backgrounds alternate `--bg` and `--bg-soft`, with one `--brand-50` section (Bảng giá).
- All text/background pairs pass WCAG AA.

### 4.2 Typography (Be Vietnam Pro)

| Token | Mobile | Desktop | Weight |
|---|---|---|---|
| h1 (hero) | 34px / 1.15 | 52px / 1.1 | 700 |
| h2 | 26px / 1.25 | 36px / 1.2 | 700 |
| h3 | 18px / 1.35 | 20px / 1.35 | 600 |
| body | 16px / 1.6 | 17px / 1.65 | 400 |
| small | 14px / 1.5 | 14px / 1.5 | 400 |
| eyebrow | 13px, uppercase, letter-spacing .08em | same | 600, colour `--brand` |

Prices, hours, ratings: `font-variant-numeric: tabular-nums`.

### 4.3 Shape and spacing
- Radius: buttons 10px (not pill — more professional), cards 16px, photos 16px, chips 999px.
- Section padding: 64px mobile, 96px desktop. Grid gap 24px.
- Shadow: one only — `0 4px 20px rgba(11,46,74,.06)`. Cards on white use a `--line` border instead of a heavy shadow.
- Icons: one outline set (Lucide or Tabler, inline SVG), 1.75px stroke, colour `--brand`.

---

## 5. Page structure

### 5.1 Header (light, sticky)
- White background; after 8px scroll add `--line` bottom border.
- Left: real logo (blue version), height 40px mobile / 48px desktop.
- Desktop nav: Dịch vụ · Bảng giá · Phòng khám · Đánh giá · Liên hệ. Active link underline in `--brand`.
- Right: "0944 479 405" as an outline button with phone icon (brand blue). Not amber, so the hero CTA stays the main one.
- Mobile: logo + hamburger (full-width white panel).

### 5.2 Hero — DARK (`--navy`)
Layout: desktop 2 columns (text 50% / photo 50%), mobile photo on top (4:5 crop, max 60vh) then text.

- Eyebrow (`--on-navy-2`): "NHA KHOA GIA ĐÌNH · HÒA XUÂN, ĐÀ NẴNG"
- H1 (white): **"Chăm sóc răng cho cả nhà, mở cửa đến 19:00"**
- Sub (`--on-navy-2`): "Hai cơ sở gần nhà ở Hòa Xuân. Bác sĩ tư vấn và báo giá rõ ràng trước khi điều trị."
- 3 fact items in a row (icon + short text, white), facts only, no promises:
  - "2 cơ sở tại Hòa Xuân"
  - "Mở cửa đến 19:00"
  - "Trả góp 0% · Hỗ trợ hồ sơ bảo hiểm"
- CTAs: primary amber "Nhắn Zalo đặt lịch"; secondary white outline "Gọi 0944 479 405".
- Live status line under the CTAs (JS, time zone `Asia/Ho_Chi_Minh`): green dot + "Cơ sở 1 và Cơ sở 2 đang mở · đóng lúc 19:00", or grey dot + "Đã đóng cửa · mở lại [giờ] [ngày]".
- Ratings row (small): "★ 4,9 · 42 đánh giá (CS1)   ★ 4,7 · 61 đánh giá (CS2) — Google Maps".
- Photo: `hero.webp`, 16px radius on desktop, full-bleed on mobile. A soft gradient from `--navy` to transparent on the side next to the text.
- Do **not** use "an toàn", "không đau", "nhẹ nhàng" as hero claims.

### 5.3 "Dịch vụ" — LIGHT (`--bg`)
- Eyebrow "DỊCH VỤ" · h2 "Dịch vụ nha khoa cho cả gia đình"
- **6 service cards** (3×2 desktop, 2×3 tablet, 2-column mobile). Keep the existing tooth-icon illustrations from the current version, but **recolour them to brand blue** (`--brand` + `--brand-100`) and remove the sparkles, so they match the logo:
  1. Nha khoa trẻ em — "Khám, phòng ngừa và điều trị sâu răng cho bé."
  2. Điều trị sâu răng – tủy — "Điều trị tủy răng 1 lần." **[CẦN XÁC NHẬN wording]**
  3. Trám răng thẩm mỹ
  4. Niềng răng — "Chỉnh răng hô, móm, lệch lạc."
  5. Răng sứ & răng tháo lắp
  6. Tẩy trắng – đính đá răng
  Plus a small text link row: "Nhổ răng · Nhổ răng khôn · Lấy vôi răng".
- Card: white, `--line` border, 16px radius, icon 56px, title h3, one line of text, link "Xem giá →" (scrolls to the matching price group).

### 5.4 "Cho bé" highlight — LIGHT (`--bg-soft`)
The clinic calls itself "Nha khoa của trẻ em" on Facebook. Show this professionally.
- 2 columns: left `kids.webp` (real photo); right text.
- Eyebrow "NHA KHOA TRẺ EM" · h2 "Bé đi khám răng không còn là chuyện khó"
- Short paragraph + 4-step list (numbered circles in `--brand`):
  1. Nhắn Zalo hẹn giờ phù hợp sau giờ làm của bố mẹ
  2. Bé làm quen với ghế và dụng cụ trước khi khám
  3. Bác sĩ khám, giải thích và báo giá cho bố mẹ trước khi làm
  4. Hẹn lịch khám định kỳ
  **[CẦN XÁC NHẬN the process]**
- One real review quote about children (e.g. CS2: "Phòng khám sạch sẽ, dỗ con nít rất kiên trì, rất nhanh.") with name + branch.
- CTA (outline blue): "Đặt lịch khám cho bé".

### 5.5 "Bảng giá" — LIGHT (`--brand-50`)
Important: some Google reviews complain about unclear prices.
- Eyebrow "BẢNG GIÁ" · h2 "Giá tham khảo, báo trước khi điều trị"
- Group tabs (chips): Trẻ em · Tổng quát · Thẩm mỹ · Phục hình · Chỉnh nha.
- A clean white table card from `data/prices.json` (`{ group, name, price_from, price_to, unit, note }`). Columns: Dịch vụ | Giá (VNĐ) | Ghi chú. Price right-aligned, tabular numbers. Format "150.000 – 250.000" or "từ 3.000.000". **[CẦN XÁC NHẬN all prices]**
- Note box under the table (info icon, `--ink-2`):
  "Giá có thể thay đổi theo tình trạng răng. Bác sĩ sẽ khám, giải thích và báo giá trước khi điều trị." **[CẦN XÁC NHẬN the clinic agrees]**
- Payment chips: Trả góp 0% · Thẻ ATM/Visa/Master · Hỗ trợ hồ sơ bảo hiểm.
- No "Khám và tư vấn miễn phí" unless the clinic confirms it.

### 5.6 "Kết quả điều trị" — LIGHT (`--bg`)
- Eyebrow "TRƯỚC & SAU" · h2 "Một số ca điều trị tại phòng khám"
- 2–3 cards using the clinic's real before/after images. If the image is already a combined graphic, show it as-is; if separate photos exist, use an accessible before/after slider (`role="slider"`, arrow keys).
- Caption: treatment name + neutral fact (e.g. "Răng sứ thẩm mỹ – 3 răng hàm dưới"). Small note: "Kết quả khác nhau tùy tình trạng của từng người."

### 5.7 "Phòng khám" — LIGHT (`--bg-soft`)
- Eyebrow "PHÒNG KHÁM" · h2 "Không gian và trang thiết bị"
- Photo grid (desktop: 1 large + 4 small; mobile: 2 columns) from `clinic-01…06.webp`.
- Facility list (icon + label): Chụp phim CBCT · Scan miệng · Quản lý lịch hẹn và bệnh án bằng phần mềm · Dụng cụ được tiệt trùng **[CẦN XÁC NHẬN]**.

### 5.8 "Đội ngũ" — LIGHT (`--bg`) — show only when photos are provided
- h2 "Bác sĩ của Nha khoa Quỳnh Thư"
- 3–4 cards: portrait 4:5, name, title, one line about experience. **[CẦN XÁC NHẬN everything]**
- Config flag `SHOW_TEAM = false` until confirmed.

### 5.9 "Đánh giá" — LIGHT (`--bg-soft`)
- Eyebrow "ĐÁNH GIÁ" · h2 "Khách hàng nói gì trên Google"
- 2 summary tiles: CS1 4,9★ (42) and CS2 4,7★ (61), each linking to its Google Maps page.
- 6 review cards from `data/reviews.json` (`{ text, author, branch, url, time_label }`): stars, quote, first name + initial, branch tag, "Google" label. **Only real reviews, quoted exactly. Never invent names or text.** Starting set (all real, from Google Maps):
  - CS1 — Láng H.: "Bác sĩ và các bạn ở nha khoa rất chuyên nghiệp, tận tâm, làm răng rất nhẹ nhàng, giá cả phải chăng."
  - CS1 — Hương T.: "Các chị dễ thương lắm, tư vấn tận tình, báo giá rõ ràng và giá cũng mềm nha."
  - CS1 — Kim Thoa Q.: "Trám răng thẩm mỹ đẹp, lấy vôi sạch, giá cả vừa phải, phòng khám đông khách, bác sĩ cẩn thận, nhẹ nhàng."
  - CS2 — Phương Anh N.: "Phòng khám sạch sẽ, dỗ con nít rất kiên trì, rất nhanh."
  - CS2 — Thủy Tiên T.: "Đã trám và lấy vôi răng ở đây, rất hài lòng vì dịch vụ tốt, không đau, tư vấn rõ ràng trước khám, phòng sạch sẽ thoáng mát."
  - CS2 — Thuy H.: "Tư vấn nhiệt tình, rõ ràng, răng mình hơi yếu nhưng bác sĩ làm rất nhẹ nhàng, không đau, mình rất hài lòng và sẽ quay lại."
- Button: "Xem tất cả đánh giá trên Google Maps".

### 5.10 "Hai cơ sở" — LIGHT (`--bg`)
- Eyebrow "ĐỊA CHỈ" · h2 "Hai cơ sở tại Hòa Xuân"
- 2 branch cards side by side (stacked on mobile): photo (`branch-1/2.webp`), name, address, hours, live status, rating, buttons **Gọi · Zalo · Chỉ đường** (directions URL with lat/lng).
- Below: one map area with a toggle "Cơ sở 1 / Cơ sở 2" and a static placeholder ("Bấm để xem bản đồ"); click loads the Google Maps embed iframe for the selected branch. No illustrated map.

### 5.11 FAQ — LIGHT (`--bg-soft`) — optional
`<details>` accordion. Questions: Bé mấy tuổi nên khám răng lần đầu? Có cần đặt lịch trước không? Trả góp 0% áp dụng thế nào? Có hỗ trợ hồ sơ bảo hiểm không? Answers **[CẦN XÁC NHẬN]**.

### 5.12 Footer — DARK (`--navy`, bottom strip `--navy-deep`)
- Logo (white version).
- 4 columns (stacked on mobile): Cơ sở 1 · Cơ sở 2 · Liên hệ (phone, Zalo, email) · Giờ làm việc + live status.
- Facebook icons for both pages.
- Short line (white, 500 weight, normal font — no script): "Tan làm vẫn kịp ghé — Nha khoa Quỳnh Thư mở cửa đến 19:00."
- Bottom strip: "© 2026 Công ty TNHH MTV Nha khoa Quỳnh Thư" · "Thông tin chỉ mang tính tham khảo, không thay thế chẩn đoán của bác sĩ."

### 5.13 Mobile sticky action bar
- Fixed bottom, white, top `--line` border, safe-area padding. Buttons: **Gọi** · **Zalo** (amber) · **Chỉ đường**.
- "Chỉ đường" opens a bottom sheet "Bạn muốn đến cơ sở nào?" with both branches (address + status). Focus trap, Esc to close.
- Hidden while hero CTAs are on screen (IntersectionObserver).

---

## 6. JavaScript
1. Open status from `HOURS` config with `Intl.DateTimeFormat(..., { timeZone: 'Asia/Ho_Chi_Minh' })`; refresh every 60 s.
2. Price group tabs (accessible `role="tablist"`).
3. Service card "Xem giá" → scroll and select the matching price tab.
4. Branch map toggle + lazy iframe.
5. Before/after slider (pointer + keyboard), only if separate photos exist.
6. Sticky bar + bottom sheet.
7. `data-track="call|zalo|directions|price"` on all CTAs for analytics later.

---

## 7. SEO
- Title: "Nha khoa Quỳnh Thư – Nha khoa gia đình tại Hòa Xuân, Đà Nẵng"
- Description: "2 cơ sở tại Hòa Xuân, mở cửa đến 19:00. Nha khoa trẻ em, niềng răng, răng sứ, điều trị tủy. Báo giá rõ ràng trước khi điều trị. Gọi 0944 479 405."
- Open Graph image 1200×630: hero photo + white logo.
- JSON-LD: `Organization` + 2 × `Dentist` (address, geo, telephone, openingHoursSpecification, sameAs Facebook). No `aggregateRating`.
- One `<h1>`. `sitemap.xml`, `robots.txt`, favicon from the logo mark.

## 8. Accessibility
- WCAG AA contrast; visible focus ring (3px `--brand` outline, 2px offset; on dark use white).
- Meaningful Vietnamese `alt` text for every photo (e.g. "Bác sĩ Nha khoa Quỳnh Thư đang điều trị cho bệnh nhân tại cơ sở 2").
- Status shown with text, not only colour. Tap targets ≥ 44px. Skip link.

## 9. Content rules (medical advertising)
- No claims like "không đau", "an toàn tuyệt đối", "tốt nhất", "cam kết kết quả", "miễn phí" (unless confirmed). These words may appear **only inside real customer reviews**, quoted exactly.
- No invented reviews, names, ratings, prices, or doctors.
- Keep every `[CẦN XÁC NHẬN]` visible in the code until confirmed.

## 10. Acceptance checklist
- [ ] No cartoon/AI illustrations of people or buildings; only real photos + 6 recoloured service icons.
- [ ] Real logo used (blue on light, white on dark).
- [ ] Dark background only in hero and footer.
- [ ] Amber used only for primary CTAs.
- [ ] Ratings shown per branch with date; reviews are real and exact.
- [ ] Works at 360 / 768 / 1280 px with no horizontal scroll.
- [ ] Call, Zalo, directions work on a real phone; open status correct in Vietnam time.
- [ ] Lighthouse targets met. No `[CẦN XÁC NHẬN]` left before launch.
