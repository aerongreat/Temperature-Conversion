const inputNum = document.getElementById("inputNum");
const fahrenheit = document.getElementById("fahrenheit");
const celsius = document.getElementById("celsius");
const result = document.getElementById("result");
let temp;

function toConvert() {
  if (fahrenheit.checked){
    temp = Number(inputNum.value);
    temp = temp * 9 / 5 + 32;
    result.innerHTML = `${Math.round(temp)}°F`;
  } else if 
  (celsius.checked) {
    temp = Number(inputNum.value);
    temp = (temp - 32) * (5/9);
    result.innerHTML = `${Math.round(temp)}°C`;
  }else {
    result.innerHTML = 'Please select a temperature type';
  }
} 