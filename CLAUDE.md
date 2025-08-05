# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

PR Enterprises is a static business website for an industrial equipment supplier specializing in Dana Off-Highway, HydraForce & Dantal Hydraulics genuine spare parts and aftermarket service support. The company was established in 2018 and serves the Off-Highway equipment segment with 72-hour dispatch assurance.

## Project Architecture

### Core Structure
- **Static HTML Website**: Multi-page website with responsive design
- **Main Pages**: 
  - `index.html` - Homepage with company information, services, products overview, and contact
  - `TransmissionAxle.html` - Dedicated product page for transmission and hydraulic systems
  - `Material.html` - Material handling/warehouse equipment page (referenced but not active)

### File Organization
```
/
├── index.html                 # Main homepage
├── TransmissionAxle.html     # Product-specific page
├── css/                      # Stylesheets
│   ├── style.css            # Main stylesheet with PR Enterprises branding
│   ├── bootstrap.min.css    # Bootstrap framework
│   ├── animate.css          # Animation library
│   └── [other CSS files]    # Various component styles
├── js/                       # JavaScript functionality
│   ├── main.js              # Core JS with smooth scrolling and navbar
│   ├── contact.js           # Contact form submission via EmailJS
│   ├── jquery-1.12.4.min.js # jQuery library
│   └── [vendor files]       # Third-party libraries
├── img/                      # Image assets
│   ├── dana-products/       # Dana product images
│   ├── hydraulics-products/ # Hydraulic system images
│   ├── happy-clients/       # Client logo gallery
│   ├── valued-partners/     # Partner logos
│   └── [other assets]      # General images and icons
└── plugins/                 # Third-party plugins
    └── waitMe_Overlay/      # Loading overlay plugin
```

## Design System & Branding

### Color Palette (CSS Variables)
```css
:root {
  --primary-red: #BD3136;    /* Logo red - primary brand color */
  --dark-red: #8B2428;      /* Darker shade for hover states */
  --light-red: #F5E6E7;     /* Light tint for backgrounds */
  --gray-900: #1A1A1A;      /* Dark text */
  --gray-700: #4A4A4A;      /* Medium text */
  --gray-500: #7A7A7A;      /* Light text */
  --gray-300: #DADADA;      /* Borders */
  --gray-100: #F5F5F5;      /* Light backgrounds */
}
```

### Key Design Elements
- **Industrial Theme**: Professional color scheme with red accent color from company logo
- **Product Cards**: Hover effects with overlay text for product galleries
- **Responsive Design**: Bootstrap-based grid system
- **Modern Contact Form**: Floating labels with custom styling
- **Client Carousel**: Owl Carousel for happy clients section

## Technical Stack

### Frontend Technologies
- **HTML5**: Semantic markup with accessibility considerations
- **CSS3**: Custom properties, flexbox, grid, animations
- **Bootstrap 4**: Responsive grid and components
- **jQuery**: DOM manipulation and event handling
- **FontAwesome**: Icon library
- **Google Fonts**: Montserrat font family

### Third-Party Integrations
- **EmailJS**: Contact form email delivery (configured with service_id: 'MyGmail')
- **Owl Carousel**: Client testimonials slider
- **WaitMe Plugin**: Loading overlays during form submission
- **Animate.css**: CSS animations

## Key Features

### Contact Form (`contact.js`)
- Client-side validation for name, email, and message
- EmailJS integration for form submissions
- Loading overlay during submission
- Email validation regex pattern
- Success/error messaging with alerts

### Navigation & UX (`main.js`)
- Smooth scrolling between sections
- Sticky navbar with scroll detection
- Bootstrap scrollspy for active nav states
- Back-to-top button functionality

### Product Galleries
- **Dana Products**: 9 product images with hover overlays
- **Hydraulics Products**: 8 hydraulic system images
- **Responsive Image Grid**: CSS Grid with hover effects

## Development Workflow

### Common Development Tasks

#### Updating Company Information
- Modify contact details in both HTML files
- Update GSTIN numbers in footer and contact sections
- Change office addresses in contact sections

#### Adding New Products
1. Add product images to appropriate `/img/` subfolder
2. Create new product card HTML structure
3. Follow existing pattern with hover overlays
4. Update navigation links if needed

#### Modifying Styles
- Edit `/css/style.css` for custom styling
- Use CSS custom properties for consistent theming
- Maintain responsive design principles

#### Testing Contact Form
- Verify EmailJS configuration in `contact.js`
- Test form validation functions
- Check email delivery to configured recipients

### File Modification Guidelines

#### HTML Files
- Maintain semantic structure and accessibility
- Use consistent class naming conventions
- Keep inline styles minimal (prefer CSS classes)
- Ensure mobile-responsive image sizing

#### CSS Files
- Follow existing CSS custom property usage
- Maintain consistent spacing and typography scales
- Use modern CSS features (flexbox, grid) where appropriate
- Keep vendor prefixes for older browser support

#### JavaScript Files
- Maintain jQuery compatibility
- Follow existing error handling patterns
- Keep form validation robust and user-friendly
- Test across different devices and browsers

## Content Management

### Key Business Information
- **Established**: 2018
- **Headquarters**: Gurugram, Haryana (Office Unit 642 Satya The Hive Sector 102)
- **Branch Office**: Bhopal, Madhya Pradesh
- **Specialization**: Dana Off-Highway, HydraForce & Dantal Hydraulics parts
- **USP**: 72-hour dispatch assurance, 1000+ satisfied clients

### Product Categories
1. **Dana Transmission Series**: TE17000, TE27000, TE30000, TE32000, HR24000, HR32000, HR36000, T12000
2. **Hydraulic Systems**: Cylinders, pumps, valves, motors, filters, hoses, fittings
3. **Material Handling**: Dock levelers, hand pallet trucks, lift tables

### Client Base
- Major ports (Adani, DP World, Gateway Distriparks)
- Logistics companies (CMA CMG, CONCOR, Navkar Corporation)
- Industrial manufacturers (JSW, Toyota Kirloskar, P&G)

## SEO & Performance Considerations

### Current Optimizations
- Semantic HTML structure
- Responsive images with proper alt attributes
- Fast loading with minimized assets
- Clean URL structure

### Potential Improvements
- Add meta descriptions and structured data
- Implement lazy loading for images
- Optimize image compression
- Add Open Graph tags for social sharing

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Internet Explorer 11+ (due to CSS custom properties)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Bootstrap 4 compatibility ensures broad device support

## Deployment Notes

This is a static website that can be deployed to any web server:
- No server-side processing required
- All assets are self-contained
- EmailJS handles form submissions via client-side JavaScript
- Suitable for hosting on GitHub Pages, Netlify, or traditional web hosting