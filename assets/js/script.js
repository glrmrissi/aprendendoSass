const body = document.body;

const HAMBURGER_ICON_ACTIVE = 'assets/imgs/ham2.svg';
const HAMBURGER_ICON_INACTIVE = 'assets/imgs/ham.svg';

function menuShow() {
    const hamburgerIcon = mobile.hamburgerIcon();
    const mobileNav = mobile.mobileNav();
    const mobileMenuList = mobile.mobileMenuList();
    
    const isActive = mobileMenuList.classList.toggle('active');
    mobileNav.classList.toggle('active', isActive);
    hamburgerIcon.src = isActive ? HAMBURGER_ICON_ACTIVE : HAMBURGER_ICON_INACTIVE;
    body.classList.toggle('no-scroll', isActive);
}

const mobile = {
    hamburgerIcon: () => document.getElementById('hamburguer-img'),
    mobileNav: () => document.getElementById('nav_mobile'),
    mobileMenuList: () => document.getElementById('listMobile')
}

let btn = document.getElementById('btnTop')

btn.addEventListener("click", function(){
    window.scrollTo(0, 0)
})

function ocultar() {
  if (window.scrollY < 10) {
      btn.style.visibility = "hidden";
      btn.style.opacity = "0";
  } else {
      btn.style.visibility = "visible";
      btn.style.opacity = "1";
  }
}

window.addEventListener("scroll", ocultar)