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
