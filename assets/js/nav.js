const burger = document.getElementById('burger')
const ulList = document.getElementById('mobile-nav')
const links = document.querySelectorAll('.mobile-nav__nav-item')
const header = document.getElementById('header')

// burger.addEventListener('click', (e) => {
//   ulList.classList.toggle('open')
//   links.forEach((link) => {
//     link.classList.toggle('hide')
//   })
//   e.preventDefault()
// })

const openBurger = function (e) {
  e.preventDefault()
  // ulList.classList.toggle('open')
  // links.forEach((link) => {
  //   link.classList.toggle('hide')
  // })
  burger.classList.toggle('hide')
}

const closeBurger = function (e) {
  // e.preventDefault()
  burger.classList.toggle('hide')
}

ulList.forEach((link) => link.addEventListener('click', openBurger))
links.forEach((link) => link.addEventListener('click', closeBurger))
