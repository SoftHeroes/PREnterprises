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
- **Claude Flow Integration**: AI swarm orchestration capabilities via `claude-flow.config.json`

### Key Technologies
- **Frontend**: HTML5, CSS3 (with custom properties), Bootstrap 4, jQuery
- **Form Handling**: EmailJS (service_id: 'MyGmail', template_id: 'connect')
- **Animations**: Animate.css, WaitMe overlay plugin
- **Carousel**: Owl Carousel for client testimonials
- **Icons**: FontAwesome
- **Typography**: Google Fonts (Montserrat)

## Commands and Development Tasks

### Testing and Validation
Since this is a static website with no build process:
- **Test locally**: Open HTML files directly in browser or use a local server
- **Form testing**: Verify EmailJS integration in `js/contact.js`
- **Responsive testing**: Check layouts across different screen sizes

### Claude Flow Commands
The project includes Claude Flow integration for AI-powered development assistance:
```bash
npx claude-flow swarm init --topology hierarchical  # Initialize swarm
npx claude-flow swarm status                        # Check swarm status
npx claude-flow task orchestrate "task description" # Run orchestrated tasks
```

## High-Level Architecture

### Contact Form System
The contact form (`js/contact.js`) implements:
1. Client-side validation for required fields
2. Email format validation using regex
3. WaitMe plugin for loading overlay during submission
4. EmailJS API integration with hardcoded credentials
5. Success/failure alerts to user

### Navigation System
The navigation (`js/main.js`) provides:
1. Smooth scrolling between page sections
2. Sticky navbar behavior on scroll
3. Bootstrap scrollspy integration
4. Back-to-top button functionality

### Product Display Architecture
Products are organized in image galleries with:
1. **Dana Products**: 9 transmission system images in `/img/dana-products/`
2. **Hydraulics Products**: 8 hydraulic component images in `/img/hydraulics-products/`
3. CSS Grid layouts with hover overlay effects showing product details

## CSS Design System

The main stylesheet (`css/style.css`) uses CSS custom properties for theming:
```css
--primary-red: #BD3136;  /* Brand color from logo */
--dark-red: #8B2428;     /* Hover states */
--light-red: #F5E6E7;    /* Light backgrounds */
```

## Important Business Context

### Company Details
- **GSTIN Numbers**: Present in footer and contact sections
- **Headquarters**: Gurugram, Haryana (Office Unit 642 Satya The Hive Sector 102)
- **Branch Office**: Bhopal, Madhya Pradesh
- **Key Partners**: Dana Off-Highway, HydraForce, Dantal Hydraulics

### Client Logos
Located in `/img/happy-clients/` - includes major ports, logistics companies, and manufacturers. These are displayed in a carousel on the homepage.

### Product Categories
1. **Dana Transmission Series**: TE17000, TE27000, TE30000, TE32000, HR24000, HR32000, HR36000, T12000
2. **Hydraulic Systems**: Cylinders, pumps, valves, motors, filters, hoses, fittings
3. **Material Handling**: Dock levelers, hand pallet trucks, lift tables

## File Modification Guidelines

When modifying this codebase:
- **HTML**: Maintain semantic structure, update both `index.html` and `TransmissionAxle.html` for consistency
- **CSS**: Use existing custom properties, maintain responsive breakpoints
- **JavaScript**: Maintain jQuery patterns, ensure EmailJS configuration remains intact
- **Images**: Add new product images to appropriate subdirectories, maintain naming conventions

## Deployment Considerations

This static website requires:
- No server-side processing or database
- EmailJS account for form submissions (credentials in `js/contact.js`)
- Any static hosting service (GitHub Pages, Netlify, traditional web hosting)
- All assets are self-contained within the repository