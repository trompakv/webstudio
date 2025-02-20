const openModalBtn = document.querySelector("[data-modal-open]");
const closeModalBtn = document.querySelector("[data-modal-close]");
const modal = document.querySelector("[data-modal]");

openModalBtn.addEventListener("click", toggleModal);
closeModalBtn.addEventListener("click", toggleModal);

function toggleModal() {
    if (modal.classList.contains("is-hidden")) {
        modal.classList.remove("is-hidden");
        modal.style.opacity = "1";
    } else {
        modal.style.opacity = "0";
        setTimeout(() => modal.classList.add("is-hidden"), 250);
    }
    document.body.classList.toggle("no-scroll");
}

const soundPlay = () => {
    const sounds = document.querySelectorAll(".sound");

    const sound = sounds[Math.floor(Math.random() * sounds.length)];

    sound.currentTime = 0;
    sound.play();
};
