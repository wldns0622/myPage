'use strict'


// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
})


// Handle scrolling when tapping on the navbar menu

// 1. 메뉴를 클릭시 이벤트를 생성한다
// 2. 해당 메뉴 textContent가 변수와 같을 때
// 3. 해당 변수의 위치로 스크롤링

const navbarMenu = document.querySelector('.navbar__menu');

navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (!link) {
    return;
  }
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView();
})

const contactBtn = document.querySelector('.home__contact');
contactBtn.addEventListener('click', (event) => {

});