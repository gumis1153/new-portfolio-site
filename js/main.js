const mobileBtn = document.querySelector('.mobile-nav-btn');

const elementsToMove = document.querySelectorAll(
  '#home header .mobile-nav-btn div'
);

mobileBtn.addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('active');

  elementsToMove.forEach((i) => {
    i.classList.toggle('active');
  });
});

const navBtns = Array.prototype.slice.call(document.querySelectorAll('button'));

const moveToSection = (section) => {
  window.scroll({
    top: document.getElementById(section).offsetTop - 30,
    left: 0,
    behavior: 'smooth',
  });
  document.querySelector('nav').classList.remove('active');
  elementsToMove.forEach((i) => {
    i.classList.remove('active');
  });
};

navBtns.forEach((i) => {
  i.addEventListener('click', (e) => {
    const clickedBtn = e.target.value;

    switch (clickedBtn) {
      case 'about':
        moveToSection(clickedBtn);
        break;
      case 'skills':
        moveToSection(clickedBtn);
        break;
      case 'portfolio':
        moveToSection(clickedBtn);
        break;
      case 'hire-me':
        moveToSection(clickedBtn);
        break;
      case 'resume':
        console.log('dodaj cv');
        break;
      case 'submit':
        break;
    }
  });
});

const backArrow = document.getElementById('back-arrow');
window.addEventListener('scroll', () => {
  if (window.scrollY >= 100) {
    backArrow.style.opacity = '1';
    backArrow.style.zIndex = '9998';
  } else if (window.scrollY < 100) {
    backArrow.style.opacity = '0';
    backArrow.style.zIndex = '-1';
  }

  const aboutSection = document.querySelector('section#about');
  const skillsSection = document.querySelector('section#skills');
  const portfolioSection = document.querySelector('section#portfolio');
  const hireMeSection = document.querySelector('section#hire-me');
  const apperaAnimation = 'animation: appear-primary 1.2s ease;';

  let isAbout =
    window.scrollY >= aboutSection.offsetTop - window.innerHeight / 1.5;
  let isSkills =
    window.scrollY >= skillsSection.offsetTop - window.innerHeight / 1.5;
  let isPortfolio =
    window.scrollY >= portfolioSection.offsetTop - window.innerHeight / 1.5;
  let isHireMe =
    window.scrollY >= hireMeSection.offsetTop - window.innerHeight / 1.5;

  if (isAbout) {
    aboutSection.style = apperaAnimation;
    aboutSection.style.opacity = '1';
  }

  if (isSkills) {
    skillsSection.style = apperaAnimation;
    skillsSection.style.opacity = '1';
  }

  if (isPortfolio) {
    portfolioSection.style = apperaAnimation;
    portfolioSection.style.opacity = '1';
  }

  if (isHireMe) {
    hireMeSection.style = apperaAnimation;
    hireMeSection.style.opacity = '1';
  }
});

document.getElementById('back-arrow').addEventListener('click', (e) => {
  moveToSection(e.target.value);
});
