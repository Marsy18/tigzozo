
const body = document.body
const themeButton = document.getElementById('mode')

themeButton.addEventListener('click', () => {
  body.classList.toggle('dark-theme')
})