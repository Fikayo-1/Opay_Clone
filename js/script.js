// === Savings and Loan Navbar ===
const savingsNavLinks = document.querySelectorAll(".section-1-fn .nav-link");

savingsNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    savingsNavLinks.forEach((l) => l.classList.remove("active-link"));
    link.classList.add("active-link");
  });
});

// === Physical and Virtual Card Navbar ===
const cardNav = document.querySelector(".section-1-cd .nav");
if (cardNav) {
  cardNav.addEventListener("click", function (e) {
    const link = e.target.closest(".nav-link");
    if (!link || !cardNav.contains(link)) return;

    e.preventDefault();
    cardNav
      .querySelectorAll(".nav-link")
      .forEach((l) => l.classList.remove("active-link"));
    link.classList.add("active-link");
  });
}

(function () {
  const modal = document.getElementById("floatingModal");
  if (!modal) return;

  let dragging = false;
  let offsetX = 0, offsetY = 0;
  let modalW = 0, modalH = 0;

  function clamp(v, min, max) {
    return Math.min(Math.max(v, min), max);
  }

  // Handle drag start (mouse or touch)
  modal.addEventListener("pointerdown", (e) => {
    e.preventDefault();

    const rect = modal.getBoundingClientRect();
    modal.style.position = "fixed";
    modal.style.left = rect.left + "px";
    modal.style.top = rect.top + "px";
    modal.style.bottom = "auto";
    modal.style.right = "auto";
    modal.style.transition = "none";

    modalW = rect.width;
    modalH = rect.height;
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    dragging = true;
    modal.classList.add("dragging");
    modal.setPointerCapture?.(e.pointerId);
  });

  // Handle dragging
  document.addEventListener("pointermove", (e) => {
    if (!dragging) return;
    e.preventDefault();

    const maxX = window.innerWidth - modalW;
    const maxY = window.innerHeight - modalH;

    const newLeft = clamp(e.clientX - offsetX, 0, maxX);
    const newTop = clamp(e.clientY - offsetY, 0, maxY);

    modal.style.left = newLeft + "px";
    modal.style.top = newTop + "px";
  }, { passive: false });

  // Handle drag end
  document.addEventListener("pointerup", (e) => {
    if (!dragging) return;
    dragging = false;
    modal.classList.remove("dragging");
    modal.style.transition = "0.12s ease";
    modal.releasePointerCapture?.(e.pointerId);
  });

  // Optional: keep modal inside visible area after resize/orientation change
  window.addEventListener("resize", () => {
    const rect = modal.getBoundingClientRect();
    const maxX = window.innerWidth - modalW;
    const maxY = window.innerHeight - modalH;
    modal.style.left = clamp(rect.left, 0, maxX) + "px";
    modal.style.top = clamp(rect.top, 0, maxY) + "px";
  });
})();
