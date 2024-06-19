const sidebar = document.getElementById("mySidebar");
const sidebarBtn = document.getElementById("sideButton");
const sideOpen = document.getElementById("openSide");

function openSide(){
    sidebar.style.display = 'flex';
}

function closeSide(){
    sidebar.style.display = 'none';
}

//Modal

const button = document.querySelector("button");
const modal = document.querySelector("dialog");
const buttonClose = document.querySelector("dialog button");

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.showModal();
    } else {
        console.error('Modal não encontrado:', modalId);
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.close();
    } else {
        console.error('Modal não encontrado:', modalId);
    }
}
