/* ============================================================
   SINARA ARTHA NAYA — main.js
   Struktur: loadPartials → setup functions → DOMContentLoaded
   ============================================================ */

const WHATSAPP_BASE =
  "https://wa.me/628133308688?text=Halo%20KOPERASI%20SINARA%20ARTHA%20NAYA%2C%20saya%20ingin%20bertanya%20tentang%20produk%20simpanan.";

/* ----------------------------------------------------------
   INLINE PARTIALS (fallback jika fetch gagal, e.g. file://)
   ---------------------------------------------------------- */
const HEADER_HTML = `
<header class="site-header">
  <div class="container">
    <div class="nav-shell">
      <a class="brand" href="index.html" aria-label="Beranda KOPERASI SINARA ARTHA NAYA">
        <img class="brand-mark" src="assets/logo/logo.png" alt="Logo SINARA ARTHA NAYA">
        <span class="brand-copy">
          <span class="brand-name">SINARA ARTHA NAYA</span>
          <span class="brand-legal">Koperasi simpanan untuk kebutuhan finansial terencana</span>
        </span>
      </a>
      <nav class="nav-menu" aria-label="Navigasi utama">
        <a class="nav-link" data-page-link="home" href="index.html">Home</a>
        <a class="nav-link" data-page-link="about" href="about.html">About</a>
        <a class="nav-link" data-page-link="product" href="product.html">Product</a>
        <a class="nav-link" data-page-link="contact" href="contact.html">Contact Us</a>
        <a class="nav-link" data-page-link="terms" href="terms.html">Terms</a>
        <a class="nav-link" data-page-link="privacy" href="privacy.html">Privacy</a>
      </nav>
      <div class="nav-actions">
        <a class="btn btn-dark" data-default-whatsapp href="#">Hubungi Kami</a>
        <button class="menu-toggle" data-menu-toggle aria-expanded="false" aria-label="Buka menu navigasi">
          <span class="menu-toggle-bar"></span>
          <span class="menu-toggle-bar"></span>
          <span class="menu-toggle-bar"></span>
        </button>
      </div>
    </div>
    <div class="mobile-panel" data-mobile-panel>
      <div class="mobile-panel-inner">
        <nav class="mobile-nav" aria-label="Navigasi mobile">
          <a class="nav-link" data-page-link="home" href="index.html">Home</a>
          <a class="nav-link" data-page-link="about" href="about.html">About</a>
          <a class="nav-link" data-page-link="product" href="product.html">Product</a>
          <a class="nav-link" data-page-link="contact" href="contact.html">Contact Us</a>
          <a class="nav-link" data-page-link="terms" href="terms.html">Terms</a>
          <a class="nav-link" data-page-link="privacy" href="privacy.html">Privacy</a>
          <a class="btn btn-dark mobile-cta" data-default-whatsapp href="#">Hubungi via WhatsApp</a>
        </nav>
      </div>
    </div>
  </div>
</header>`;

const FOOTER_HTML = `
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <div class="footer-brand">
          <img class="brand-mark" src="assets/logo/logo.png" alt="Logo SINARA ARTHA NAYA">
          <div>
            <div class="brand-name" style="color:#facc15;">SINARA ARTHA NAYA</div>
            <div class="brand-legal" style="color:rgba(255,255,255,0.72);">Company profile koperasi simpanan</div>
          </div>
        </div>
        <p>KOPERASI SINARA ARTHA NAYA hadir sebagai mitra layanan simpanan yang aman, jelas, dan mudah dihubungi.</p>
      </div>
      <div>
        <h3 class="footer-title">Navigasi</h3>
        <div class="footer-nav">
          <a href="index.html">Home</a>
          <a href="about.html">About</a>
          <a href="product.html">Product</a>
        </div>
      </div>
      <div>
        <h3 class="footer-title">Informasi</h3>
        <div class="footer-nav">
          <a href="contact.html">Contact Us</a>
          <a href="terms.html">Terms</a>
          <a href="privacy.html">Privacy</a>
        </div>
      </div>
      <div>
        <h3 class="footer-title">Kontak</h3>
        <div class="footer-contact">
          <span>Jl. Komplek ruko Sesetan Agung No.16 S, Sesetan, Denpasar Selatan, Kota Denpasar, Bali 80223</span>
          <a href="https://wa.me/628133308688">0813-3308-688</a>
          <a href="mailto:cs@sinaraarthanaya.com">cs@sinaraarthanaya.com</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; 2026 KOPERASI SINARA ARTHA NAYA. All rights reserved.</span>
      <span>Denpasar, Bali</span>
    </div>
  </div>
</footer>`;

