'use strict'
// Global Variable
const navbar = document.querySelector('#navbar');
const navbarMenu = document.querySelector('.navbar__menu');
const navbarHeight = navbar.getBoundingClientRect().height;
const home = document.querySelector('#home');
const homeContainer = document.querySelector('#home>.section__container');
const homeHeight = home.getBoundingClientRect().height;
const arrowUp = document.querySelector('.arrow-up');
const workCategories = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projectList = document.querySelectorAll('.project');

// Make navbar transparent when it is on the top
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


navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (!link) {
    return;
  }
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView();
});



// Make home slowly fade to transparent as the window scrolls down
document.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  let opacity;
  if (currentScroll < homeHeight) {
    opacity = 1 - currentScroll / homeHeight;
  } else {
    opacity = 0;
  }
  homeContainer.style.opacity = opacity;
});

// Show "arrow up" button when scrolling down
// 클래스 주는것과 삭제하는것으로 구현
document.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  let opacity = (homeHeight < currentScroll) ? 1 : 0;
  arrowUp.style.opacity = opacity;
});

// Projects
// All 버튼을 클릭한면.
// 모든데이터를 display:block;
// front -> data-work : front 만 display:block; 나머지는 display:none;
workCategories.addEventListener('click', (event) => {
  const dataWork = event.target.dataset.work || event.target.parentNode.dataset.work;
  if (!dataWork) {
    return;
  }
  projectContainer.classList.add('anim-out');
  setTimeout(() => {
    projectList.forEach((project) => {
      if (dataWork === 'all' || project.dataset.work === dataWork) {
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('anim-out');
  }, 300);
});