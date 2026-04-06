import './style.css'

// Mobile menu toggle
const menuBtn = document.getElementById('mobile-menu-btn')
const mobileMenu = document.getElementById('mobile-menu')

menuBtn?.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden')
  const icon = menuBtn.querySelector('i')
  icon.classList.toggle('fa-bars')
  icon.classList.toggle('fa-xmark')
})

// Close mobile menu on link click
mobileMenu?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden')
    const icon = menuBtn.querySelector('i')
    icon.classList.add('fa-bars')
    icon.classList.remove('fa-xmark')
  })
})

// Header scroll effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('header')
  if (window.scrollY > 50) {
    header.classList.add('shadow-md')
  } else {
    header.classList.remove('shadow-md')
  }
})
