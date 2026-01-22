# Hệ thống Quản lý Dân quân Phường Bình Phú

## Giới thiệu

**Hệ thống Quản lý Dân quân Phường Bình Phú** là phần mềm quản lý toàn diện được thiết kế riêng cho lực lượng Dân quân Tự vệ tại **Phường Bình Phú, Quận 6, TP. Hồ Chí Minh**.

Hệ thống giúp số hóa hoàn toàn quy trình quản lý hoạt động, nhân sự, kho trang thiết bị, tài liệu và lịch trực của đơn vị dân quân địa phương.

## Thông tin đơn vị

- **Đơn vị**: Phường đội Bình Phú
- **Địa chỉ**: Phường Bình Phú, Quận 6, TP. Hồ Chí Minh
- **Cấp quản lý**: Ban Chỉ huy Quân sự Phường
- **Lực lượng**: Dân quân Tự vệ (DQTV)

## Mục tiêu của hệ thống

1. **Số hóa quy trình** - Thay thế quản lý giấy tờ bằng hệ thống điện tử
2. **Tăng hiệu quả** - Phân công nhiệm vụ rõ ràng, theo dõi tiến độ chính xác
3. **Quản lý tập trung** - Một nền tảng duy nhất cho mọi hoạt động
4. **Thông báo tức thì** - Cập nhật nhanh chóng cho toàn bộ lực lượng
5. **Minh bạch báo cáo** - Dữ liệu chính xác, dễ truy xuất

---

## CẤU TRÚC HỆ THỐNG

### 1. QUẢN LÝ HOẠT ĐỘNG (Module chính)

Đây là module cốt lõi của hệ thống, quản lý toàn bộ kế hoạch và nhiệm vụ của đơn vị.

#### Các chức năng:

- **Danh sách kế hoạch**: Xem tất cả hoạt động, lọc theo trạng thái, tìm kiếm
- **Lịch hoạt động**: Hiển thị lịch theo tháng với các sự kiện
- **Chi tiết hoạt động**: Thông tin đầy đủ, danh sách nhiệm vụ, tiến độ %
- **Tạo kế hoạch mới**: Form nhập thông tin hoạt động với nhiều trường

#### Các loại nhiệm vụ:

- **Tuần tra bảo vệ** - Tuần tra địa bàn, bảo vệ trật tự
- **Huấn luyện** - Tập luyện quân sự, võ thuật
- **Hội họp** - Họp đơn vị, giao ban
- **Hỗ trợ** - Hỗ trợ địa phương, phòng chống thiên tai

#### Trạng thái nhiệm vụ (Task Workflow 3 bước):

1. 🟡 **Chờ nhận nhiệm vụ** - Nhiệm vụ mới được phân công
2. 🔵 **Chưa bắt đầu** - Đã xác nhận nhận nhiệm vụ
3. 🟢 **Hoàn thành** - Nhiệm vụ đã hoàn thành

---

### 2. QUẢN LÝ NHÂN SỰ

Quản lý hồ sơ và thông tin của toàn bộ lực lượng dân quân.

#### Thông tin quản lý:

- Họ tên, ngày sinh, quê quán
- Chức vụ, cấp bậc
- Đơn vị trực thuộc (Tiểu đội, Trung đội)
- Trình độ văn hóa, chuyên môn
- Số điện thoại, địa chỉ liên hệ
- Ngày nhập ngũ, năm phục vụ

#### Phân loại nhân sự:

- **DQTT** - Dân quân Thường trực (trực chiến 24/7)
- **DQCM** - Dân quân Cơ động
- **DQTC** - Dân quân Tại chỗ

---

### 3. QUẢN LÝ KHO TRANG THIẾT BỊ

Theo dõi vũ khí, công cụ hỗ trợ và thiết bị của đơn vị.

#### Danh mục quản lý:

- **Vũ khí**: Súng AK-47, CKC, súng lục...
- **Đạn dược**: Đạn các loại, lựu đạn
- **Công cụ hỗ trợ**: Dùi cui, áo giáp, mũ bảo hiểm
- **Thiết bị**: Bộ đàm, đèn pin, lều bạt

#### Chức năng:

- Theo dõi xuất/nhập kho
- Báo cáo tồn kho
- Kiểm kê định kỳ
- Ghi nhận cấp phát cho cá nhân

