const questions = [
    {
        question: "Who wrote the novel 1984 ?", 
        answers: [
            {text: "George Orwell", correct: true},
            {text: "J.K. Rowling", correct: false},
            {text: "F.Scott Fitzgerald", correct: false},
            {text: "Ernest Hemingway", correct: false},
        ] 
    },
    {
        question: "What is the capital of australia ?", 
        answers: [
            {text: "Sydney", correct: false},
            {text: "Melbourne", correct: false},
            {text: "Canberra", correct: true},
            {text: "Brisbane", correct: false},
        ] 
    },
    {
        question: "Which is the largest desert in the world ?", 
        answers: [
            {text: "Kalahari", correct: false},
            {text: "Gobi", correct: false},
            {text: "Sahara", correct: false},
            {text: "Antarctica", correct: true},
        ] 
    },
    {
        question: "Which is the smallest continent in the world ?", 
        answers: [
            {text: "Asia", correct: false},
            {text: "Australia", correct: true},
            {text: "Arctic", correct: false},
            {text: "Africa", correct: false},
        ] 
    },
    {
        question: "Which is the largest lake in the world ?", 
        answers: [
            {text: "Caspian Sea", correct: false},
            {text: "Baikal", correct: true},
            {text: "Lake Superior", correct: false},
            {text: "Ontaria", correct: false},
        ] 
    },
    {
        question: "Who wrote the novel War & Peace ?", 
        answers: [
            {text: "Anton Chekov", correct: false},
            {text: "Fyodor Dostoe", correct: false},
            {text: "Leo Tolstoy", correct: true},
            {text: "Ivan Turgenev", correct: false},
        ] 
    },
    {
        question: "Which is the capital of japan ?", 
        answers: [
            {text: "Beijing", correct: false},
            {text: "Tokyo", correct: true},
            {text: "Seoul", correct: false},
            {text: "Bangkok", correct: false},
        ] 
    },
    {
        question: "Which is the longest river in the world ?", 
        answers: [
            {text: "Amazon", correct: false},
            {text: "Mississippi", correct: false},
            {text: "Nile", correct: true},
            {text: "Yangtze", correct: false},
        ] 
    },
    {
        question: "Which gas is used to extinguish fires ?", 
        answers: [
            {text: "Oxygen", correct: false},
            {text: "Nitrogen", correct: true},
            {text: "Cardon Dioxide", correct: false},
            {text: "Hydrogen", correct: false},
        ] 
    },
    {
        question: "Which is the largest island in the world ?", 
        answers: [
            {text: "New Guinea", correct: false},
            {text: "Andaman Nicobar", correct: false},
            {text: "Greenland", correct: true},
            {text: "Hawaii", correct: false},
        ] 
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();     
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }
    else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "PLAY AGAIN";
    nextButton.style.display = "block"; 
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore(); 
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});

startQuiz();

























