const form = document.querySelector(".order-form");
const menuButton = document.querySelector(".mobile-menu");
const menuPanel = document.querySelector(".mobile-nav-panel");

menuButton?.addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("menu-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuPanel?.setAttribute("aria-hidden", String(!isOpen));
});

menuPanel?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("menu-open");
    menuButton?.setAttribute("aria-expanded", "false");
    menuPanel.setAttribute("aria-hidden", "true");
  });
});

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const button = form.querySelector("button");
  const originalText = button.textContent;
  button.textContent = "Заявка отправлена";
  button.disabled = true;

  window.setTimeout(() => {
    button.textContent = originalText;
    button.disabled = false;
    form.reset();
  }, 1800);
});
