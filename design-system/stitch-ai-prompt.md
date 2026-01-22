# AI Prompt for Stitch/v0.dev - CRM DQP10 Militia Management System

## 🎯 Project Overview

Create a modern, professional web application for a **Militia Management System (Hệ Thống Quản Lý Dân Quân)** for Vietnamese local defense forces. The system manages personnel, activities, equipment, training, and reporting.

---

## 🎨 Design Requirements

### Visual Style

- **Theme**: Professional military aesthetic with modern UI/UX
- **Color Palette**:
  - Primary: Sky blue (#0284c7, #0369a1)
  - Military accents: Olive green (#556B2F), Forest green (#228B22), Navy (#000080)
  - Semantic colors: Success (green), Warning (amber), Error (red)
- **Typography**:
  - Primary: Inter or Roboto
  - Headings: Roboto with semibold/bold weights
  - Vietnamese language support required
- **Components**: Clean, modern cards with subtle shadows and rounded corners
- **Icons**: Use Lucide Icons or Heroicons (outlined style)

### Layout Structure

```
┌─────────────────────────────────────────┐
│ Top Navigation Bar (64px height)       │
│ - Logo left, User menu right           │
├──────┬──────────────────────────────────┤
│      │                                  │
│ Side │  Main Content Area               │
│ Nav  │  (Responsive, scrollable)        │
│ 256px│                                  │
│      │                                  │
└──────┴──────────────────────────────────┘
```

---

## 📋 Core Modules to Design

### 1. Dashboard (Landing Page)

**Components needed**:

- **Stats Cards** (4 columns on desktop, 2 on tablet, 1 on mobile):
  - Total Personnel (with icon: Users)
  - Active Activities (icon: Calendar)
  - Equipment Items (icon: Package)
  - Pending Reports (icon: FileText)
  - Each card shows: Icon, Title, Large number, Change percentage with arrow
- **Charts Section** (2 columns):
  - Bar chart: Personnel by Squad
  - Line chart: Activities over time
- **Recent Activities Table**:
  - Columns: Activity Name, Assigned To, Status Badge, Due Date, Actions
  - Status badges: Pending (yellow), Active (blue), Completed (green)
- **Quick Actions Panel**:
  - Buttons: Add Personnel, Create Activity, Generate Report

### 2. Personnel Management

**Components needed**:

- **List View**:

  - Search bar + Filters (Role, Squad, Status)
  - Personnel cards in grid (3 columns desktop, 2 tablet, 1 mobile):
    - Avatar (circular, 64px)
    - Name (bold, large)
    - Role badge (colored: Admin=red, DQTT=blue, DQCĐ=green)
    - Squad name
    - Status indicator (dot: active=green, inactive=gray)
    - Quick actions: View, Edit, Delete icons
  - Pagination at bottom

- **Detail View**:

  - Profile header with large avatar (128px)
  - Info sidebar (left, 1/3 width):
    - Personal info (Name, ID, DOB, Phone, Email)
    - Role & Squad assignments
    - Status toggle
  - Main content (right, 2/3 width):
    - Tabs: Activity History, Equipment Assigned, Training Records
    - Timeline view for activities

- **Add/Edit Form**:
  - 2-column grid layout
  - Fields: Full Name, ID Number, Date of Birth, Phone, Email, Address
  - Dropdowns: Role, Primary Squad, Status
  - Multi-select: Additional Squads
  - Avatar upload area (drag & drop)
  - Action buttons: Cancel (secondary), Save (primary)

### 3. Activities & Tasks

**Components needed**:

- **Calendar View**:

  - Month/Week/Day toggle
  - Color-coded events by type
  - Click to view details modal

- **List View**:

  - Filters: Date range, Status, Assigned to
  - Activity cards:
    - Title (bold)
    - Description (truncated, 2 lines)
    - Date & Time
    - Primary assignee avatar + name
    - Status badge
    - Task count badge (e.g., "3/5 tasks completed")
    - Action buttons

- **Detail View**:

  - Activity header: Title, Status, Dates
  - Description section
  - Task list with checkboxes:
    - Task name
    - Assigned to (avatar + name)
    - Due date
    - Status
    - Add task button
  - Comments/Notes section
  - Attachment list

- **Create/Edit Form**:
  - Activity name, description (textarea)
  - Date pickers: Start date, End date
  - Assignee selector (searchable dropdown)
  - Support assignees (multi-select)
  - Task builder:
    - Add task rows dynamically
    - Each row: Task name, Assignee, Due date, Remove button

### 4. Equipment & Inventory

**Components needed**:

- **Inventory List**:

  - Grid view with equipment cards:
    - Equipment image/icon
    - Name & Code
    - Category badge
    - Quantity (total / available)
    - Condition indicator
    - Actions: View, Edit, Transfer

- **Transaction History**:

  - Table view:
    - Date, Type (badge: Import=blue, Export=red, Transfer=yellow)
    - Equipment name
    - Quantity
    - From/To (HQ or Person)
    - Status
    - Actions

- **Transaction Form**:
  - Type selector (radio buttons): Import, Export, Transfer
  - Equipment selector (searchable)
  - Quantity input (with validation)
  - Conditional fields:
    - Import: Supplier, Invoice number
    - Export: Recipient (person selector)
    - Transfer: From HQ, To HQ
  - Notes textarea
  - Submit button

### 5. Reports & Documents

**Components needed**:

- **Report List**:

  - Filters: Date range, Type, Status
  - Report cards:
    - Report icon (FileText)
    - Title
    - Type badge
    - Created date
    - Created by (avatar + name)
    - Status badge
    - Download button
    - View button

- **Report Viewer**:

  - Document header: Title, metadata
  - Content area (formatted text)
  - Sidebar: Table of contents, metadata
  - Action bar: Download PDF, Print, Share

- **Report Generator**:
  - Template selector (dropdown)
  - Date range picker
  - Filter options (checkboxes)
  - Preview button
  - Generate button

### 6. Training Management

**Components needed**:

- **Training Programs List**:

  - Program cards:
    - Program name
    - Duration
    - Participants count
    - Status badge
    - Progress bar
    - View details button

- **Training Detail**:
  - Program info header
  - Participant list (table):
    - Avatar, Name, Role
    - Attendance percentage
    - Test scores
    - Status
  - Schedule timeline
  - Materials/Resources section

### 7. Settings & Configuration

**Components needed**:

- **Settings Sidebar** (left):
  - Menu items: Profile, Security, Notifications, System, Users
- **Settings Panels** (right):
  - Profile: Avatar upload, Name, Email, Password change
  - Security: 2FA toggle, Session management
  - Notifications: Toggle switches for email/push notifications
  - System: Headquarters management, Squad configuration
  - Users: User management table (Admin only)

---

## 🎨 Design Tokens to Use

### Colors

```json
{
  "primary": "#0284c7",
  "primaryHover": "#0369a1",
  "militaryOlive": "#556B2F",
  "militaryForest": "#228B22",
  "success": "#10b981",
  "warning": "#f59e0b",
  "error": "#ef4444",
  "neutral": {
    "50": "#f9fafb",
    "100": "#f3f4f6",
    "700": "#374151",
    "900": "#111827"
  }
}
```

### Spacing

- Card padding: 24px (1.5rem)
- Section spacing: 32px (2rem)
- Grid gap: 24px (1.5rem)
- Button padding: 12px 24px

### Typography

- Headings: Roboto, 600-700 weight
- Body: Inter, 400 weight
- Small text: 14px
- Base text: 16px
- Headings: 20px, 24px, 30px

### Shadows

- Card: `0 1px 3px rgba(0,0,0,0.1)`
- Hover: `0 4px 6px rgba(0,0,0,0.1)`
- Modal: `0 20px 25px rgba(0,0,0,0.1)`

---

## 📱 Responsive Requirements

### Breakpoints

- Mobile: 320px - 767px (1 column layouts)
- Tablet: 768px - 1023px (2 column layouts)
- Desktop: 1024px+ (3-4 column layouts)

### Mobile Adaptations

- Sidebar becomes hamburger menu overlay
- Tables become scrollable or card-based
- Multi-column grids stack to single column
- Reduce font sizes by 10%
- Touch-friendly button sizes (min 44px height)

---

## 🔧 Technical Specifications

### Framework Preferences

- **React** with TypeScript (preferred)
- **Tailwind CSS** for styling
- **Shadcn/ui** or **Radix UI** for components
- **Recharts** or **Chart.js** for data visualization
- **React Router** for navigation
- **React Hook Form** + **Zod** for forms

### Component Library

Use modern, accessible components:

- Buttons with loading states
- Form inputs with validation
- Modals/Dialogs
- Dropdowns/Select menus
- Date pickers
- Data tables with sorting/filtering
- Toast notifications
- Skeleton loaders

### State Management

- **React Query** for server state
- **Zustand** or **Context API** for client state

### Icons

- **Lucide React** (preferred) or **Heroicons**

---

## 🎯 Key User Flows to Support

### 1. Add New Personnel

```
Dashboard → Personnel → Add Button → Form → Fill fields → Save → Success toast → Redirect to list
```

### 2. Create Activity with Tasks

```
Dashboard → Activities → Create → Fill activity info → Add tasks → Assign people → Save → Calendar view
```

### 3. Equipment Transfer

```
Equipment → Transfer Button → Select equipment → Choose from/to HQ → Enter quantity → Confirm → Success
```

### 4. Generate Report

```
Reports → Generate → Select template → Choose date range → Apply filters → Preview → Download PDF
```

---

## ✅ Accessibility Requirements

- **WCAG 2.1 AA** compliance
- Keyboard navigation support
- Screen reader friendly (ARIA labels)
- Focus indicators on all interactive elements
- Color contrast ratio ≥ 4.5:1 for text
- Alt text for all images/icons

---

## 🌐 Localization

- **Primary language**: Vietnamese
- Date format: DD/MM/YYYY
- Time format: 24-hour (HH:mm)
- Number format: 1.234,56 (European style)
- Currency: VND (₫)

---

## 🎨 Example Prompts for Specific Pages

### Dashboard Prompt

```
Create a modern dashboard for a militia management system with:
- 4 stat cards showing Total Personnel, Active Activities, Equipment Items, Pending Reports
- Each card has an icon (Users, Calendar, Package, FileText), title, large number, and percentage change
- 2 charts below: bar chart for personnel by squad, line chart for activities over time
- Recent activities table with columns: Activity Name, Assigned To, Status Badge, Due Date, Actions
- Use sky blue (#0284c7) as primary color, military olive (#556B2F) accents
- Clean, professional design with subtle shadows
- Responsive: 4 columns on desktop, 2 on tablet, 1 on mobile
```

### Personnel List Prompt

```
Create a personnel management page with:
- Search bar and filters (Role, Squad, Status) at top
- Grid of personnel cards (3 columns desktop, 2 tablet, 1 mobile)
- Each card shows: circular avatar, name, role badge (colored by role), squad name, status dot, action icons
- Role colors: Admin=red, DQTT=blue, DQCĐ=green
- Pagination at bottom
- Add Personnel button (top right, primary color)
- Use Inter font, sky blue primary color, clean modern design
```

### Activity Detail Prompt

```
Create an activity detail page with:
- Header: Activity title, status badge, date range
- Description section with formatted text
- Task list with checkboxes, each showing: task name, assignee avatar+name, due date, status
- Add task button
- Comments section at bottom
- Sidebar with: Primary assignee, Support assignees, Created date, Updated date
- Action buttons: Edit, Delete, Mark Complete
- Use military olive (#556B2F) for action buttons, sky blue for primary elements
```

---

## 📦 Deliverables Expected

1. **Fully functional React components** for each module
2. **Responsive layouts** that work on mobile, tablet, desktop
3. **Reusable component library** (buttons, forms, cards, etc.)
4. **Consistent design system** following the tokens provided
5. **Clean, maintainable code** with TypeScript
6. **Accessible UI** with ARIA labels and keyboard navigation

---

## 🚀 Getting Started with Stitch

### Step 1: Import Design Tokens

Upload the `design-tokens.json` file to establish the design system foundation.

### Step 2: Generate Core Layout

Start with the main layout (sidebar + top nav + content area) using the layout specifications.

### Step 3: Build Module by Module

Generate each module in order:

1. Dashboard (foundation for other pages)
2. Personnel Management
3. Activities & Tasks
4. Equipment & Inventory
5. Reports
6. Training
7. Settings

### Step 4: Refine & Iterate

Review generated components, request modifications for:

- Spacing adjustments
- Color refinements
- Responsive behavior
- Accessibility improvements

---

## 💡 Pro Tips for Best Results

1. **Be specific**: Reference exact colors, sizes, and components from this spec
2. **One module at a time**: Don't try to generate the entire app at once
3. **Iterate**: Generate, review, refine, repeat
4. **Use examples**: Show Stitch example screenshots or similar UIs for reference
5. **Test responsiveness**: Always check mobile, tablet, desktop views
6. **Validate accessibility**: Use tools like axe DevTools to check WCAG compliance

---

## 📞 Support & Questions

If Stitch generates something unexpected:

- **Clarify the component type**: "I need a data table, not a card grid"
- **Reference this spec**: "Use the primary color from design-tokens.json (#0284c7)"
- **Provide examples**: "Similar to Tailwind UI's dashboard stats cards"
- **Break it down**: Request smaller components first, then compose them

---

**Good luck building your Militia Management System! 🎖️**
