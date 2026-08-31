# Sketchy SVG Filters Guide

Global hand-drawn/rough-sketch SVG filters for your portfolio project.

## Available Filters

### 1. **Sketchy Light** (`filter-sketchy-light`)
Subtle hand-drawn effect with light distortion
```jsx
<div className="filter-sketchy-light">Content</div>
```

### 2. **Sketchy Medium** (`filter-sketchy-medium`)
Noticeable rough edges, good for a more prominent sketch look
```jsx
<div className="filter-sketchy-medium">Content</div>
```

### 3. **Sketchy Heavy** (`filter-sketchy-heavy`)
Very rough and distorted, extreme hand-drawn effect
```jsx
<div className="filter-sketchy-heavy">Content</div>
```

### 4. **Pencil Sketch** (`filter-pencil-sketch`)
Fine-grained pencil texture with subtle blur
```jsx
<div className="filter-pencil-sketch">Content</div>
```

### 5. **Paper Texture** (`filter-paper-texture`)
Adds depth and paper-like texture to elements
```jsx
<div className="filter-paper-texture">Content</div>
```

### 6. **Crayon** (`filter-crayon`)
Rough and grainy crayon/chalk effect
```jsx
<div className="filter-crayon">Content</div>
```

### 7. **Watercolor** (`filter-watercolor`)
Soft, flowing watercolor blend effect
```jsx
<div className="filter-watercolor">Content</div>
```

### 8. **Rough Edge** (`filter-rough-edge`)
Jagged borders and rough edges
```jsx
<div className="filter-rough-edge">Content</div>
```

### 9. **Ink Sketch** (`filter-ink-sketch`)
Bold ink lines with slight distortion
```jsx
<div className="filter-ink-sketch">Content</div>
```

### 10. **Marker** (`filter-marker`)
Smooth marker effect with slight blur
```jsx
<div className="filter-marker">Content</div>
```

## Combination Filters

Combine multiple effects for unique looks:

### Sketchy + Paper
```jsx
<div className="filter-sketchy-paper">Content</div>
```

### Pencil + Paper
```jsx
<div className="filter-pencil-paper">Content</div>
```

### Rough + Watercolor
```jsx
<div className="filter-rough-watercolor">Content</div>
```

## Usage Examples

### On Header Component
```jsx
<motion.div 
    className='bg-gray-100 rounded-3xl filter-sketchy-light'
>
    <NavsItem/>
</motion.div>
```

### On Buttons
```jsx
<button className="px-4 py-2 bg-blue-500 rounded filter-pencil-sketch">
    Click Me
</button>
```

### With Hover Effect
```jsx
<div className="filter-sketchy-hover">
    Hover over me for animation
</div>
```

### On Images
```jsx
<img 
    src="photo.jpg" 
    className="filter-watercolor" 
    alt="Watercolor effect"
/>
```

### On Cards/Containers
```jsx
<div className="card filter-sketchy-medium filter-paper-texture">
    <h2>Card Title</h2>
    <p>Card content with sketch effect</p>
</div>
```

## Custom Tailwind Integration

You can also use these with Tailwind's arbitrary values:

```jsx
<div className="[filter:url(#sketchy-light)]">Content</div>
```

## Tips

1. **Performance**: Use filters sparingly on animated elements as they can be CPU-intensive
2. **Stacking**: You can stack multiple filters but be mindful of performance
3. **Colors**: Filters work best with solid colors and simple shapes
4. **Borders**: Combine with Tailwind border utilities for enhanced effects
5. **Animation**: Add transitions for smooth filter changes on hover/interaction

## Browser Support

SVG filters are supported in all modern browsers:
- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Full support

## Customization

To adjust filter intensity, edit the filter parameters in `src/Components/SketchyFilters.jsx`:
- `baseFrequency`: Controls the texture granularity (higher = finer)
- `numOctaves`: Controls complexity (higher = more detailed)
- `scale`: Controls distortion amount (higher = more distorted)
