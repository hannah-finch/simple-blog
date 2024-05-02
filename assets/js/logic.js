const root = document.querySelector (':root');
const toggle = document.getElementById ('toggle');
const toggleImg = document.getElementById ('toggle-img')

// Dark mode
function dark() {
  root.style.setProperty ('--background', '#000000');
  root.style.setProperty ('--main', '#fcfcfc');
  toggleImg.src = ('./assets/images/icon_moon.png');
  toggleImg.alt = "Switch to light mode";
}

// Light mode
function light() {
  root.style.setProperty ('--background', '#fcfcfc');
  root.style.setProperty ('--main', '#000000');
  toggleImg.src = ('./assets/images/icon_sun.png');
  toggleImg.alt="Switch to dark mode";
}

// default to light mode
let mode = 'light';
light();

toggle.addEventListener('click', function() {
  if (mode === 'light') {
    mode = 'dark';
    dark();

  } else {
    mode = 'light';
    light();
  }
})