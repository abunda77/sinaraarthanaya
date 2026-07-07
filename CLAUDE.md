# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development Server
Since local files use absolute or relative paths with potential CORS policies if dynamic resource fetch is used in the future, running a local HTTP server is recommended:
* Python 3 server: `python -m http.server 8000` (Access at `http://localhost:8000`)
* Node.js server: `npx serve` (Access at `http://localhost:3000`)

### Verification & Testing
* Run site verification: `node scripts/verify-site.js`
  *Note: This script performs structural checks on the HTML files, validating page titles, descriptions, page markers, CSS/JS references, and local asset paths on disk. It flags missing static header/footer tags or invalid local refs, and expects a `data-contact-form` attribute in `contact.html`.*

---

## High-Level Architecture

### Core Tech Stack
* Pure static website using **HTML5**, **CSS3 (CSS Custom Properties)**, and **Vanilla JavaScript**.
* Code runs directly in the browser without any build, compilation, or bundler steps.

### Layout & Page Structure
* **Static Replication**: The header and footer components are hardcoded statically within each page (`index.html`, `about.html`, `product.html`, `contact.html`, `terms.html`, `privacy.html`).
* **Partials as Source Templates**: `partials/header.html` and `partials/footer.html` act as source templates. When modifying the header or footer, the change **must** be applied to these template files and synchronized across all individual HTML pages in the root directory.
* **Active Navigation**: Current menu highlighting is handled at runtime by `js/main.js` matching the body's `data-page` attribute with each anchor element's `data-page-link` attribute and setting `aria-current="page"`.

### Form Submission & Communication (WhatsApp Integration)
* **WhatsApp Redirect**: CTA buttons redirect to WhatsApp using the base URL `https://wa.me/628133308688?text=...`.
* **Contact Form Submission**: `contact.html` has a form validated synchronously in `js/main.js`. Upon submission, `window.open` launches the WhatsApp message draft *synchronously* directly inside the submit event listener (not in delays, timeouts, or async callbacks) to avoid triggering browser popup blockers on mobile devices.

### UI & Styling Guidelines
* Main stylesheet: `css/style.css`
* Layout approach: Mobile-first responsive grid and flex layouts.
* Color system variables defined globally in `:root`:
  * Primary Green: `--color-primary` (`#0E7A3B`), `--color-primary-dark` (`#075C2B`)
  * Secondary Yellow: `--color-secondary` (`#F4C430`), `--color-secondary-soft` (`#FFF3C4`)
  * Neutral Dark/Gray: `--color-dark` (`#111111`), `--color-gray` (`#666666`), `--color-light-gray` (`#F5F7F6`)
* Google Maps: External address link query should be used instead of empty placeholder iframes.