---

### 4. QUẢN LÝ TÀI LIỆU

Lưu trữ và phân loại các văn bản, tài liệu của đơn vị.

#### Loại tài liệu:

- **Văn bản chỉ đạo** - Từ cấp trên
- **Tài liệu huấn luyện** - Giáo trình, hướng dẫn
- **Kế hoạch** - Kế hoạch năm, tháng, tuần
- **Báo cáo** - Báo cáo hoạt động, tổng kết
- **Nội quy** - Quy định nội bộ

---

### 5. LỊCH TRỰC

Quản lý phân công ca trực cho lực lượng.

#### Chức năng:

- **Lịch trực tuần** - Hiển thị dạng bảng Excel
- **Phân ca tự động** - Auto-fill cho DQTT
- **Các vị trí trực**: Cổng chính, Trực ban, Tuần tra
- **Đổi ca** - Yêu cầu và phê duyệt

---

### 6. DASHBOARD TỔNG HỢP

Màn hình tổng quan cho chỉ huy theo dõi.

#### Thông tin hiển thị:

- Số lượng hoạt động (Đang thực hiện / Hoàn thành)
- Tình hình nhân sự (Có mặt / Vắng)
- Tồn kho thiết bị
- Biểu đồ thống kê

---

## HỆ THỐNG THÔNG BÁO

Hệ thống có tính năng thông báo real-time giúp cập nhật nhanh chóng.

#### Các loại thông báo:

- 📌 **Nhiệm vụ mới** - Khi được phân công nhiệm vụ
- ⏰ **Nhắc nhở** - Sắp đến hạn hoàn thành
- ⚠️ **Cảnh báo** - Nhiệm vụ quá hạn
- ✅ **Xác nhận** - Khi hoàn thành nhiệm vụ

---

## QUY TRÌNH LÀM VIỆC

### Bước 1: Chỉ huy tạo kế hoạch

1. Đăng nhập với quyền Admin/Chỉ huy
2. Vào "Tạo kế hoạch mới"
3. Nhập thông tin: Tên, loại, địa điểm, thời gian
4. Thêm các nhiệm vụ con
5. Phân công cho từng đội

### Bước 2: Chiến sĩ nhận nhiệm vụ

1. Nhận thông báo trên hệ thống
2. Xem chi tiết nhiệm vụ
3. Click "Nhận nhiệm vụ" để xác nhận
4. Trạng thái chuyển thành "Chưa bắt đầu"

### Bước 3: Thực hiện và báo cáo

1. Thực hiện nhiệm vụ theo kế hoạch
2. Điền báo cáo kết quả
3. Click "Hoàn thành" khi xong
4. Chỉ huy kiểm tra và phê duyệt

### Bước 4: Theo dõi tiến độ

1. Chỉ huy xem Dashboard tổng quan
2. Kiểm tra % hoàn thành từng hoạt động
3. Xử lý các nhiệm vụ quá hạn
4. Xuất báo cáo tổng kết

---

## PHÂN QUYỀN HỆ THỐNG

### Chỉ huy / Admin

- Tạo và quản lý kế hoạch
- Phân công nhiệm vụ
- Xem toàn bộ dữ liệu
- Phê duyệt báo cáo

### Cán bộ / Tiểu đội trưởng

- Xem nhiệm vụ của đội
- Phân công nhiệm vụ con
- Theo dõi tiến độ đội

### Chiến sĩ

- Xem nhiệm vụ được giao
- Cập nhật trạng thái
- Viết báo cáo

---

## CÔNG NGHỆ SỬ DỤNG

- **HTML5, CSS3** - Giao diện web
- **Tailwind CSS** - Thiết kế responsive
- **Alpine.js** - Tương tác động
- **Material Symbols** - Icon đẹp
- **LocalStorage** - Lưu trữ dữ liệu demo

---

## LIÊN HỆ

**Phường đội Bình Phú**  
Phường Bình Phú, Quận 6, TP. Hồ Chí Minh

---

_Hệ thống được phát triển nhằm nâng cao năng lực quản lý, góp phần xây dựng lực lượng Dân quân Tự vệ vững mạnh, sẵn sàng chiến đấu bảo vệ Tổ quốc._
