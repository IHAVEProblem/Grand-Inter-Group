const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },

    480: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    640: {
      slidesPerView: 2,
    },
  },

  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

const navToggle = document.querySelector('.nav-toggle')
const navLinks = document.querySelector('.nav-links')
const links = document.querySelectorAll('.link')

navToggle.addEventListener('click', () => {
  const isOpened = navToggle.getAttribute('aria-expanded')

  navLinks.classList.toggle('show-links')
  if (isOpened === 'false') {
    navToggle.setAttribute('aria-expanded', 'true')
  } else {
    navToggle.setAttribute('aria-expanded', 'false')
  }
  links.forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show-links')
      navToggle.setAttribute('aria-expanded', 'false')
    })
  })
})
