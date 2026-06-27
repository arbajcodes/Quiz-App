const questions = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
    answer: "New Delhi"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars"
  },
  {
    question: "Who is known as the Father of the Nation in India?",
    options: [
      "Jawaharlal Nehru",
      "Subhas Chandra Bose",
      "Mahatma Gandhi",
      "Bhagat Singh"
    ],
    answer: "Mahatma Gandhi"
  },
  {
    question: "Which is the largest ocean in the world?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Pacific Ocean",
      "Arctic Ocean"
    ],
    answer: "Pacific Ocean"
  },
  {
    question: "How many continents are there on Earth?",
    options: ["5", "6", "7", "8"],
    answer: "7"
  },
  {
    question: "Which is the national animal of India?",
    options: ["Lion", "Tiger", "Elephant", "Leopard"],
    answer: "Tiger"
  },
  {
    question: "Which is the longest river in the world?",
    options: [
      "Amazon River",
      "Nile River",
      "Ganga River",
      "Yangtze River"
    ],
    answer: "Nile River"
  },
  {
    question: "Who invented the telephone?",
    options: [
      "Thomas Edison",
      "Alexander Graham Bell",
      "Nikola Tesla",
      "Isaac Newton"
    ],
    answer: "Alexander Graham Bell"
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "South Korea", "Japan", "Thailand"],
    answer: "Japan"
  },
  {
    question: "What is the largest mammal in the world?",
    options: [
      "African Elephant",
      "Blue Whale",
      "Giraffe",
      "Hippopotamus"
    ],
    answer: "Blue Whale"
  }
];

// Selectors------------------------------------- 
const quesUi = document.querySelector("#que")
const quizSec = document.querySelector("#quiz-section")
const options = document.querySelector("#options")

let currentQuestion = 0
let score = 0
// functions------------------------------------- 
function renderUi() {
  quizSec.innerHTML = ""
  quizSec.innerHTML += `
            <div class="top-bar">
                <div id="score">Score : ${score}</div>
                <div id="progress">Question ${currentQuestion + 1} / 10</div>
            </div>

            <div id="que">
                <span id="questionNo">${currentQuestion + 1}.</span>
                <span id="questionText">
                    ${questions[currentQuestion].question}
                </span>
            </div>

            <div id="options">
                <button class="option">${questions[currentQuestion].options[0]}</button>
                <button class="option">${questions[currentQuestion].options[1]}</button>
                <button class="option">${questions[currentQuestion].options[2]}</button>
                <button class="option">${questions[currentQuestion].options[3]}</button>
            </div>
               
            
            <div class="btns">
                <button id="prevBtn">Previous</button>
                <button id="nextBtn">Next</button>
            </div>

            <div id="result">
                Your Score : 0 / 10
            </div>
                `
    buttons()
    allOption()
}
renderUi()

function buttons() {
  //buttons-----------------------------------------
  const nextButton = document.querySelector("#nextBtn")
  const prevButton = document.querySelector("#prevBtn")

  //nextButton------------------------ 
  if (currentQuestion !== questions.length - 1) {
    nextButton.addEventListener("click", (e) => {
      currentQuestion++
      renderUi()

    })
  }
  else {
    nextButton.disabled = true
    nextButton.style.color = "gray"
  }

  //prevButton------------------------ 
  if (currentQuestion !== 0) {
    prevButton.addEventListener("click", (e) => {
      currentQuestion--
      renderUi()
    })
  } else {
    prevButton.disabled = true
    prevButton.style.color = "gray"
  }


}

function allOption(){
     const options = document.querySelectorAll(".option")
    options.forEach((option)=>{
      
    })
}
