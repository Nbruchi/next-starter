# Locale Switching Implementation

This document explains how to use the `useSwitchLocaleHref` hook to implement
locale switching in your Next.js app.

## Available Components

### 1. `LocaleSwitcher` - Simple Button-based Switcher

A clean, simple locale switcher with buttons for each language.

```tsx
import LocaleSwitcher from "@/components/locale-switcher";

// Use in any component
<LocaleSwitcher />;
```

### 2. `AdvancedLocaleSwitcher` - Dropdown with Flags

A more sophisticated dropdown switcher with country flags and visual indicators.

```tsx
import AdvancedLocaleSwitcher from "@/components/advanced-locale-switcher";

// Use in navigation bars or headers
<AdvancedLocaleSwitcher />;
```

### 3. `SimpleLocaleExample` - Direct Hook Usage

Shows how to use the `useSwitchLocaleHref` hook directly in your components.

## Using the Hook Directly

```tsx
"use client";

import { useSwitchLocaleHref } from "@/features/internationalization/use-switch-locale-href";
import { Locale } from "@/features/internationalization/i18n-config";
import Link from "next/link";

export default function MyComponent() {
  const getSwitchLocaleHref = useSwitchLocaleHref();

  return (
    <div>
      <Link href={getSwitchLocaleHref("en-US")}>Switch to English</Link>
      <Link href={getSwitchLocaleHref("rw-RW")}>Switch to Kinyarwanda</Link>
    </div>
  );
}
```

## How It Works

1. **Hook Function**: `useSwitchLocaleHref()` returns a function that takes a
   locale and returns the correct href
2. **Path Preservation**: The hook preserves the current path and only changes
   the locale segment
3. **Current Path Detection**: It uses `usePathname()` to get the current path
   and extracts the locale
4. **URL Construction**: It replaces the locale segment in the path with the new
   locale

## Example URLs

- Current: `/en-US/about` → Switch to Kinyarwanda → `/rw-RW/about`
- Current: `/rw-RW/products/item-1` → Switch to English →
  `/en-US/products/item-1`
- Current: `/en-US` → Switch to Kinyarwanda → `/rw-RW`

## Available Locales

- `en-US` - English (United States)
- `rw-RW` - Kinyarwanda (Rwanda)

## Styling

All components use Tailwind CSS classes and can be easily customized:

- Button styles
- Hover effects
- Active state indicators
- Responsive design
- Color schemes

## Integration Tips

1. **Navigation Bars**: Use `AdvancedLocaleSwitcher` in your main navigation
2. **Footer**: Use `LocaleSwitcher` for a simple footer language selector
3. **Custom Components**: Use the hook directly for custom implementations
4. **Mobile**: Both components are mobile-friendly and responsive
