# Amble Font Implementation Guide

## Overview
The institutional Amble font has been successfully implemented across the entire Alta Norte website. This document outlines how to use the various font weights and styles.

## Available Font Weights and Styles

### Font Weights
- **Light (300)**: `font-light` or `amble-light`
- **Regular (400)**: `font-normal` or `amble-regular` 
- **Bold (700)**: `font-bold` or `amble-bold`

### Font Styles
- **Normal**: Default style
- **Italic**: Add `italic` class
- **Condensed**: Use `amble-condensed` class for condensed light variant

## Tailwind CSS Classes

### Standard Tailwind Font Classes (now using Amble)
```html
<!-- Font families -->
<p class="font-sans">Text using Amble (default)</p>
<p class="font-serif">Text using Amble (headings)</p>
<p class="font-amble">Text explicitly using Amble</p>

<!-- Font weights -->
<p class="font-light">Light text (300)</p>
<p class="font-normal">Regular text (400)</p>
<p class="font-bold">Bold text (700)</p>

<!-- Font styles -->
<p class="italic">Italic text</p>
```

### Custom Amble Classes
```html
<!-- Optimized text rendering -->
<div class="amble-text">
  <h1 class="amble-bold">Bold Heading</h1>
  <p class="amble-regular">Regular paragraph text</p>
  <p class="amble-light">Light text for subtle content</p>
</div>

<!-- Condensed variant for special use cases -->
<h2 class="amble-condensed">Condensed Header</h2>
```

## Design Implementation Notes

### Typography Hierarchy
- **H1-H6**: Use `font-bold` (700 weight) for strong hierarchy
- **Body Text**: Use `font-normal` (400 weight) for optimal readability
- **Captions/Subtle Text**: Use `font-light` (300 weight)

### High Contrast Implementation
```html
<!-- White text on dark surfaces -->
<div class="bg-primary text-white">
  <h2 class="font-bold">White text on dark background</h2>
</div>

<!-- Black text on light backgrounds -->
<div class="bg-white text-primary-900">
  <h2 class="font-bold">Dark text on light background</h2>
</div>
```

### Responsive Typography Examples
```html
<!-- Responsive headings with proper contrast -->
<h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
  Main Heading
</h1>

<!-- Body text with generous spacing -->
<p class="text-lg md:text-xl font-normal leading-relaxed mb-8">
  Body paragraph with proper line height and spacing
</p>
```

## Performance Optimizations

### Font Loading
- Primary fonts (light, bold) are preloaded for faster rendering
- `font-display: swap` ensures text remains visible during font load
- Fallback font stack provides consistent experience

### Font Feature Settings
- Kerning enabled for better letter spacing
- Ligatures enabled for improved readability
- Optimized text rendering across browsers

## Usage Recommendations

### For Headings
```html
<h1 class="font-bold text-primary">Primary Heading</h1>
<h2 class="font-bold text-secondary">Secondary Heading</h2>
```

### For Body Content
```html
<p class="font-normal text-primary-800 leading-relaxed">
  Main body content with optimal readability
</p>
```

### For Emphasis
```html
<span class="font-bold text-primary">Bold emphasis</span>
<em class="italic font-normal">Italic emphasis</em>
```

### For Subtle Content
```html
<p class="font-light text-primary-600">
  Captions, metadata, or secondary information
</p>
```

## Migration Notes

- Google Fonts (Inter, Playfair Display) have been completely removed
- All existing font classes now use Amble
- Font weights have been optimized for the available Amble variants
- Enhanced text rendering for better visual quality

The Amble font family provides a clean, modern, and highly readable foundation for the Alta Norte brand identity while maintaining excellent performance and accessibility.
