// Sample Activity Data Initializer for CRM Dân Quân P10
// Updated with 39 real user names distributed across 9 teams

// User Database - 39 members distributed across 9 teams
const dqp10_users = [
  // Tổ 1 (4 members)
  { name: "Ngô Trương Định", team: "Tổ 1" },
  { name: "Ngô Hoài Bảo", team: "Tổ 1" },
  { name: "Nguyễn Lý Minh Quang", team: "Tổ 1" },
  { name: "Nguyễn Thành Tài", team: "Tổ 1" },
  
  // Tổ 2 (5 members)
  { name: "Lý Triệu An", team: "Tổ 2" },
  { name: "Phạm Gia Bảo", team: "Tổ 2" },
  { name: "Lâm Ngọc Huyền", team: "Tổ 2" },
  { name: "Đoàn Quốc Đạt", team: "Tổ 2" },
  { name: "Nguyễn Thanh Nhân", team: "Tổ 2" },
  
  // Tổ 3 (5 members)
  { name: "Phan Phong Phú", team: "Tổ 3" },
  { name: "Trương Giang Minh Tùng", team: "Tổ 3" },
  { name: "Lương Triệu Phát", team: "Tổ 3" },
  { name: "Nguyễn Tấn Thuận", team: "Tổ 3" },
  { name: "Nguyễn Ngọc Tiến", team: "Tổ 3" },
  
  // Tổ 4 (4 members)
  { name: "Lại Tu Trung", team: "Tổ 4" },
  { name: "Kiều Gia Huy", team: "Tổ 4" },
  { name: "Lâm Ngọc Yến", team: "Tổ 4" },
  { name: "Trần Minh Hiếu", team: "Tổ 4" },
  
  // Tổ 5 (4 members)
  { name: "Võ Công Minh", team: "Tổ 5" },
  { name: "Võ Trần Vinh", team: "Tổ 5" },
  { name: "Nguyễn Đăng Đông", team: "Tổ 5" },
  { name: "Lê Minh Hoàng", team: "Tổ 5" },
  
  // Tổ 6 (5 members)
  { name: "Trần Hoàng Phi", team: "Tổ 6" },
  { name: "Lưu Vĩnh Cơ", team: "Tổ 6" },
  { name: "Lê Hải Triều", team: "Tổ 6" },
  { name: "Hoàng Phạm Thế Lộc", team: "Tổ 6" },
  { name: "Vương Quý Thắng", team: "Tổ 6" },
  
  // Tổ 7 (4 members)
  { name: "La Gia Huy", team: "Tổ 7" },
  { name: "Nguyễn Trung Kiên", team: "Tổ 7" },
  { name: "Nguyễn Ngọc Sơn", team: "Tổ 7" },
  { name: "Trần Anh Tuấn", team: "Tổ 7" },
  
  // Tổ 8 (4 members)
  { name: "Trương Tấn Khương", team: "Tổ 8" },
  { name: "Nguyễn Ngô Hoàng Phương", team: "Tổ 8" },
  { name: "Đặng Trung Hảo", team: "Tổ 8" },
  { name: "Lê Gia Triết", team: "Tổ 8" },
  
  // Tổ 9 (4 members)
  { name: "Cao Thanh Long", team: "Tổ 9" },
  { name: "Lê Huỳnh Ái Nhi", team: "Tổ 9" },
  { name: "Nguyễn Anh Chiến", team: "Tổ 9" },
  { name: "Hà Thanh Huy", team: "Tổ 9" }
];

