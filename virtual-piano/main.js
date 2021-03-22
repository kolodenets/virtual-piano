const piano = document.querySelector('.piano');
const pianoКey = document.querySelectorAll('.piano-key');
const buttonNotes = document.querySelector('.btn-notes');
const buttonLetters = document.querySelector('.btn-letters');
let isPressed = false;

piano.addEventListener('mousedown', (event) => {
  isPressed = true;
})
piano.addEventListener('mouseover', (event) => {
  if(isPressed === true) {
    console.log(isPressed, 'hello')
    if(event.target.classList.contains('piano-key')) {
      console.log(isPressed, 'hello')
      const note = event.target.dataset.note;
      const src = `assets/audio/${note}.mp3`;
      playAudio(src);
      event.target.classList.add('active');   // добавляет transform: scale(0.96);
      event.target.classList.add('piano-key-active'); // не добавляет color: #00b4a4;
  }
  }
})


buttonLetters.addEventListener('click', (event) => {
  buttonLetters.classList.add('btn-active');
  buttonNotes.classList.remove('btn-active');
  pianoКey.forEach((key) => {
    key.classList.add('piano-key-letter');
    key.classList.remove('piano-key-note');
  })
});

buttonNotes.addEventListener('click', (event) => {
  buttonNotes.classList.add('btn-active');
  buttonLetters.classList.remove('btn-active');
  pianoКey.forEach((key) => {
    key.classList.add('piano-key-note');
    key.classList.add('piano-key-letter');
  })
});

// piano.addEventListener('mouseover', (event) => {
//   if(isPressed){
//     if(event.target.classList.contains('piano-key')) {
//         const note = event.target.dataset.note;
//         const src = `assets/audio/${note}.mp3`;
//         playAudio(src);
//         event.target.classList.add('active');   // добавляет transform: scale(0.96);
//         event.target.classList.add('piano-key-active'); // не добавляет color: #00b4a4;
//     }
//   }
      
//   });

function playAudio(src) {
    const audio = new Audio();
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
  }

function removeActive(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('active');
  this.classList.remove('piano-key-active');
}

window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.piano-key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    if(e.repeat) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('active');  // добавляет transform: scale(0.96);
    key.classList.add('piano-key-active')  // добавляет color: #00b4a4;
});

pianoКey.forEach(key => key.addEventListener('transitionend', removeActive));
pianoКey.forEach(key => key.addEventListener('mousedown', function () {
  key.classList.add('piano-key-active');
}));



document.querySelector('.fullscreen-open').addEventListener('click', toggleScreen);

function toggleScreen () {
   document.documentElement.requestFullscreen();
  if (document.fullscreenEnabled) {
    document.exitFullscreen();
  }
}

document.querySelector('.fullscreen-open').addEventListener('click', toggleSvg);

function toggleSvg() {
  if (!this.classList.contains('fullscreen-close')) {
    this.classList.add('fullscreen-close')
  }
  else if (this.classList.contains('fullscreen-close')) {
    this.classList.remove('fullscreen-close')
  }
}

