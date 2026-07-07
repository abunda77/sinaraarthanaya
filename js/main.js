/* ============================================================
   SINARA ARTHA NAYA — main.js
   Struktur: loadPartials → setup functions → DOMContentLoaded
   ============================================================ */

const WHATSAPP_BASE =
  "https://wa.me/628133308688?text=Halo%20KOPERASI%20SINARA%20ARTHA%20NAYA%2C%20saya%20ingin%20bertanya%20tentang%20produk%20simpanan.";

/* ----------------------------------------------------------
   1. HEADER — scroll shadow & mobile menu
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
   INIT — jalankan semua setup
   ---------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  setupHeader();
  setupActiveNav();
  setupWhatsappLinks();
  setupContactForm();
  setupSmoothAnchors();
});
