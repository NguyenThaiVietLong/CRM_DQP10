# Design System Foundation - File Index

## 📁 Files Created

### 1. **design-tokens.json**

**Purpose**: Core design primitives (colors, typography, spacing, shadows)
**Use for**: Import into design tools, reference in code, maintain consistency

**Key contents**:

- Color palette (primary, military, semantic, neutral)
- Typography (font families, sizes, weights)
- Spacing scale (0-24)
- Border radius values
- Shadow definitions
- Breakpoints
- Z-index layers

---

### 2. **component-library.md**

**Purpose**: Detailed specifications for all UI components
**Use for**: Reference when building or requesting components

**Sections**:

1. Buttons (Primary, Secondary, Military Action)
2. Input Fields (Text, Select, Date Picker)
3. Cards (Standard, Dashboard Stat, Personnel)
4. Tables (Data Table, Action Column)
5. Navigation (Sidebar, Top Bar)
6. Badges & Tags (Status, Role)
7. Modals & Dialogs
8. Forms (Form Group, Layout)
9. Charts & Visualizations
10. Icons (Library, Common Icons)
11. Loading States (Spinner, Skeleton, Progress)
12. Alerts & Notifications
13. Responsive Behavior

---

### 3. **layout-system.md**

**Purpose**: Grid system, page layouts, and responsive rules
**Use for**: Structuring pages and ensuring consistent layouts

**Sections**:

- Grid System (12-column, responsive)
- Page Layouts (Dashboard, List/Table, Form, Detail/Profile)
- Component Spacing (Vertical rhythm, Horizontal spacing)
- Responsive Breakpoints (Mobile-first approach)
- Z-Index Layers (Stacking context)
- Accessibility (Focus states, Skip links, Keyboard navigation)
- Print Styles

---

### 4. **stitch-ai-prompt.md**

**Purpose**: Comprehensive AI prompt guide for generating UI with Stitch/v0.dev
**Use for**: Copy-paste prompts to generate specific pages/components

**Sections**:

- Project Overview
- Design Requirements (Visual style, Layout structure)
- Core Modules to Design (7 modules with detailed component specs):
  1. Dashboard
  2. Personnel Management
  3. Activities & Tasks
  4. Equipment & Inventory
  5. Reports & Documents
  6. Training Management
  7. Settings & Configuration
- Design Tokens to Use (Quick reference)
- Responsive Requirements
- Technical Specifications (Framework, libraries)
- Key User Flows
- Accessibility Requirements
- Localization (Vietnamese, date/time formats)
- Example Prompts (Ready-to-use prompts for each page)
- Deliverables Expected
- Getting Started with Stitch (Step-by-step)
- Pro Tips for Best Results

---

### 5. **README.md** (This file)

**Purpose**: Quick start guide and file index
**Use for**: Getting started, understanding the package structure

---

## 🚀 Quick Start

### For Stitch/v0.dev Users

1. Open `stitch-ai-prompt.md`
2. Scroll to "Example Prompts for Specific Pages"
3. Copy the prompt for the page you want to build
4. Paste into Stitch and generate
5. Iterate and refine

### For Developers

1. Review `design-tokens.json` for color/spacing values
2. Reference `component-library.md` when building components
3. Use `layout-system.md` for page structure
4. Implement using React + TypeScript + Tailwind CSS

### For Designers

1. Import `design-tokens.json` into Figma/Sketch
2. Use `component-library.md` as component specs
3. Follow `layout-system.md` for grid and spacing
4. Reference `stitch-ai-prompt.md` for module requirements

---

## 📋 Recommended Build Order

1. **Main Layout** (Sidebar + Top Nav)
2. **Dashboard** (Stats + Charts + Table)
3. **Personnel List** (Grid of cards)
4. **Personnel Detail** (Profile view)
5. **Personnel Form** (Add/Edit)
6. **Activities List** (Calendar + Cards)
7. **Activity Detail** (Tasks + Comments)
8. **Equipment List** (Inventory grid)
9. **Equipment Transaction** (Transfer form)
10. **Reports List** (Document cards)
11. **Training Programs** (Program cards)
12. **Settings** (Configuration panels)

---

## 🎨 Design Principles

### 1. Consistency

- Use design tokens for all colors, spacing, typography
- Reuse components across pages
- Maintain visual hierarchy

### 2. Accessibility

- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader support
- Color contrast ≥ 4.5:1

### 3. Responsiveness

- Mobile-first approach
- Breakpoints: 768px (tablet), 1024px (desktop)
- Touch-friendly on mobile (min 44px buttons)

### 4. Performance

- Optimize images
- Lazy load components
- Minimize bundle size

### 5. Localization

- Vietnamese primary language
- DD/MM/YYYY date format
- 24-hour time format

---

## 🔧 Tech Stack

### Recommended

- **Framework**: React + TypeScript
- **Styling**: Tailwind CSS
- **Components**: Shadcn/ui or Radix UI
- **Charts**: Recharts or Chart.js
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **State**: React Query + Zustand

### Alternative

- **Framework**: Next.js (for SSR/SSG)
- **Styling**: Vanilla CSS with CSS Modules
- **Components**: Custom components
- **Charts**: D3.js (for advanced visualizations)

---

## 📞 Support

### Common Questions

**Q: Can I use this with Figma instead of Stitch?**
A: Yes! Import `design-tokens.json` and use `component-library.md` as specs.

**Q: What if I want to change colors?**
A: Edit `design-tokens.json` and update references in `stitch-ai-prompt.md`.

**Q: Can I add new components?**
A: Absolutely! Follow the format in `component-library.md` and maintain consistency.

**Q: Is this mobile-first?**
A: Yes! All layouts are designed mobile-first with responsive breakpoints.

**Q: Can I use this with Vue/Angular?**
A: Yes! The design system is framework-agnostic. Adapt the component specs to your framework.

---

## 📝 Version History

- **v1.0.0** (2025-12-29): Initial release
  - Design tokens
  - Component library (13 categories)
  - Layout system
  - Stitch AI prompts
  - Quick start guide

---

## 🎯 Next Steps

1. **Review all files** to understand the system
2. **Start with Dashboard** using the example prompt
3. **Generate components** one module at a time
4. **Test responsiveness** on all breakpoints
5. **Iterate and refine** based on feedback
6. **Maintain consistency** across all pages

---

**Ready to build? Start with `stitch-ai-prompt.md`! 🚀**
