const toogle = document.querySelector('#menu');
const navLink = document.querySelector('#navegacion');


toogle.addEventListener('click', function () {
    if (toogle.classList.contains('añadir')) {
        navLink.classList.remove('ocultar')
        toogle.classList.remove('añadir')
        return
    }
    navLink.classList.add('ocultar')
    toogle.classList.add('añadir')


})
