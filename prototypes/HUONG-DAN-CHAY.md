# 🚀 Hướng dẫn chạy Prototype DQP10

## Cách 1: Sử dụng start-server.bat (Khuyến nghị)

### Yêu cầu

Cài đặt **một trong hai**:

- **Python** (khuyến nghị): https://www.python.org/downloads/
- **Node.js**: https://nodejs.org/

### Chạy

1. Double-click file `start-server.bat`
2. Browser sẽ tự động mở trang login
3. Đăng nhập với tài khoản demo:
   - **Admin**: username `admin`, password `admin123`
   - **User**: username `ntnhan`, password `123456`
   - **User**: username `ppphu`, password `123456`

---

## Cách 2: Chạy thủ công bằng Python

Mở Command Prompt hoặc PowerShell trong thư mục `prototypes`:

```bash
# Windows
python -m http.server 8080

# hoặc
python3 -m http.server 8080
```

Sau đó mở browser và truy cập: http://localhost:8080/login.html

---

## Cách 3: Chạy thủ công bằng Node.js

```bash
# Cài http-server (chỉ lần đầu)
npm install -g http-server

# Chạy server
http-server -p 8080

# hoặc dùng npx (không cần cài)
npx http-server -p 8080
```

---

## Cách 4: Mở trực tiếp bằng browser

> ⚠️ **Lưu ý**: Một số tính năng có thể không hoạt động do bảo mật CORS

1. Tìm file `login.html` trong thư mục `prototypes`
2. Right-click → Open with → Chọn browser (Chrome/Edge/Firefox)
3. Đăng nhập và sử dụng

---

## Cách 5: Deploy lên GitHub Pages (Chia sẻ online)

1. Push code lên GitHub repository
2. Vào Settings → Pages
3. Chọn branch `main` và folder `/prototypes`
4. Lưu và chờ vài phút
5. Truy cập: `https://<username>.github.io/CRM_DQP10/prototypes/login.html`

---

## 📌 Tài khoản Demo

| Username | Password | Vai trò | Tổ   |
| -------- | -------- | ------- | ---- |
| admin    | admin123 | Admin   | -    |
| ntnhan   | 123456   | User    | Tổ 2 |
| ppphu    | 123456   | User    | Tổ 3 |

---

## ❓ Troubleshooting

### Lỗi "CORS" hoặc không load được JavaScript

→ Sử dụng HTTP server (Cách 1, 2, hoặc 3)

### Lỗi "Port 8080 đang được sử dụng"

→ Đổi sang port khác: `python -m http.server 3000`

### Không có dữ liệu activities

→ Đăng nhập lại, hệ thống sẽ tự động load sample data
