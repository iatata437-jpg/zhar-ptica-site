const form = document.querySelector(".order-form");
const menuButton = document.querySelector(".mobile-menu");
const menuPanel = document.querySelector(".mobile-nav-panel");
const modal = document.querySelector("#order-modal");
const modalForm = document.querySelector(".modal-form");
const modalTriggers = document.querySelectorAll(".js-open-order-modal");

const closeMobileMenu = () => {
  document.body.classList.remove("menu-open");
  menuButton?.setAttribute("aria-expanded", "false");
  menuPanel?.setAttribute("aria-hidden", "true");
};

const openModal = () => {
  closeMobileMenu();
  modal?.classList.add("is-open");
  document.body.classList.add("modal-open");
  modal?.setAttribute("aria-hidden", "false");
  window.setTimeout(() => modal?.querySelector("input")?.focus(), 80);
};

const closeModal = () => {
  modal?.classList.remove("is-open");
  document.body.classList.remove("modal-open");
  modal?.setAttribute("aria-hidden", "true");
};

menuButton?.addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("menu-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuPanel?.setAttribute("aria-hidden", String(!isOpen));
});

menuPanel?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

modalTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    event.preventDefault();
    openModal();
  });
});

modal?.querySelectorAll("[data-modal-close]").forEach((button) => {
  button.addEventListener("click", closeModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
    closeMobileMenu();
  }
});

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  openModal();
});

modalForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = modalForm.querySelector("button");
  const originalText = button.textContent;

  button.textContent = "Заявка отправлена";
  button.disabled = true;

  window.setTimeout(() => {
    button.textContent = originalText;
    button.disabled = false;
    modalForm.reset();
    closeModal();
  }, 1400);
});
