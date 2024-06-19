let listMobile = document.getElementById('listMobile')
let navMobile = document.getElementById('nav_mobile')
const body = document.body;
function menuShow() {
    if(!listMobile.classList.contains('active')) {
        listMobile.classList.add('active')
        navMobile.classList.add('active')
        body.classList.add('no-scroll')
    } else {
        listMobile.classList.remove('active')
        navMobile.classList.remove('active')
        body.classList.remove('no-scroll')
    }
}
