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

// === Floating Modal Drag Script ===
const modal = document.getElementById("floatingModal");

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

modal.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - modal.getBoundingClientRect().left;
  offsetY = e.clientY - modal.getBoundingClientRect().top;
  modal.classList.add("dragging");
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  modal.style.left = `${e.clientX - offsetX}px`;
  modal.style.top = `${e.clientY - offsetY}px`;
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  modal.classList.remove("dragging");
});

// Prevent image drag interference
modal
  .querySelector("img")
  .addEventListener("dragstart", (e) => e.preventDefault());
