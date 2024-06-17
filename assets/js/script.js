let listMobile = document.getElementById('listMobile')
let navMobile = document.getElementById('nav_mobile')
function menuShow() {
    if(!listMobile.classList.contains('active')) {
        listMobile.classList.add('active')
        navMobile.classList.add('active')
    } else {
        listMobile.classList.remove('active')
        navMobile.classList.remove('active')
    }
}
