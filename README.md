# National Service Scheme (NSS) - Mumbai University Cell Website

A responsive, static web application built for the National Service Scheme (Mumbai University Cell). This platform serves to provide students and volunteers with the latest updates, circulars, event galleries, and resources regarding NSS community service activities.

## 🛠 Technologies Used
* **HTML5** - Semantic structure and content.
* **CSS3** - Custom styling and responsive design.
* **Vanilla JavaScript** - DOM manipulation, component injection (Header/Footer), and event handling.
* **Bootstrap 5** - CSS framework for grid layouts, typography, and responsive components.

## 📂 Project Structure
* `index.html`, `about-nss.html`, etc. - Main static pages.
* `css/styles.css` - Global stylesheet containing theme colors, accessibility overrides, and layout fixes.
* `js/script.js` - Global JavaScript handling dynamic header/footer injection, accessibility toggles, site search, and strict scroll management.
* `images/` - Directory for all static visual assets, partner logos, and placeholders.
* `dist/` - The production build directory.

## 🚀 Recent Updates & Enhancements

### 1. Scroll Restoration & Viewport Initialization
* **Strict Top-Level Loading**: Implemented logic to completely override default browser scroll-restoration by setting `history.scrollRestoration = 'manual'`.
* **Unconditional Scroll Reset**: Added `beforeunload` and `load` event listeners to force `window.scrollTo(0, 0)` immediately upon page refresh, guaranteeing the site always anchors to the uppermost Social Media / Navbar section.
* **Hash Hijack Prevention**: Added automatic URL hash removal (`history.replaceState`) on load to prevent active anchor links (like `#main-content`) from forcing the viewport to jump down unexpectedly upon refresh.

### 2. Layout & UI Improvements
* **Similar Organisations Ribbon**: Refactored the layout logic for the bottom logo ribbon in the footer. Replaced fixed-width constraints with a fluid layout (`container-fluid`) and flexbox distribution (`flex: 1`), allowing all logos to flexibly stretch, compress, and evenly distribute across 100% of the screen width.
* **Logo Visuals**: Removed the grayscale (`filter: grayscale(100%)`) filters and hover transitions from the partner logos, allowing them to render in their default full-color state permanently.
* **Layout Shift Prevention (CLS)**: Assigned a pre-calculated responsive `min-height` to the `#app-header` in the CSS. This allocates exact blank space for the JavaScript-injected header before it finishes rendering, eliminating Cumulative Layout Shift (CLS) and secondary scroll-jumping.

## ⚙️ Build Instructions
The project uses a simple Node script to prepare static files for deployment.
To build the project into the `dist/` folder:

```bash
npm install
npm run build
```
