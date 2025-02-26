function nextTask() {
  document.querySelector(".container-1").style.display = "none";
  document.querySelector(".container-2").style.display = "block";
}
function goToPreviousPage() {
  document.querySelector(".container-2").style.display = "none";
  document.querySelector(".container-1").style.display = "block";
}
function goTo3Page() {
  document.querySelector(".container-2").style.display = "none";
  document.querySelector(".container-3").style.display = "block";
}
function goTo2Page() {
  document.querySelector(".container-3").style.display = "none";
  document.querySelector(".container-2").style.display = "block";
}

function calculateSum() {
      let a = parseInt(document.getElementById("a").value);
      let sum = 0;
      let steps = "";
      let sumSteps = "";
      let terms = [];

      for (let k = 1; k <= 10; k++) {
          let term = Math.pow(a + 1, k);
          sum += term;
          terms.push(term);
          steps += `Крок ${k}: (${a} + 1)^${k} = ${term}<br>`;
      }

      sumSteps = terms.join(" + ") + " = " + sum;

      document.getElementById("result").innerHTML = `${steps}<br><strong>Сума: ${sumSteps}</strong>`;
      document.getElementById("nextTask").style.display = "block";
}

let array = [];

const arrayContainer = document.getElementById("arrayContainer");


function addElement(value = ""){
  let div = document.createElement("div");
  div.classList.add("array-item");
  let input = document.createElement("input");
  input.value = value;
  input.onchange = updateArray;
  div.appendChild(input);
 
  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "x";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.onclick = function() {
    arrayContainer.removeChild(div);
    updateArray();
    };
  div.appendChild(deleteBtn);

  arrayContainer.insertBefore(div, arrayContainer.lastElementChild);
  updateArray();
}

function updateArray() {
  array = Array.from(arrayContainer.querySelectorAll("input"), input => Number(input.value));
}

function generateRandom() {
  arrayContainer.innerHTML = "";
  for (let i = 0; i < 10; i++) {
      addElement(Math.floor(Math.random() * 21) - 10);
  }
}

function analyzeArray() {
  updateArray();
  let zeroIndexes = [];
  array.forEach((num, index) => {
      if (num === 0) zeroIndexes.push(index + 1);
  });
  let resultText = `Кількість нулів: ${zeroIndexes.length}<br>`;
  resultText += zeroIndexes.length ? `Індекси: ${zeroIndexes.join(", ")}` : "Нулів немає";
  document.getElementById("arrayResult").innerHTML = resultText;
}



// Масиви
let numbers = [];

function updateArray3() {
document.getElementById("arrayOutput").textContent = `Масив: [${numbers.join(", ")}]`;
}

function addNumber() {
let num = parseFloat(document.getElementById("numberInput").value);
if (!isNaN(num)) {
  numbers.push(num);
  updateArray3();
}
}

function generateRandomArray() {
let size = 10;
numbers = Array.from({ length: size }, () => Math.floor(Math.random() * 100));
updateArray3();
}

function removeFirst() {
numbers.shift();
updateArray3();
}

function removeLast() {
numbers.pop();
updateArray3();
}

function sortArray() {
numbers.sort((a, b) => a - b);
updateArray3();
}

function shuffleArray() {
numbers.sort(() => Math.random() - 0.5);
updateArray3();
}

function reverseArray() {
numbers.reverse();
updateArray3();
}

function uniqueArray() {
numbers = [...new Set(numbers)];
updateArray3();
}

function minMaxArray() {
if (numbers.length === 0) return;
let min = Math.min(...numbers);
let max = Math.max(...numbers);
document.getElementById("resultOutput").textContent = `Min: ${min}, Max: ${max}`;
}

function findElement() {
let num = parseFloat(prompt("Введіть число для пошуку:"));
let index = numbers.indexOf(num);
document.getElementById("resultOutput").textContent = index !== -1 ? `Елемент знайдено на позиції ${index+1}` : "Елемент не знайдено";
}

function toStringArray() {
document.getElementById("resultOutput").textContent = `Рядок: ${numbers.join("")}`;
}