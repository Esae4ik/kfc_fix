document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const burger = document.querySelector(".burger");
  if (burger) burger.addEventListener("click", () => header.classList.toggle("mobile-open"));

  const filterButtons = document.querySelectorAll(".filter-btn");
  const menuCards = document.querySelectorAll(".menu-card");
  filterButtons.forEach(btn => btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const category = btn.dataset.filter;
    menuCards.forEach(card => {
      card.classList.toggle("hidden", category !== "all" && card.dataset.category !== category);
    });
  }));

  document.querySelectorAll(".add-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const old = btn.textContent;
      btn.textContent = "Добавлено ✓";
      btn.style.background = "#16803b";
      setTimeout(() => {
        btn.textContent = old;
        btn.style.background = "";
      }, 1200);
    });
  });

  const form = document.querySelector("#contactForm");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      document.querySelector("#formMessage").textContent = "Спасибо! Сообщение принято.";
      form.reset();
    });
  }
});