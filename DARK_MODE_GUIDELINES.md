# Dark Mode Guidelines

This document outlines best practices for maintaining proper contrast and readability in dark mode throughout the application.

## Key Principles

1. **Always add dark mode variants** when styling text, backgrounds, and borders
2. **Test contrast** - ensure text is readable on dark backgrounds
3. **Use consistent color palette** for dark mode

## Color Patterns

### Text Colors
```
Light Mode → Dark Mode

text-gray-900 → dark:text-white
text-gray-600 → dark:text-gray-300
text-muted-foreground → dark:text-gray-400
```

### Background Colors
```
Light Mode → Dark Mode

bg-white → dark:bg-slate-800/90
bg-gray-50 → dark:bg-slate-700/50
bg-blue-50 → dark:bg-blue-900/20
bg-green-50 → dark:bg-green-900/20
bg-pink-50 → dark:bg-pink-900/20
bg-purple-50 → dark:bg-purple-900/20
```

### Border Colors
```
Light Mode → Dark Mode

border (default) → dark:border-slate-700
border-blue-200 → dark:border-blue-800
border-green-200 → dark:border-green-800
border-pink-200 → dark:border-pink-800
border-purple-200 → dark:border-purple-800
```

### Icon & Accent Colors
```
Light Mode → Dark Mode

text-blue-600 → dark:text-blue-400
text-green-600 → dark:text-green-400
text-pink-600 → dark:text-pink-400
text-purple-600 → dark:text-purple-400
text-gray-600 → dark:text-gray-400

bg-blue-100 → dark:bg-blue-900/50
bg-green-100 → dark:bg-green-900/50
```

### Hover States
```
Light Mode → Dark Mode

hover:bg-white/95 → dark:hover:bg-slate-800/95
hover:bg-accent → dark:hover:bg-slate-700
hover:bg-gray-100 → dark:hover:bg-slate-700
```

## Component Patterns

### Card Component
```tsx
<Card className="dark:bg-slate-800/90 dark:border-slate-700">
  <CardHeader>
    <CardTitle className="dark:text-white">Title</CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-muted-foreground dark:text-gray-400">Content</p>
  </CardContent>
</Card>
```

### Button Component
```tsx
<Button
  variant="ghost"
  className="dark:text-white dark:hover:bg-slate-800"
>
  Button Text
</Button>
```

### Info Cards (Colored Backgrounds)
```tsx
<Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
  <CardContent>
    <h3 className="text-blue-900 dark:text-blue-300">Heading</h3>
    <p className="text-blue-800 dark:text-blue-300">Text content</p>
  </CardContent>
</Card>
```

### Icons
```tsx
<Users className="text-blue-600 dark:text-blue-400" />
<Globe className="text-green-600 dark:text-green-400" />
<Heart className="text-pink-600 dark:text-pink-400" />
```

## Checklist for New Components

When creating or modifying components:

- [ ] Add `dark:text-white` to all heading elements
- [ ] Add `dark:text-gray-300` or `dark:text-gray-400` to body text
- [ ] Add `dark:bg-slate-800/90` to Card components
- [ ] Add `dark:border-slate-700` to bordered elements
- [ ] Add `dark:hover:bg-slate-700` to interactive elements
- [ ] Add dark variants to all colored backgrounds and icons
- [ ] Test in dark mode to verify contrast

## Common Mistakes to Avoid

1. ❌ Forgetting dark mode variants entirely
2. ❌ Using `text-gray-600` in dark mode (too low contrast)
3. ❌ Using light backgrounds without dark variants
4. ❌ Forgetting to style hover states for dark mode
5. ❌ Using colored text (blue-800, pink-900) without lighter dark variants

## Tools for Testing

- Toggle dark mode in your system settings
- Use browser dev tools to simulate dark mode
- Check contrast ratios using browser accessibility tools

## Reference Implementation

See `src/components/BerlinDirectory.tsx` for a complete reference implementation with proper dark mode support across all component types.
