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

window.addEventListener("scroll", function() {
    const parallaxElements = document.querySelectorAll(".grid_slide");
    const scrollPosition = window.pageYOffset;
  
    parallaxElements.forEach((el) => {
      const speed = el.getAttribute("data-speed");
      const yPos = -(scrollPosition * speed / 100);
      el.style.transform = `translateY(${yPos}px)`;
    });
  });

const cardImg = document.getElementById('cardImgAceleration');
const urlsOfCard = ["assets/imgsAclr/img-2.webp", "assets/imgsAclr/img-3.jpg", "assets/imgsAclr/img-4.jpg","assets/imgsAclr/img-5.jpg", "assets/imgsAclr/img-1.jpg"];
let timeoutId;
let aceleration = 0.7; // Aceleração aplicada a cada IntervalTime 🎪
let intervalTime = 400; // Tempo inicial de intervalo 🦺

cardImg.addEventListener("mouseenter", () => {
    let i = 0;

    const changeImage = () => {
        cardImg.src = urlsOfCard[i];
        i = (i + 1) % urlsOfCard.length;
        
        intervalTime = Math.max(100, intervalTime * aceleration); // Aceleração com tempo mínimo de 100ms 🥾
        timeoutId = setTimeout(changeImage, intervalTime); // Aplica um setTimeout para não bugar como o setInterval 🦸‍♀️
    };

    changeImage();
});

cardImg.addEventListener("mouseleave", () => {  // Não tem oque colocar aqui, se você é programador vai saber oque isso está fazendo ༼ つ ◕_◕ ༽つ
    clearTimeout(timeoutId);
    intervalTime = 400;
});