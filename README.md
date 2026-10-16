# My Portfolio - Nguyễn Văn A

Portfolio cá nhân 3 trang, xây dựng bằng HTML, CSS, JavaScript thuần và deploy lên GitHub Pages.

## Cấu trúc thư mục

```
my-portfolio/
├── index.html      # Trang chủ (hero + dự án nổi bật)
├── about.html      # Trang giới thiệu (bản thân, kỹ năng, hành trình)
├── contact.html    # Trang liên hệ (form + thông tin)
├── css/
│   └── style.css   # Toàn bộ style, responsive
├── js/
│   └── script.js   # Menu mobile, hiệu ứng, validate form
└── images/
    └── avatar.jpg  # Ảnh chân dung (thay bằng ảnh của bạn)
```

## Hướng dẫn deploy lên GitHub Pages

### Bước 1: Tạo repository
1. Đăng nhập GitHub → bấm **New repository**
2. Đặt tên: `my-portfolio` (Public) → **Create repository**

### Bước 2: Push code lên
Mở terminal/CMD trong thư mục `my-portfolio`:

```bash
git init
git add .
git commit -m "Initial commit - portfolio website"
git branch -M main
git remote add origin https://github.com/<username>/my-portfolio.git
git push -u origin main
```

### Bước 3: Bật GitHub Pages
1. Vào repo → tab **Settings** → menu **Pages** (bên trái)
2. **Branch**: chọn `main` → thư mục `/ (root)` → **Save**
3. Chờ 1–2 phút, trang web sẽ hoạt động tại:

```
https://<username>.github.io/my-portfolio/
```

## Tùy chỉnh cá nhân hóa

- **Tên & thông tin**: tìm thay `Nguyễn Văn A`, `nguyenvana@example.com`, số điện thoại...
- **Ảnh chân dung**: thay file `images/avatar.jpg` bằng ảnh của bạn (giữ nguyên tên file)
- **Dự án**: sửa các thẻ `.project-card` trong `index.html`
- **Màu sắc**: chỉnh biến CSS trong `css/style.css` (phần `:root`)

## Tính năng

- ✅ Responsive (hiển thị tốt trên điện thoại)
- ✅ Menu hamburger trên mobile
- ✅ Hiệu ứng đếm số, thanh kỹ năng, fade-in khi cuộn
- ✅ Form liên hệ có validate (front-end)
- ✅ Active link theo trang hiện tại
