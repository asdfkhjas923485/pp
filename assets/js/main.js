/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SWIPER POPULAR ===============*/
let swiperPopular = new Swiper(".popular__container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
})

/*=============== VALUE ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.value__accordion-item')

// 1. Select each item
accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.value__accordion-header')

    // 2. Select each header click
    accordionHeader.addEventListener('click', () =>{
        // 7. Create the tag
        const openItem = document.querySelector('.accordion-open')
        
        // 5. Call toggle item function
        toggleItem(item)

        // 8. Check if the class exists
        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})

// 3. Create a constant type function
const toggleItem = (item) =>{
    // 3.1 Create the tag
    const accordionContent = item.querySelector('.value__accordion-content')

    // 6. If there is another element that contains the class accordion-open remove its class
    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        // 4. Add the maximum height of the content
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }
}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})



sr.reveal(`.home__title, .popular__container, .subscribe__container, .footer__container`)
sr.reveal(`.home__description, .footer__info`, {delay: 500})
sr.reveal(`.home__search`, {delay: 600})
sr.reveal(`.home__value`, {delay: 700})
sr.reveal(`.home__images`, {delay: 800, origin: 'bottom'})
sr.reveal(`.logos__img`, {interval: 100})
sr.reveal(`.value__images, .contact__content`, {origin: 'left'})
sr.reveal(`.value__content, .contact__images`, {origin: 'right'})

//Navigation bar effects on scroll
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});


const serviceModals = document.querySelectorAll(".service-modal");
const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick){
    serviceModals[modalClick].classList.add("active");
}

learnmoreBtns.forEach((learnmoreBtn, i) => {
    learnmoreBtn.addEventListener("click", () => {
        modal(i);
    });
});

modalCloseBtns.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener("click", () => {
        serviceModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});

//Portfolio section - Modal
const portfolioModals = document.querySelectorAll(".porfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModal = function(modalClick){
    portfolioModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        portfolioModal(i);
    });
});

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener("click", () => {
        portfolioModals.forEach((portfolioModalView) => {
            portfolioModalView.classList.remove("active");
        });
    });
});

//Our clients - Swiper
var swiper = new Swiper(".client-swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
});

//Website dark/light theme
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
});


const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}
//Scroll to top button
const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window,addEventListener("scroll", function(){
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0;
});

//Navigation menu items active on page scroll
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
        }
        else{
            document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
        }
    });
});


//Responsive navigation menu toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        navigation.classList.remove("active");
    });
});

//Scroll reveal animations
//Common reveal options to create reveal animations
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 100
});

//Target elements, and specify options to create reveal animations
ScrollReveal().reveal('.home .info h2, .section-title-01, .section-title-02, .services-description', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.home .info h3, .home .info p, .about-info .btn', { delay: 600, origin: 'right' });
ScrollReveal().reveal('.home .info .btn', { delay: 700, origin: 'bottom' });
ScrollReveal().reveal('.media-icons, .media-icons p, .contact-left li', { delay: 500, origin: 'left', interval: 200 });
ScrollReveal().reveal('.home-img, .about-img', { delay: 500, origin: 'bottom' });
ScrollReveal().reveal('.about .description, .copy-right, .contact-right', { delay: 600, origin: 'right' });
ScrollReveal().reveal('.about .professional-list li', { delay: 500, origin: 'right', interval: 200 });
ScrollReveal().reveal('.skills-description, .service-description, .contact-card, .client-swiper, .contact-left h2', { delay: 700, origin: 'left' });
ScrollReveal().reveal('.experience-card, .service-card, .education, .portfolio .img-card', { delay: 800, origin: 'bottom', interval: 200 });
ScrollReveal().reveal('footer .group', { delay: 500, origin: 'top', interval: 200 });

