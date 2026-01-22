# Hướng Dẫn Chạy Dự Án Với Claude Engineer

Tài liệu này hướng dẫn chi tiết các bước cần thiết để thiết lập và chạy dự án CRM_DQP10 sử dụng Claude Code và ClaudeKit Engineer framework.

## 📋 Yêu Cầu Hệ Thống

### Phần Mềm Cần Thiết
- **[Claude Code](https://code.claude.com/docs/en/setup)** - Đã cài đặt và cấu hình
- **Git** - Quản lý phiên bản
- **Node.js 18+** - Runtime environment
- **Hệ điều hành**: 
  - macOS 10.15+
  - Ubuntu 20.04+/Debian 10+
  - Windows 10+ (với WSL 1, WSL 2, hoặc Git for Windows)

### Phần Cứng
- RAM: 4GB trở lên

## 🚀 Các Bước Thiết Lập

### Bước 1: Cài Đặt ClaudeKit CLI

```bash
npm install -g claudekit-cli
```

### Bước 2: Di Chuyển Vào Thư Mục Dự Án

```bash
cd c:\Users\VietLong\Downloads\Github\CRM_DQP10
```

### Bước 3: Cài Đặt Dependencies

```bash
npm install
```

### Bước 4: Cấu Hình Gemini API (Tùy Chọn)

Nếu bạn muốn sử dụng các Gemini skills (audio, video, image generation, v.v.), cần thiết lập API key:

#### Lấy API Key
Truy cập: https://aistudio.google.com/apikey

#### Cấu Hình API Key (Chọn 1 trong các cách sau)

**Cách 1: Environment Variable (Khuyến nghị cho development)**
```bash
export GEMINI_API_KEY='your-api-key-here'
```

**Cách 2: File .env ở thư mục gốc**
```bash
echo 'GEMINI_API_KEY=your-api-key-here' > .env
```

**Cách 3: File .claude/.env**
```bash
cp .env.example .env
# Sau đó chỉnh sửa file .env và thêm API key
```

### Bước 5: Cấu Hình MCP Servers (Tùy Chọn)

Nếu muốn sử dụng Model Context Protocol servers:

```bash
# Copy file cấu hình mẫu
cp .claude/.mcp.json.example .claude/.mcp.json

# Chỉnh sửa .claude/.mcp.json và thêm các MCP servers cần thiết
```

Ví dụ MCP servers phổ biến:
- **context7** - Tìm kiếm documentation
- **human** - Tương tác với người dùng
- **chrome-devtools** - Automation trình duyệt

## 💻 Bắt Đầu Phát Triển

### Khởi Động Claude Code

```bash
# Chế độ bình thường (khuyến nghị)
claude

# Chế độ YOLO - bỏ qua xác nhận (KHÔNG khuyến nghị)
# claude --dangerously-skip-permissions
```

### Các Lệnh Cơ Bản

Sau khi khởi động Claude Code, bạn có thể sử dụng các lệnh sau:

#### 1. Lập Kế Hoạch Tính Năng Mới
```bash
/plan "implement user authentication"
```

#### 2. Triển Khai Code
```bash
/cook "add database integration"
```

#### 3. Kiểm Tra Chất Lượng
```bash
/test          # Chạy tests
/review        # Code review
```

#### 4. Quản Lý Documentation
```bash
/docs          # Cập nhật tài liệu
```

#### 5. Kiểm Tra Trạng Thái Dự Án
```bash
/watzup        # Xem tổng quan dự án
```

#### 6. Debug
```bash
/debug "investigate login failures"
```

## 🔄 Quy Trình Làm Việc

### Phát Triển Tính Năng Mới

```bash
# 1. Lập kế hoạch
/plan "add real-time notifications"

# 2. Triển khai (tự động theo kế hoạch)
/cook "implement notification system"

# 3. Kiểm tra chất lượng
/test
/review

# 4. Cập nhật tài liệu
/docs

# 5. Kiểm tra tiến độ
/watzup
```

### Sửa Lỗi

```bash
# 1. Phân tích vấn đề
/debug "investigate login failures"

# 2. Tạo kế hoạch sửa lỗi
/plan "resolve authentication bug"

# 3. Triển khai giải pháp
/fix "authentication issue"

# 4. Xác nhận sửa lỗi
/test
```

### Cập Nhật Tài Liệu

```bash
# Cập nhật tài liệu
/docs

# Tạo codebase summary
repomix

# Xem trạng thái dự án
/watzup
```

## 📁 Cấu Trúc Dự Án

```
CRM_DQP10/
├── .claude/                 # Cấu hình Claude Code
│   ├── agents/             # Các AI agents
│   ├── commands/           # Custom commands
│   ├── hooks/              # Hooks
│   ├── skills/             # Skills
│   └── workflows/          # Workflows
├── .opencode/              # Open Code CLI agents
│   ├── agent/              # Agent configurations
│   └── command/            # Command definitions
├── docs/                   # Tài liệu dự án
│   ├── project-overview-pdr.md
│   ├── code-standards.md
│   ├── codebase-summary.md
│   └── system-architecture.md
├── plans/                  # Implementation plans
├── CLAUDE.md              # Hướng dẫn cho Claude
├── GEMINI.md              # Hướng dẫn cho Gemini
└── README.md              # Tài liệu chính
```

## 🤖 Các AI Agents Có Sẵn

### Core Development Agents
- **Planner** - Nghiên cứu và tạo kế hoạch triển khai
- **Researcher** - Điều tra công nghệ và frameworks
- **Tester** - Tạo và chạy test suites

### Quality Assurance Agents
- **Code Reviewer** - Phân tích chất lượng code
- **Debugger** - Phân tích lỗi và performance

### Documentation & Management Agents
- **Docs Manager** - Quản lý tài liệu kỹ thuật
- **Git Manager** - Quản lý version control
- **Project Manager** - Theo dõi tiến độ dự án

## 📚 Tài Liệu Tham Khảo

### Tài Liệu Chính
- [Project Overview & PDR](./docs/project-overview-pdr.md)
- [Codebase Summary](./docs/codebase-summary.md)
- [Code Standards](./docs/code-standards.md)
- [System Architecture](./docs/system-architecture.md)
- [Commands Reference](./guide/COMMANDS.md)

### Tài Liệu Bổ Sung
- [CLAUDE.md](./CLAUDE.md) - Hướng dẫn cho AI agents
- [GEMINI.md](./GEMINI.md) - Cấu hình Gemini MCP
- [CHANGELOG.md](./CHANGELOG.md) - Lịch sử phiên bản

### Resources Bên Ngoài
- [Claude Code Documentation](https://claude.ai/code)
- [Open Code CLI Documentation](https://docs.opencode.ai)
- [ClaudeKit Documentation](https://docs.claudekit.cc)

## 🔧 Troubleshooting

### Lỗi Thường Gặp

#### 1. Claude Code không khởi động được
```bash
# Kiểm tra phiên bản
claude --version

# Cài đặt lại nếu cần
npm install -g @anthropic/claude-code
```

#### 2. Gemini Skills không hoạt động
```bash
# Kiểm tra API key
echo $GEMINI_API_KEY

# Hoặc kiểm tra file .env
cat .env | grep GEMINI_API_KEY
```

#### 3. MCP Servers không kết nối
```bash
# Kiểm tra cấu hình
cat .claude/.mcp.json

# Đảm bảo file tồn tại
ls -la .claude/.mcp.json
```

## 💡 Best Practices

### Nguyên Tắc Phát Triển
- **YANGI** (You Aren't Gonna Need It) - Tránh over-engineering
- **KISS** (Keep It Simple, Stupid) - Ưu tiên giải pháp đơn giản
- **DRY** (Don't Repeat Yourself) - Loại bỏ code trùng lặp

### Chất Lượng Code
- Tất cả thay đổi đều qua automated review
- Testing là bắt buộc
- Luôn cân nhắc security
- Tối ưu performance liên tục

### Documentation
- Tài liệu phải đồng bộ với code
- API docs tự động cập nhật
- Ghi lại các quyết định kiến trúc

### Git Workflow
- Commit messages rõ ràng, theo chuẩn conventional commits
- Lịch sử git chuyên nghiệp
- Commits nhỏ, tập trung

## 🎯 Ví Dụ Sử Dụng

### Bắt Đầu Tính Năng Mới
```bash
claude "I need to implement user authentication with OAuth2"
# Planner agent sẽ tạo kế hoạch chi tiết

claude "Implement the authentication plan"
# Triển khai theo kế hoạch

claude "Review and test the authentication system"
# Testing và code review
```

### Debug Vấn Đề
```bash
claude "Debug the slow database queries"
# Debugger agent phân tích

claude "Optimize the identified query performance issues"
# Triển khai tối ưu

claude "Test query performance improvements"
# Xác nhận cải thiện
```

### Bảo Trì Dự Án
```bash
claude "What's the current project status?"
# Xem tổng quan dự án

claude "Sync documentation with recent changes"
# Cập nhật tài liệu

claude "Plan the next development phase"
# Lập kế hoạch sprint tiếp theo
```

## 📞 Hỗ Trợ

- [Issue Tracker](https://github.com/truongtv22/claudekit-engineer/issues)
- [Documentation](https://docs.claudekit.cc)
- [Community Discord](https://discord.gg/claude-code)

---

**Chúc bạn phát triển thành công với Claude Engineer!** 🚀
