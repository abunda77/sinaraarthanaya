const fs = require("fs");
const path = require("path");

const pages = [
  "index.html",
  "about.html",
  "product.html",
  "contact.html",
  "terms.html",
  "privacy.html",
];

let ok = true;

for (const page of pages) {
  const html = fs.readFileSync(page, "utf8");
  const checks = [
    ["title", /<title>[^<]+<\/title>/i],
    ["meta description", /<meta name="description"/i],
    ["body page marker", /<body[^>]+data-page="/i],
    ["header", /<header class="site-header"/i],
    ["footer", /<footer class="site-footer"/i],
    ["script include", /<script src="js\/main\.js"/i],
    ["stylesheet include", /<link rel="stylesheet" href="css\/style\.css(?:\?[^"]*)?"/i],
  ];

  for (const [label, pattern] of checks) {
    if (!pattern.test(html)) {
      console.log(`${page}: missing ${label}`);
      ok = false;
    }
  }

  const refs = [...html.matchAll(/(?:src|href)="([^"]+)"/g)]
    .map((match) => match[1])
    .filter(
      (value) =>
        !value.startsWith("http") &&
        !value.startsWith("mailto:") &&
        !value.startsWith("#")
    );

  for (const ref of refs) {
    const cleanRef = ref.split("?")[0];
    if (cleanRef && !fs.existsSync(path.resolve(path.dirname(page), cleanRef))) {
      console.log(`${page}: missing ref ${cleanRef}`);
      ok = false;
    }
  }
}

const contactHtml = fs.readFileSync("contact.html", "utf8");
if (!/data-contact-form/.test(contactHtml)) {
  console.log("contact.html: missing data-contact-form");
  ok = false;
}

if (ok) {
  console.log("HTML verification passed for all pages.");
}

process.exit(ok ? 0 : 1);
