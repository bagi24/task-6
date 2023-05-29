const modal = document.getElementById("modal");
const openModal = document.getElementById("openModalBtn");
const closeModal = document.getElementById("closeModalBtn");

const handleOpenModal = () => {
  modal.style.display = "block";
};

const handleCloseModal = () => {
  modal.style.display = "none";
};

openModal.addEventListener("click", handleOpenModal);

closeModal.addEventListener("click", handleCloseModal);
