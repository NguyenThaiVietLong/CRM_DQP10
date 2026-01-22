# Layout System - CRM DQP10

## Grid System

### Container

- **Max Width**: `1280px` (wide breakpoint)
- **Padding**: `6` on mobile, `8` on tablet, `12` on desktop
- **Margin**: Auto-centered

### Grid Columns

- **12-column grid** (standard)
- **Gap**: `6` (1.5rem)
- **Responsive**:
  - Mobile: 4 columns
  - Tablet: 8 columns
  - Desktop: 12 columns

---

## Page Layouts

### 1. Dashboard Layout

```
┌─────────────────────────────────────────┐
│ Top Navigation Bar (h-16)              │
├──────┬──────────────────────────────────┤
│      │                                  │
│ Side │  Main Content Area               │
│ bar  │  - Stats Cards (grid-cols-4)     │
│      │  - Charts (grid-cols-2)          │
│ w-64 │  - Recent Activities Table       │
│      │                                  │
│      │                                  │
└──────┴──────────────────────────────────┘
```

**Specifications**:

- Sidebar: `w-64` (256px), collapsible to `w-16` (64px)
- Top Bar: `h-16` (64px), sticky
- Content Padding: `p-6` to `p-8`
- Stats Cards: `grid-cols-1` (mobile) → `grid-cols-2` (tablet) → `grid-cols-4` (desktop)

---

### 2. List/Table Layout

```
┌─────────────────────────────────────────┐
│ Top Navigation Bar                      │
├──────┬──────────────────────────────────┤
│      │ ┌────────────────────────────┐   │
│      │ │ Page Header + Actions      │   │
│      │ └────────────────────────────┘   │
│ Side │ ┌────────────────────────────┐   │
│ bar  │ │ Filters & Search           │   │
│      │ └────────────────────────────┘   │
│      │ ┌────────────────────────────┐   │
│      │ │                            │   │
│      │ │ Data Table                 │   │
│      │ │                            │   │
│      │ └────────────────────────────┘   │
│      │ Pagination                       │
└──────┴──────────────────────────────────┘
```

**Specifications**:

- Header: `mb-6`, flex justify-between
- Filters: `mb-4`, flex gap-4
- Table: Full width, responsive scroll
- Pagination: `mt-4`, centered

---

### 3. Form Layout

```
┌─────────────────────────────────────────┐
│ Top Navigation Bar                      │
├──────┬──────────────────────────────────┤
│      │ ┌────────────────────────────┐   │
│      │ │ Form Header                │   │
│      │ └────────────────────────────┘   │
│ Side │ ┌────────────────────────────┐   │
│ bar  │ │ Section 1                  │   │
│      │ │ ┌──────────┬──────────┐    │   │
│      │ │ │ Field 1  │ Field 2  │    │   │
│      │ │ └──────────┴──────────┘    │   │
│      │ └────────────────────────────┘   │
│      │ ┌────────────────────────────┐   │
│      │ │ Section 2                  │   │
│      │ └────────────────────────────┘   │
│      │ [Cancel] [Save]                  │
└──────┴──────────────────────────────────┘
```

**Specifications**:

- Form Container: `max-w-4xl`, centered
- Sections: Card-based, `mb-6`
- Fields: `grid-cols-1` (mobile) → `grid-cols-2` (desktop)
- Actions: `mt-8`, flex justify-end, gap-4

---

### 4. Detail/Profile Layout

```
┌─────────────────────────────────────────┐
│ Top Navigation Bar                      │
├──────┬──────────────────────────────────┤
│      │ ┌────────────────────────────┐   │
│      │ │ Profile Header + Avatar    │   │
│      │ └────────────────────────────┘   │
│ Side │ ┌──────────┬─────────────────┐   │
│ bar  │ │          │                 │   │
│      │ │ Info     │ Activity Feed   │   │
│      │ │ Sidebar  │ / Details       │   │
│      │ │ (1/3)    │ (2/3)           │   │
│      │ │          │                 │   │
│      │ └──────────┴─────────────────┘   │
└──────┴──────────────────────────────────┘
```

**Specifications**:

- Header: Full width, `mb-6`
- Layout: `grid-cols-1` (mobile) → `grid-cols-3` (desktop)
- Sidebar: `col-span-1`, sticky on desktop
- Main: `col-span-2`

---

## Component Spacing

### Vertical Rhythm

- **Section Spacing**: `mb-8` or `mb-12`
- **Card Spacing**: `mb-6`
- **Form Group Spacing**: `mb-4`
- **Element Spacing**: `mb-2` to `mb-3`

### Horizontal Spacing

- **Button Groups**: `gap-3` or `gap-4`
- **Inline Elements**: `gap-2`
- **Grid Gaps**: `gap-6` (default)

---

## Responsive Breakpoints

### Mobile First Approach

```css
/* Mobile: Default (320px+) */
.container {
  padding: 1rem;
}

/* Tablet: 768px+ */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop: 1024px+ */
@media (min-width: 1024px) {
  .container {
    padding: 3rem;
  }
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* Wide: 1280px+ */
@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}
```

---

## Z-Index Layers

### Stacking Context

1. **Base Content**: `z-0`
2. **Dropdowns**: `z-10` (1000)
3. **Sticky Headers**: `z-20` (1020)
4. **Fixed Elements**: `z-30` (1030)
5. **Modal Backdrop**: `z-40` (1040)
6. **Modal Content**: `z-50` (1050)
7. **Tooltips**: `z-70` (1070)

---

## Accessibility

### Focus States

- **Outline**: 2px solid `primary.500`
- **Offset**: 2px
- **Border Radius**: Match component

### Skip Links

- **Position**: Absolute, top-left
- **Hidden**: Until focused
- **Target**: Main content area

### Keyboard Navigation

- **Tab Order**: Logical flow
- **Escape**: Close modals/dropdowns
- **Arrow Keys**: Navigate lists/menus

---

## Print Styles

### Print Layout

- Remove sidebar navigation
- Remove background colors (except critical)
- Ensure black text on white background
- Add page breaks before major sections
- Show full URLs for links
