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

// === Modal Event Listener ===
const modal = document.querySelector(".floating-modal");

let isDragging = false;
let offsetX, offsetY;

if (modal) {
  modal.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - modal.getBoundingClientRect().left;
    offsetY = e.clientY - modal.getBoundingClientRect().top;

    // Change to absolute positioning within viewport during drag
    modal.style.transition = "none";
    modal.style.position = "fixed";
  });

  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      modal.style.left = `${e.clientX - offsetX}px`;
      modal.style.top = `${e.clientY - offsetY}px`;
      modal.style.bottom = "auto";
      modal.style.right = "auto";
    }
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    modal.style.transition = "0.2s ease"; // optional smoothness
  });
}