/* ----------------------------------------------------------
   1. PARTIALS LOADER
   Fetch partials/header.html dan partials/footer.html.
   Jika fetch gagal (file:// protocol), gunakan fallback
   inline HTML agar tetap berfungsi di semua environment.
   ---------------------------------------------------------- */
function injectHTML(placeholder, html) {
  const temp = document.createElement("div");
  temp.innerHTML = html.trim();
  placeholder.replaceWith(...temp.childNodes);
}

async function loadPartials() {
  const headerPlaceholder = document.getElementById("site-header-placeholder");
  const footerPlaceholder = document.getElementById("site-footer-placeholder");

  const loadPartial = async (placeholder, url, fallbackHtml) => {
    if (!placeholder) return;
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const html = await response.text();
      injectHTML(placeholder, html);
    } catch {
      // Fallback: gunakan inline HTML (e.g. file:// protocol)
      injectHTML(placeholder, fallbackHtml);
    }
  };

  await Promise.all([
    loadPartial(headerPlaceholder, "partials/header.html", HEADER_HTML),
    loadPartial(footerPlaceholder, "partials/footer.html", FOOTER_HTML),
  ]);
}


/* ----------------------------------------------------------
   2. HEADER — scroll shadow & mobile menu
   ---------------------------------------------------------- */
function setupHeader() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector("[data-menu-toggle]");
  const mobilePanel = document.querySelector("[data-mobile-panel]");

  if (!header) return;

  const handleScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  handleScroll();
  window.addEventListener("scroll", handleScroll, { passive: true });

  if (toggle && mobilePanel) {
    toggle.addEventListener("click", () => {
      const isOpen = mobilePanel.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      document.body.classList.toggle("no-scroll", isOpen);
    });

    // Tutup menu saat klik link di dalam mobile nav
    mobilePanel.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobilePanel.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("no-scroll");
      });
    });

    // Tutup dengan ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && mobilePanel.classList.contains("is-open")) {
        mobilePanel.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("no-scroll");
        toggle.focus();
      }
    });
  }
}

/* ----------------------------------------------------------
   3. ACTIVE NAV — tandai link aktif berdasarkan data-page
   ---------------------------------------------------------- */
function setupActiveNav() {
  const currentPage = document.body.dataset.page;
  if (!currentPage) return;

  document.querySelectorAll("[data-page-link]").forEach((link) => {
    if (link.dataset.pageLink === currentPage) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

/* ----------------------------------------------------------
   4. WHATSAPP DEFAULT LINKS
   ---------------------------------------------------------- */
function setupWhatsappLinks() {
  document.querySelectorAll("[data-default-whatsapp]").forEach((link) => {
    link.setAttribute("href", WHATSAPP_BASE);
  });
}

/* ----------------------------------------------------------
   5. CONTACT FORM → WhatsApp
   ---------------------------------------------------------- */
function setupContactForm() {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;

  const errorBox = form.querySelector("[data-form-error]");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name    = String(formData.get("name")    || "").trim();
    const phone   = String(formData.get("phone")   || "").trim();
    const email   = String(formData.get("email")   || "").trim();
    const product = String(formData.get("product") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const errors = [];
    if (!name)    errors.push("Nama lengkap wajib diisi.");
    if (!phone)   errors.push("Nomor WhatsApp wajib diisi.");
    if (!email)   errors.push("Email wajib diisi.");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
                  errors.push("Format email belum valid.");
    if (!product) errors.push("Silakan pilih produk.");
    if (!message) errors.push("Pesan wajib diisi.");

    if (errors.length > 0) {
      if (errorBox) errorBox.textContent = errors.join(" ");
      return;
    }

    if (errorBox) errorBox.textContent = "";

    const lines = [
      "Halo KOPERASI SINARA ARTHA NAYA,",
      "",
      "Saya ingin bertanya tentang produk simpanan.",
      "",
      `Nama: ${name}`,
      `Nomor WhatsApp: ${phone}`,
      `Email: ${email}`,
      `Produk: ${product}`,
      `Pesan: ${message}`,
    ];

    const url = `https://wa.me/628133308688?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener");
  });
}

/* ----------------------------------------------------------
   6. SMOOTH ANCHORS
   ---------------------------------------------------------- */
function setupSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const target = document.querySelector(targetId);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

/* ----------------------------------------------------------
   INIT — muat partials dulu, lalu jalankan semua setup
   ---------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", async () => {
  await loadPartials();      // tunggu header & footer ter-inject

  setupHeader();
  setupActiveNav();
  setupWhatsappLinks();
  setupContactForm();
  setupSmoothAnchors();
});
