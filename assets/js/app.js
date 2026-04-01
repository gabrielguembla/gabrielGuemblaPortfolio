const hamburguerMenu = window.document.querySelector('.hamburguer-menu'); 
const offScreenMenu = window.document.querySelector('.off-screen-menu');

// hamburguerMenu.addEventL ('click', () => {

//     offScreenMenu.classList.toggle('active');

// })

hamburguerMenu.addEventListener('click', () => {
    offScreenMenu.classList.toggle('active');

})