// Sample Activities with updated user assignments
const sampleActivities = [
  {
    id: 1,
    name: "Hoạt động kế hoạch hành quân tháng 01",
    workType: "kehoach",
    workGroup: "HUANLUYEN",
    department: "1",
    startDate: "05/01/2026",
    endDate: "25/01/2026",
    documentNumber: "456/CV-BCH",
    location: "Sân tập Phường 10",
    attachedFiles: ["Tài liệu công văn.pdf"],
    tasks: [
      {
        title: "Xây dựng lịch hành quân và tham mưu ban CHQS",
        team: "Tổ 1",
        assignees: "Ngô Trương Định",
        dueDate: "08/01/2026",
        reportFields: [],
        notes: "",
        completed: true
      },
      {
        title: "Chụp ảnh quay phim tư liệu",
        team: "Tổ 4",
        assignees: "Kiều Gia Huy",
        dueDate: "15/01/2026",
        reportFields: [
          { name: "Số lượng ảnh" },
          { name: "Thời lượng video (phút)" }
        ],
        notes: "",
        completed: true
      },
      {
        title: "Tổ chức biên tập hình ảnh",
        team: "Tổ 4",
        assignees: "Lâm Ngọc Yến",
        dueDate: "20/01/2026",
        reportFields: [
          { name: "Số ảnh đã biên tập" }
        ],
        notes: "",
        completed: false
      },
      {
        title: "Chuẩn bị hệ thống tư trang",
        team: "Tổ 5",
        assignees: "Võ Công Minh",
        dueDate: "18/01/2026",
        reportFields: [
          { name: "Số lượng trang phục" },
          { name: "Số lượng vũ khí" }
        ],
        notes: "",
        completed: false
      }
    ],
    createdBy: "admin",
    createdAt: "2026-01-05T08:00:00Z"
  },
  {
    id: 2,
    name: "Tập huấn nghiệp vụ chiến đấu tháng 01",
    workType: "kehoach",
    workGroup: "HUANLUYEN",
    department: "2",
    startDate: "10/01/2026",
    endDate: "28/01/2026",
    documentNumber: "123/CV-DQ",
    location: "Trường bắn Củ Chi",
    attachedFiles: [],
    tasks: [
      {
        title: "Lập kế hoạch tập huấn",
        team: "Tổ 2",
        assignees: "Lý Triệu An",
        dueDate: "12/01/2026",
        reportFields: [
          { name: "Nội dung đào tạo" }
        ],
        notes: "Chuẩn bị giáo án chi tiết",
        completed: true
      },
      {
        title: "Tổ chức huấn luyện thực hành",
        team: "Tổ 2",
        assignees: "Phạm Gia Bảo",
        dueDate: "25/01/2026",
        reportFields: [
          { name: "Số học viên tham gia" },
          { name: "Điểm đánh giá trung bình" }
        ],
        notes: "",
        completed: true
      },
      {
        title: "Kiểm tra đánh giá kết quả",
        team: "Tổ 2",
        assignees: "Đoàn Quốc Đạt",
        dueDate: "28/01/2026",
        reportFields: [
          { name: "Số người đạt" },
          { name: "Số người không đạt" }
        ],
        notes: "",
        completed: false
      }
    ],
    createdBy: "dqtt",
    createdAt: "2026-01-08T09:30:00Z"
  },
  {
    id: 3,
    name: "Kiểm tra trang bị vũ khí tháng 01",
    workType: "kehoach",
    workGroup: "KTTC",
    department: "3",
    startDate: "06/01/2026",
    endDate: "10/01/2026",
    documentNumber: "789/QĐ-BCH",
    location: "Kho vũ khí P10",
    attachedFiles: [],
    tasks: [
      {
        title: "Kiểm kê số lượng vũ khí",
        team: "Tổ 3",
        assignees: "Phan Phong Phú",
        dueDate: "08/01/2026",
        reportFields: [
          { name: "Tổng số súng" },
          { name: "Tổng số đạn" }
        ],
        notes: "Báo cáo chi tiết theo từng loại",
        completed: true
      },
      {
        title: "Đánh giá tình trạng kỹ thuật",
        team: "Tổ 3",
        assignees: "Trương Giang Minh Tùng",
        dueDate: "10/01/2026",
        reportFields: [
          { name: "Số vũ khí tốt" },
          { name: "Số vũ khí cần bảo dưỡng" }
        ],
        notes: "",
        completed: true
      }
    ],
    createdBy: "admin",
    createdAt: "2026-01-05T10:00:00Z"
  },
  {
    id: 4,
    name: "Tập huấn công tác tuyên truyền",
    workType: "kehoach",
    workGroup: "CHINHTR",
    department: "1",
    startDate: "12/01/2026",
    endDate: "14/01/2026",
    documentNumber: "012/QĐ-TT",
    location: "Hội trường UBND P10",
    attachedFiles: [],
    tasks: [
      {
        title: "Chuẩn bị tài liệu tuyên truyền",
        team: "Tổ 1",
        assignees: "Nguyễn Lý Minh Quang",
        dueDate: "12/01/2026",
        reportFields: [{ name: "Số tài liệu" }],
        notes: "",
        completed: true
      },
      {
        title: "Tổ chức buổi tập huấn",
        team: "Tổ 2",
        assignees: "Nguyễn Thanh Nhân",
        dueDate: "13/01/2026",
        reportFields: [{ name: "Số người tham dự" }],
        notes: "",
        completed: false
      },
      {
        title: "Đánh giá kết quả",
        team: "Tổ 1",
        assignees: "Ngô Hoài Bảo",
        dueDate: "14/01/2026",
        reportFields: [{ name: "Báo cáo đánh giá" }],
        notes: "",
        completed: false
      }
    ],
    createdBy: "admin",
    createdAt: "2026-01-10T09:00:00Z"
  },
  {
    id: 5,
    name: "Kiểm tra công tác hậu cần",
    workType: "kehoach",
    workGroup: "KTTC",
    department: "2",
    startDate: "16/01/2026",
    endDate: "18/01/2026",
    documentNumber: "016/CV-HC",
    location: "Kho hậu cần P10",
    attachedFiles: [],
    tasks: [
      {
        title: "Kiểm kê vật tư",
        team: "Tổ 2",
        assignees: "Lâm Ngọc Huyền",
        dueDate: "16/01/2026",
        reportFields: [{ name: "Danh sách vật tư" }],
        notes: "",
        completed: true
      },
      {
        title: "Kiểm tra kho lương thực",
        team: "Tổ 3",
        assignees: "Lương Triệu Phát",
        dueDate: "17/01/2026",
        reportFields: [{ name: "Số lượng tồn kho" }],
        notes: "",
        completed: true
      },
      {
        title: "Lập báo cáo tổng hợp",
        team: "Tổ 2",
        assignees: "Đoàn Quốc Đạt",
        dueDate: "18/01/2026",
        reportFields: [{ name: "Báo cáo" }],
        notes: "",
        completed: false
      }
    ],
    createdBy: "dqtt",
    createdAt: "2026-01-14T11:00:00Z"
  },
  {
    id: 6,
    name: "Diễn tập phòng thủ dân sự",
    workType: "kehoach",
    workGroup: "DIEUDONGG",
    department: "3",
    startDate: "19/01/2026",
    endDate: "21/01/2026",
    documentNumber: "019/QĐ-PTDS",
    location: "Khu vực trung tâm P10",
    attachedFiles: [],
    tasks: [
      {
        title: "Lập kế hoạch diễn tập",
        team: "Tổ 3",
        assignees: "Nguyễn Tấn Thuận",
        dueDate: "19/01/2026",
        reportFields: [{ name: "Kế hoạch chi tiết" }],
        notes: "",
        completed: true
      },
      {
        title: "Phân công lực lượng",
        team: "Tổ 1",
        assignees: "Nguyễn Thành Tài",
        dueDate: "19/01/2026",
        reportFields: [{ name: "Danh sách phân công" }],
        notes: "",
        completed: true
      },
      {
        title: "Tổ chức diễn tập",
        team: "Tổ 3",
        assignees: "Nguyễn Ngọc Tiến",
        dueDate: "20/01/2026",
        reportFields: [{ name: "Thời gian thực hiện" }, { name: "Kết quả" }],
        notes: "",
        completed: false
      },
      {
        title: "Tổng kết rút kinh nghiệm",
        team: "Tổ 2",
        assignees: "Phạm Gia Bảo",
        dueDate: "21/01/2026",
        reportFields: [{ name: "Biên bản tổng kết" }],
        notes: "",
        completed: false
      }
    ],
    createdBy: "admin",
    createdAt: "2026-01-16T08:30:00Z"
  },
  {
    id: 7,
    name: "Bảo dưỡng định kỳ trang thiết bị",
    workType: "kehoach",
    workGroup: "KTTC",
    department: "3",
    startDate: "15/01/2026",
    endDate: "20/01/2026",
    documentNumber: "150/CV-BD",
    location: "Kho thiết bị P10",
    attachedFiles: [],
    tasks: [
      {
        title: "Kiểm tra thiết bị thông tin liên lạc",
        team: "Tổ 3",
        assignees: "Phan Phong Phú",
        dueDate: "16/01/2026",
        reportFields: [
          { name: "Số thiết bị được kiểm tra" },
          { name: "Số thiết bị hỏng" }
        ],
        notes: "Ưu tiên thiết bị vô tuyến",
        completed: true
      },
      {
        title: "Bảo dưỡng phương tiện giao thông",
        team: "Tổ 3",
        assignees: "Trương Giang Minh Tùng",
        dueDate: "18/01/2026",
        reportFields: [
          { name: "Số xe được bảo dưỡng" }
        ],
        notes: "",
        completed: false
      }
    ],
    createdBy: "dqtt",
    createdAt: "2026-01-12T10:00:00Z"
  },
  {
    id: 8,
    name: "Huấn luyện kỹ năng sơ cấp cứu",
    workType: "kehoach",
    workGroup: "HUANLUYEN",
    department: "3",
    startDate: "22/01/2026",
    endDate: "25/01/2026",
    documentNumber: "220/QĐ-HL",
    location: "Trung tâm Y tế P10",
    attachedFiles: [],
    tasks: [
      {
        title: "Chuẩn bị tài liệu đào tạo",
        team: "Tổ 3",
        assignees: "Lương Triệu Phát",
        dueDate: "21/01/2026",
        reportFields: [
          { name: "Số tài liệu photo" }
        ],
        notes: "Liên hệ Trung tâm Y tế lấy tài liệu",
        completed: true
      },
      {
        title: "Tổ chức lớp đào tạo",
        team: "Tổ 3",
        assignees: "Nguyễn Tấn Thuận",
        dueDate: "24/01/2026",
        reportFields: [
          { name: "Số học viên" },
          { name: "Số giờ đào tạo" }
        ],
        notes: "",
        completed: false
      },
      {
        title: "Kiểm tra kỹ năng thực hành",
        team: "Tổ 3",
        assignees: "Nguyễn Ngọc Tiến",
        dueDate: "25/01/2026",
        reportFields: [
          { name: "Số người đạt" },
          { name: "Số người chưa đạt" }
        ],
        notes: "",
        completed: false
      }
    ],
    createdBy: "admin",
    createdAt: "2026-01-15T14:30:00Z"
  },
  {
    id: 9,
    name: "Diễn tập ứng phó thiên tai và tìm kiếm cứu nạn",
    workType: "dotxuat",
    workGroup: "DIEUDONGG",
    department: "3",
    startDate: "26/01/2026",
    endDate: "28/01/2026",
    documentNumber: "010/CV-TKNN",
    location: "Khu vực ven kênh Phường 10",
    attachedFiles: [],
    tasks: [
      {
        title: "Lập kế hoạch diễn tập chi tiết",
        team: "Tổ 3",
        assignees: "Phan Phong Phú",
        dueDate: "25/01/2026",
        reportFields: [
          { name: "Kịch bản diễn tập" }
        ],
        notes: "Phối hợp với UBND Phường",
        completed: true
      },
      {
        title: "Chuẩn bị trang thiết bị cứu hộ",
        team: "Tổ 3",
        assignees: "Trương Giang Minh Tùng",
        dueDate: "26/01/2026",
        reportFields: [
          { name: "Số bộ dụng cụ TKNN" },
          { name: "Số phao cứu sinh" }
        ],
        notes: "Kiểm tra kỹ thiết bị trước khi diễn tập",
        completed: true
      },
      {
        title: "Tổ chức diễn tập thực tế",
        team: "Tổ 3",
        assignees: "Lương Triệu Phát",
        dueDate: "27/01/2026",
        reportFields: [
          { name: "Số người tham gia" },
          { name: "Thời gian hoàn thành (phút)" },
          { name: "Đánh giá kết quả" }
        ],
        notes: "",
        completed: false
      }
    ],
    createdBy: "dqtt",
    createdAt: "2026-01-18T09:00:00Z"
  },
  {
    id: 10,
    name: "Diễn tập phòng cháy chữa cháy liên tổ",
    workType: "kehoach",
    workGroup: "DIEUDONGG",
    department: "1",
    startDate: "15/01/2026",
    endDate: "20/01/2026",
    documentNumber: "015/QĐ-PCCC",
    location: "Khu vực Phường 10",
    attachedFiles: [],
    tasks: [
      {
        title: "Lập kế hoạch diễn tập",
        team: "Tổ 1",
        assignees: "Ngô Trương Định",
        dueDate: "16/01/2026",
        reportFields: [{ name: "Kịch bản diễn tập" }],
        notes: "Phối hợp với UBND",
        completed: true
      },
      {
        title: "Chuẩn bị thiết bị PCCC",
        team: "Tổ 2",
        assignees: "Lý Triệu An",
        dueDate: "17/01/2026",
        reportFields: [{ name: "Số bình chữa cháy" }, { name: "Số vòi nước" }],
        notes: "",
        completed: true
      },
      {
        title: "Huấn luyện kỹ năng PCCC",
        team: "Tổ 3",
        assignees: "Phan Phong Phú",
        dueDate: "18/01/2026",
        reportFields: [{ name: "Số người tham gia" }],
        notes: "",
        completed: false
      },
      {
        title: "Tổ chức diễn tập thực tế",
        team: "Tổ 1",
        assignees: "Nguyễn Lý Minh Quang",
        dueDate: "19/01/2026",
        reportFields: [{ name: "Thời gian hoàn thành (phút)" }, { name: "Đánh giá" }],
        notes: "",
        completed: false
      }
    ],
    createdBy: "admin",
    createdAt: "2026-01-14T08:00:00Z"
  },
  {
    id: 11,
    name: "Tổng kết công tác quý 1/2026",
    workType: "kehoach",
    workGroup: "VANPHONG",
    department: "1",
    startDate: "28/01/2026",
    endDate: "30/01/2026",
    documentNumber: "028/BB-TK",
    location: "Phòng họp UBND P10",
    attachedFiles: [],
    tasks: [
      {
        title: "Tổng hợp báo cáo Tổ 1",
        team: "Tổ 1",
        assignees: "Ngô Hoài Bảo",
        dueDate: "28/01/2026",
        reportFields: [{ name: "Nội dung báo cáo" }],
        notes: "",
        completed: false
      },
      {
        title: "Tổng hợp báo cáo Tổ 2",
        team: "Tổ 2",
        assignees: "Lâm Ngọc Huyền",
        dueDate: "28/01/2026",
        reportFields: [{ name: "Nội dung báo cáo" }],
        notes: "",
        completed: false
      },
      {
        title: "Tổng hợp báo cáo Tổ 3",
        team: "Tổ 3",
        assignees: "Trương Giang Minh Tùng",
        dueDate: "28/01/2026",
        reportFields: [{ name: "Nội dung báo cáo" }],
        notes: "",
        completed: false
      },
      {
        title: "Biên tập slide trình bày",
        team: "Tổ 1",
        assignees: "Nguyễn Thành Tài",
        dueDate: "29/01/2026",
        reportFields: [{ name: "Số slide" }],
        notes: "Sử dụng template chuẩn",
        completed: false
      },
      {
        title: "Tổ chức họp tổng kết",
        team: "Tổ 1",
        assignees: "Ngô Trương Định",
        dueDate: "30/01/2026",
        reportFields: [{ name: "Số người tham dự" }, { name: "Biên bản họp" }],
        notes: "",
        completed: false
      }
    ],
    createdBy: "admin",
    createdAt: "2026-01-20T10:00:00Z"
  },
  {
    id: 12,
    name: "Kiểm tra an ninh trật tự toàn phường",
    workType: "dotxuat",
    workGroup: "DIEUDONGG",
    department: "2",
    startDate: "22/01/2026",
    endDate: "24/01/2026",
    documentNumber: "022/CV-ANTT",
    location: "Toàn bộ khu vực P10",
    attachedFiles: [],
    tasks: [
      {
        title: "Kiểm tra khu vực 1",
        team: "Tổ 1",
        assignees: "Ngô Trương Định, Nguyễn Lý Minh Quang",
        dueDate: "22/01/2026",
        reportFields: [{ name: "Tình hình ANTT" }, { name: "Vấn đề phát hiện" }],
        notes: "",
        completed: true
      },
      {
        title: "Kiểm tra khu vực 2",
        team: "Tổ 2",
        assignees: "Lý Triệu An, Phạm Gia Bảo",
        dueDate: "22/01/2026",
        reportFields: [{ name: "Tình hình ANTT" }, { name: "Vấn đề phát hiện" }],
        notes: "",
        completed: true
      },
      {
        title: "Kiểm tra khu vực 3",
        team: "Tổ 3",
        assignees: "Phan Phong Phú, Lương Triệu Phát",
        dueDate: "23/01/2026",
        reportFields: [{ name: "Tình hình ANTT" }, { name: "Vấn đề phát hiện" }],
        notes: "",
        completed: false
      },
      {
        title: "Tổng hợp báo cáo",
        team: "Tổ 2",
        assignees: "Nguyễn Thanh Nhân",
        dueDate: "24/01/2026",
        reportFields: [{ name: "Báo cáo tổng hợp" }],
        notes: "Gửi báo cáo cho UBND",
        completed: false
      }
    ],
    createdBy: "admin",
    createdAt: "2026-01-21T14:00:00Z"
  }
];

// Save to localStorage
localStorage.setItem('dqp10_users', JSON.stringify(dqp10_users));
localStorage.setItem('dqp10_activities', JSON.stringify(sampleActivities));

console.log('✅ Đã lưu 39 users và 12 hoạt động mẫu vào localStorage!');
console.log('📊 User Distribution:');
console.log('   Tổ 1: 4 members');
console.log('   Tổ 2: 5 members');
console.log('   Tổ 3: 5 members');
console.log('   Tổ 4: 4 members');
console.log('   Tổ 5: 4 members');
console.log('   Tổ 6: 5 members');
console.log('   Tổ 7: 4 members');
console.log('   Tổ 8: 4 members');
console.log('   Tổ 9: 4 members');
console.log('   Total: 39 members');
console.log('📋 Keys: dqp10_users, dqp10_activities');
console.log('📊 Progress tracking enabled - each task has completed status');
