# Component Library - CRM DQP10

## Overview

Component specifications for the Militia Management System design system.

---

## 1. Buttons

### Primary Button

- **Background**: `primary.600` (#0284c7)
- **Text**: `neutral.0` (white)
- **Hover**: `primary.700` (#0369a1)
- **Border Radius**: `md` (0.375rem)
- **Padding**: `3` vertical, `6` horizontal
- **Font Weight**: `semibold`
- **Shadow**: `sm`

### Secondary Button

- **Background**: `neutral.100`
- **Text**: `neutral.700`
- **Border**: 1px solid `neutral.300`
- **Hover**: `neutral.200`

### Military Action Button

- **Background**: `military.olive` (#556B2F)
- **Text**: `neutral.0`
- **Icon**: Shield or Star icon
- **Use case**: Critical military operations

---

## 2. Input Fields

### Text Input

- **Border**: 1px solid `neutral.300`
- **Focus Border**: 2px solid `primary.500`
- **Padding**: `3` vertical, `4` horizontal
- **Border Radius**: `md`
- **Font Size**: `base`
- **Placeholder**: `neutral.400`

### Select Dropdown

- **Same as Text Input** + chevron icon
- **Dropdown**: `shadow.lg`, `border-radius.lg`

### Date Picker

- **Calendar Icon**: Left side
- **Format**: DD/MM/YYYY (Vietnamese standard)

---

## 3. Cards

### Standard Card

- **Background**: `neutral.0`
- **Border**: 1px solid `neutral.200`
- **Border Radius**: `lg`
- **Padding**: `6`
- **Shadow**: `base`

### Dashboard Stat Card

- **Background**: Gradient from `primary.50` to `neutral.0`
- **Icon**: Top-left, size `12`
- **Title**: `fontSize.sm`, `fontWeight.medium`, `neutral.600`
- **Value**: `fontSize.3xl`, `fontWeight.bold`, `primary.700`
- **Change Indicator**: Green/Red with arrow icon

### Personnel Card

- **Avatar**: Top-center, size `16`, border `primary.500`
- **Name**: `fontSize.lg`, `fontWeight.semibold`
- **Role Badge**: `military.olive` background
- **Status Indicator**: Dot (green/yellow/red)

---

## 4. Tables

### Data Table

- **Header Background**: `neutral.100`
- **Header Text**: `fontSize.sm`, `fontWeight.semibold`, `neutral.700`
- **Row Hover**: `primary.50`
- **Border**: 1px solid `neutral.200`
- **Padding**: `4` (cells)
- **Zebra Striping**: Optional, `neutral.50`

### Action Column

- **Icons**: Edit (pencil), Delete (trash), View (eye)
- **Icon Size**: `5`
- **Icon Color**: `neutral.500`, hover `primary.600`

---

## 5. Navigation

### Sidebar Navigation

- **Width**: `64` (256px) expanded, `16` (64px) collapsed
- **Background**: `neutral.900`
- **Active Item**: `primary.600` background, left border `primary.400`
- **Text**: `neutral.300`, active `neutral.0`
- **Icons**: `6` size, `neutral.400`

### Top Navigation Bar

- **Height**: `16` (64px)
- **Background**: `neutral.0`
- **Shadow**: `sm`
- **Logo**: Left side, height `10`
- **User Menu**: Right side, avatar + dropdown

---

## 6. Badges & Tags

### Status Badge

- **Pending**: `warning.100` bg, `warning.800` text
- **Active**: `success.100` bg, `success.800` text
- **Completed**: `primary.100` bg, `primary.800` text
- **Cancelled**: `neutral.200` bg, `neutral.700` text
- **Border Radius**: `full`
- **Padding**: `1` vertical, `3` horizontal
- **Font Size**: `xs`
- **Font Weight**: `medium`

### Role Tag

- **Admin**: `error.600` background
- **Ban chỉ huy**: `military.navy` background
- **Tổ trưởng**: `military.olive` background
- **DQTT**: `primary.600` background
- **DQCĐ**: `military.forest` background
- **Text**: Always white
- **Icon**: Optional star/shield

---

## 7. Modals & Dialogs

### Modal

- **Backdrop**: `rgba(0, 0, 0, 0.5)`
- **Container**: `neutral.0`, `shadow.2xl`
- **Max Width**: `2xl` (672px)
- **Border Radius**: `xl`
- **Padding**: `6`
- **Header**: `fontSize.xl`, `fontWeight.semibold`, border-bottom

### Confirmation Dialog

- **Icon**: Warning triangle, `warning.500`
- **Title**: `fontSize.lg`, `fontWeight.semibold`
- **Actions**: Cancel (secondary) + Confirm (primary/error)

---

## 8. Forms

### Form Group

- **Label**: `fontSize.sm`, `fontWeight.medium`, `neutral.700`
- **Spacing**: `2` between label and input
- **Required Indicator**: Red asterisk
- **Helper Text**: `fontSize.xs`, `neutral.500`
- **Error Text**: `fontSize.xs`, `error.600`

### Form Layout

- **Grid**: 2 columns on desktop, 1 on mobile
- **Gap**: `6` between fields
- **Section Divider**: Border-top, `neutral.200`, margin `8`

---

## 9. Charts & Visualizations

### Bar Chart

- **Primary Color**: `primary.500`
- **Secondary Color**: `military.olive`
- **Grid Lines**: `neutral.200`
- **Axis Labels**: `fontSize.xs`, `neutral.600`

### Pie/Donut Chart

- **Colors**: Use `primary` scale + `military` palette
- **Legend**: Right side, `fontSize.sm`

---

## 10. Icons

### Icon Library

- **Recommended**: Lucide Icons or Heroicons
- **Sizes**: `4` (16px), `5` (20px), `6` (24px), `8` (32px)
- **Stroke Width**: 2px (default)

### Common Icons

- **Dashboard**: LayoutDashboard
- **Personnel**: Users
- **Activities**: Calendar
- **Equipment**: Package
- **Reports**: FileText
- **Settings**: Settings
- **Logout**: LogOut
- **Add**: Plus
- **Edit**: Pencil
- **Delete**: Trash2
- **Search**: Search
- **Filter**: Filter

---

## 11. Loading States

### Spinner

- **Size**: `8` (default), `12` (large)
- **Color**: `primary.600`
- **Border Width**: 3px

### Skeleton Loader

- **Background**: `neutral.200`
- **Animation**: Pulse, 2s duration
- **Border Radius**: Match component

### Progress Bar

- **Background**: `neutral.200`
- **Fill**: `primary.600`
- **Height**: `2`
- **Border Radius**: `full`

---

## 12. Alerts & Notifications

### Alert Box

- **Success**: `success.50` bg, `success.700` text, `success.500` border-left
- **Warning**: `warning.50` bg, `warning.700` text, `warning.500` border-left
- **Error**: `error.50` bg, `error.700` text, `error.500` border-left
- **Info**: `primary.50` bg, `primary.700` text, `primary.500` border-left
- **Padding**: `4`
- **Border Radius**: `md`
- **Icon**: Left side, size `5`

### Toast Notification

- **Position**: Top-right
- **Width**: `96` (384px)
- **Shadow**: `xl`
- **Auto-dismiss**: 5 seconds
- **Animation**: Slide in from right

---

## 13. Responsive Behavior

### Mobile (<768px)

- Sidebar collapses to overlay
- Tables become scrollable or card-based
- Forms stack vertically
- Font sizes reduce by 10%

### Tablet (768px - 1024px)

- Sidebar can be toggled
- 2-column layouts become 1-column
- Charts resize proportionally

### Desktop (>1024px)

- Full sidebar visible
- Multi-column layouts
- Hover states enabled
- Tooltips on icon buttons
