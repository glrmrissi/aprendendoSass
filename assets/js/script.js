let listMobile = document.getElementById('listMobile')
let navMobile = document.getElementById('nav_mobile')
let imgHamburguer = document.getElementById('hamburguer-img')
const body = document.body;
function menuShow() {
    if(!listMobile.classList.contains('active')) {
        listMobile.classList.add('active')
        navMobile.classList.add('active')
        imgHamburguer.src = '/assets/imgs/ham2.svg'
        body.classList.add('no-scroll')
    } else {
        listMobile.classList.remove('active')
        navMobile.classList.remove('active')
        imgHamburguer.src = '/assets/imgs/ham.svg'
        body.classList.remove('no-scroll')
    }
}
