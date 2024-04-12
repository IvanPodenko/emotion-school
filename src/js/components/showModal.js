const showModal = (message) => {
  const TIMER = 10000;
  const modal = document.querySelector(".js-modal");
  const modalContent = modal.querySelector(".js-modal-content");
  const modalClose = modal.querySelector(".js-modal-close");

  document.body.style.overflow = "hidden";
  modalContent.textContent = message;
  modal.style.opacity = 1;
  modal.style.visibility = "visible";

  setTimeout(() => {
    modal.style.opacity = 0;
    modal.style.visibility = "hidden";
    document.body.style.overflow = "auto";
  }, TIMER);

  modalClose.addEventListener("click", () => {
    modal.style.opacity = 0;
    modal.style.visibility = "hidden";
    document.body.style.overflow = "auto";
  })

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.opacity = 0;
      modal.style.visibility = "hidden";
      document.body.style.overflow = "auto";
    }
  })
}

export default showModal;
