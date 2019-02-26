require('normalize.css/normalize.css');
require('./styles/index.scss');


const apiUrl = 'https://random.dog/woof.json'
const section = document.querySelector('section')
const imageContainer = document.querySelector('.img-container')
const innerContainer = document.querySelector('.inner-container')
const button = document.querySelector('.button-shuffle')

const getDog = () => {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => { 
      const includesMp4 = ~data.url.indexOf('mp4')
      const includesOgg = ~data.url.indexOf('ogg')
      const includesWebm = ~data.url.indexOf('webm')

    	if (includesMp4||includesOgg||includesWebm) {
        getDog()
      }
      
      innerContainer.style.backgroundImage = `url(${data.url})`
      // imageContainer.classList.add('fade-in')
    })
}

const getRandomHex = () => {
  const randomHex = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)

  section.style.backgroundImage = `linear-gradient(to bottom, ${randomHex}, #ffffff)`
  button.style.color = randomHex
}

button.addEventListener('click', () => {
  // imageContainer.classList.remove('fade-in')
  getDog()
  getRandomHex()
})


