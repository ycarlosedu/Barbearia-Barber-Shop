
const modalWrapper = document.querySelector('.modal-wrapper')
const buttonOpen = document.querySelector('.modalButton')
const buttonClose = document.getElementById('buttonClose')
const agendado = document.querySelector(".agendado")

function open(){
    modalWrapper.classList.add("active");
}

function close(){
    modalWrapper.classList.remove("active");
}

function agendar(){
    alert('Seu horário foi agendado com sucesso!')
}

buttonOpen.addEventListener('click',open);
buttonClose.addEventListener('click',close);
agendado.addEventListener('click',agendar);