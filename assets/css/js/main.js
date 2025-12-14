(() => {
  // Footer year
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());

  // Mobile nav
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.getElementById("navMenu");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // close on outside click
    document.addEventListener("click", (e) => {
      if (!menu.classList.contains("open")) return;
      const t = e.target;
      if (t instanceof Element) {
        if (!menu.contains(t) && !toggle.contains(t)) {
          menu.classList.remove("open");
          toggle.setAttribute("aria-expanded", "false");
        }
      }
    });
  }

  // Formspree-friendly UX message
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  if (form && status) {
    form.addEventListener("submit", () => {
      status.className = "form-status";
      status.textContent = "Sending…";
    });
  }
})();
