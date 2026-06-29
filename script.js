const questions = [
    {
        question: "What is the capital of India?",
        options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
        answer: 1, isSubmitted: false,
        selcOpIndex: null

    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: 1, isSubmitted: false,
        selcOpIndex: null
    },
    {
        question: "Who is known as the Father of the Nation in India?",
        options: [
            "Jawaharlal Nehru",
            "Subhas Chandra Bose",
            "Mahatma Gandhi",
            "Bhagat Singh"
        ],
        answer: 2, isSubmitted: false,
        selcOpIndex: null
    },
    {
        question: "Which is the largest ocean in the world?",
        options: [
            "Atlantic Ocean",
            "Indian Ocean",
            "Pacific Ocean",
            "Arctic Ocean"
        ],
        answer: 2, isSubmitted: false,
        selcOpIndex: null
    },
    {
        question: "How many continents are there on Earth?",
        options: ["5", "6", "7", "8"],
        answer: 2, isSubmitted: false,
        selcOpIndex: null
    },
    {
        question: "Which is the national animal of India?",
        options: ["Lion", "Tiger", "Elephant", "Leopard"],
        answer: 1, isSubmitted: false,
        selcOpIndex: null
    },
    {
        question: "Which is the longest river in the world?",
        options: [
            "Amazon River",
            "Nile River",
            "Ganga River",
            "Yangtze River"
        ],
        answer: 1, isSubmitted: false,
        selcOpIndex: null
    },
    {
        question: "Who invented the telephone?",
        options: [
            "Thomas Edison",
            "Alexander Graham Bell",
            "Nikola Tesla",
            "Isaac Newton"
        ],
        answer: 1, isSubmitted: false,
        selcOpIndex: null
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "South Korea", "Japan", "Thailand"],
        answer: 2, isSubmitted: false,
        selcOpIndex: null
    },
    {
        question: "What is the largest mammal in the world?",
        options: [
            "African Elephant",
            "Blue Whale",
            "Giraffe",
            "Hippopotamus"
        ],
        answer: 1, isSubmitted: false,
        selcOpIndex: null
    }
];

const scoreElemet = document.querySelector("#score")
const progress = document.querySelector("#progress")
const queNum = document.querySelector("#questionNo")
const queText = document.querySelector("#questionText")
const queOptions = document.querySelectorAll(".option")

const nextBtn = document.querySelector("#nextBtn")
const previewBtn = document.querySelector("#prevBtn")
let currentQuestion = 0
let score = 0
function renderUi() {
    scoreElemet.textContent = `Score : ${score}`
    progress.textContent = `Question  ${currentQuestion + 1} / ${questions.length}`
    queNum.textContent = `${currentQuestion + 1}.`
    queText.textContent = `${questions[currentQuestion].question}`

    queOptions.forEach((op, index) => {
        op.textContent = `${questions[currentQuestion].options[index]}`

    })

    //next,prev Ui logic------------------
    if (currentQuestion === questions.length - 1) {

        nextBtn.disabled = true
        nextBtn.style.color = "gray"
    }
    else {
        nextBtn.disabled = false
        nextBtn.style.color = "black"
    }

    if (currentQuestion === 0) {
        previewBtn.disabled = true
        previewBtn.style.color = "gray"
    } else {
        previewBtn.disabled = false
        previewBtn.style.color = "black"

    }

    //optionUi logic----------------------------
    queOptions.forEach((op) => {
        op.classList.remove("selected", "green", "red");
    })

    let selected = questions[currentQuestion].selcOpIndex;
    if (selected !== null) {
        queOptions[selected].classList.add("selected")
        
    }

    if (questions[currentQuestion].isSubmitted === true) {
        let ans = questions[currentQuestion].answer
        if (selected === ans) {
            queOptions[selected].classList.add("green")
        } else {
            queOptions[selected].classList.add("red")
            queOptions[ans].classList.add("green")
        }
        queOptions[selected].classList.remove("selected")
    }
}

renderUi()

function buttons() {

    nextBtn.addEventListener("click", () => {
        if (currentQuestion < questions.length - 1) {
            currentQuestion++

            renderUi()
            return
        }

    })
    previewBtn.addEventListener("click", () => {
        if (currentQuestion !== 0) {
            currentQuestion--

            renderUi()
            return
        }

    })
}
buttons()


function allOp() {
    const subBtn = document.querySelector("#submitBtn")
    queOptions.forEach((op, index) => {

        op.addEventListener("click", () => {
            if (questions[currentQuestion].isSubmitted) {
                return
            }
            questions[currentQuestion].selcOpIndex = index;

            queOptions.forEach((ops) => {
                ops.classList.remove("selected")
            })
            op.classList.add("selected")

        })
    })

    subBtn.addEventListener("click", () => {
        let selected = questions[currentQuestion].selcOpIndex;
        if (questions[currentQuestion].isSubmitted) {
            return;
        }

        if (selected === null) {
            alert("Please select an option");
            return;
        }
        let ans = questions[currentQuestion].answer
        if (selected === ans) {
            queOptions[selected].classList.add("green")
            score++
            scoreElemet.textContent = `Score : ${score}`
        } else if (selected !== ans) {
            queOptions[selected].classList.add("red")
            queOptions[ans].classList.add("green")

        }
        questions[currentQuestion].isSubmitted = true;
    })

}
allOp()