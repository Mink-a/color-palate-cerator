// Import stylesheets
import './style.css';

// Write Javascript code!

const inputColor = document.querySelector('input');
const getColorSchemeButton = document.querySelector('button');
const plates = document.querySelectorAll('.color--color');
const selectMode = document.getElementById('mode');

const DEFAULT_COLORS = ['#F55A5A', '#2B283A', '#FBF3AB', '#AAD1B6', '#A626D3'];

function renderPlates(colorsArray) {
  plates.forEach((item, i) => {
    item.style.backgroundColor = `${colorsArray[i]}`;
    item.innerHTML = `<span class="color--hex">${colorsArray[i]}</span>`;
  });
}

renderPlates(DEFAULT_COLORS);

getColorSchemeButton.addEventListener('click', () => {
  let mode = selectMode.value;
  // console.log(mode);
  let colorsArr = [];
  const hex = inputColor.value.slice(1);
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}&format=json`
  )
    .then((res) => res.json())
    .then((data) => {
      data.colors.map((item) => colorsArr.push(item.hex.value));
      renderPlates(colorsArr);
    });
});
