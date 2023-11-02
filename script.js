AOS.init();

const dialog = document.querySelector('dialog');
const header = document.querySelector('header');

function openModal() {
    dialog.style.visibility = 'visible';
    dialog.showModal();
}

function closeModal() {
    dialog.close();
    dialog.setAttribute('style', 'visibility: hidden');
}