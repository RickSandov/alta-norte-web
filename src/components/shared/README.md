# Alta Norte Web - Shared Components

Optimized component library for Astro 5.8.1 with modern design patterns inspired by the Alta Norte brand palette.

## Design System

### Color Palette
- **Primary**: `#2A3729` (Dark Forest Green)
- **Secondary**: `#265143` (Medium Forest Green) 
- **Tertiary**: `#272831` (Dark Charcoal)
- **Accent**: `#0D1518` (Deep Black)
- **Surface**: `#061717` (Almost Black)
- **Text**: White on dark surfaces, Black on light surfaces

### Design Principles
- **High Contrast**: Ensures accessibility and readability
- **Generous Whitespace**: Creates luxurious, uncluttered feel
- **Clean Typography**: Sans-serif with bold emphasis for primary elements
- **Subtle Motion**: Gentle transitions and hover effects

## Component Categories

### Static Components (Astro)
These components are rendered server-side and are optimized for performance:

#### Button.astro
```astro
---
import { Button } from '@/components/shared';
---

<Button variant="primary" size="md">Click me</Button>
<Button variant="outline" fullWidth>Full Width Button</Button>
<Button variant="ghost" loading>Loading...</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'outline' | 'ghost'
- `size`: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
- `type`: 'button' | 'submit'
- `disabled`: boolean
- `fullWidth`: boolean
- `loading`: boolean
- `rounded`: boolean

#### Title.astro
```astro
---
import { Title } from '@/components/shared';
---

<Title as="h1" variant="luxury" size="xl" gradient>Main Heading</Title>
<Title as="h2" align="left">Section Title</Title>
```

**Props:**
- `as`: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
- `variant`: 'primary' | 'secondary' | 'luxury' | 'minimal'
- `size`: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
- `align`: 'left' | 'center' | 'right'
- `gradient`: boolean

#### PageContainer.astro
```astro
---
import { PageContainer } from '@/components/shared';
---

<PageContainer variant="luxury" maxWidth="7xl">
  <slot />
</PageContainer>
```

**Props:**
- `variant`: 'default' | 'luxury' | 'minimal'
- `maxWidth`: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '7xl' | 'full'

#### Logo.astro
```astro
---
import { Logo } from '@/components/shared';
---

<Logo width={200} height={140} class="text-white" />
```

#### Loading.astro
```astro
---
import { Loading } from '@/components/shared';
---

<Loading text="Cargando datos..." size="lg" />
```

#### Icon Components
- `ChevronLeft.astro`
- `ChevronRight.astro` 
- `XIcon.astro`
- `ExternalLink.astro`

All icons support:
- `size`: 'sm' | 'md' | 'lg' | 'xl'
- `class`: string for custom styling

### Interactive Components (React)
These components require client-side JavaScript and should be used with `client:` directives:

#### Input.tsx
```tsx
import { Input } from '@/components/shared';

<Input
  client:load
  name="email"
  label="Email Address"
  type="email"
  placeholder="Enter your email"
  required
  onChange={(value) => console.log(value)}
/>
```

#### TextArea.tsx
```tsx
import { TextArea } from '@/components/shared';

<TextArea
  client:load
  name="message"
  label="Message"
  rows={6}
  placeholder="Type your message..."
  onChange={(value) => console.log(value)}
/>
```

#### Switch.tsx
```tsx
import { Switch } from '@/components/shared';

<Switch
  client:load
  name="notifications"
  label="Enable Notifications"
  checked={true}
  onChange={(checked) => console.log(checked)}
/>
```

#### Dialog.tsx
```tsx
import { Dialog } from '@/components/shared';

<Dialog
  client:load
  isOpen={isDialogOpen}
  onClose={() => setIsDialogOpen(false)}
  title="Confirm Action"
  action1Text="Cancel"
  action1Function={() => setIsDialogOpen(false)}
  action2Text="Confirm"
  action2Function={handleConfirm}
  action2Variant="danger"
>
  <p>Are you sure you want to perform this action?</p>
</Dialog>
```

## Usage in Astro

### For Static Components
```astro
---
import { Button, Title, PageContainer } from '@/components/shared';
---

<PageContainer>
  <Title as="h1">Welcome</Title>
  <Button variant="primary">Get Started</Button>
</PageContainer>
```

### For Interactive Components
```astro
---
import { Input, Dialog } from '@/components/shared';
---

<div>
  <!-- Use client: directive for interactivity -->
  <Input 
    client:load
    name="search"
    placeholder="Search..."
  />
  
  <!-- Or client:visible for performance -->
  <Dialog 
    client:visible
    isOpen={false}
    title="Settings"
  >
    <p>Dialog content here</p>
  </Dialog>
</div>
```

## Performance Optimizations

1. **Minimal React Usage**: Only interactive components use React
2. **Semantic HTML**: All components use proper semantic elements
3. **Accessibility**: ARIA attributes and keyboard navigation
4. **Modern CSS**: Uses logical properties and custom properties
5. **Tree Shaking**: Only import what you need
6. **SSR-Friendly**: Static components render server-side

## Best Practices

1. **Use static components when possible** for better performance
2. **Apply client directives strategically** (client:load, client:visible, client:idle)
3. **Leverage the color palette** with CSS custom properties
4. **Follow semantic HTML patterns** for accessibility
5. **Use TypeScript** for better developer experience

## Styling

Components use Tailwind CSS with the custom color palette. You can extend styles using:

```astro
<Button class="custom-button-styles">Text</Button>
```

Or create custom CSS:

```css
.custom-button-styles {
  @apply bg-gradient-to-r from-[#2A3729] to-[#265143];
}
```
