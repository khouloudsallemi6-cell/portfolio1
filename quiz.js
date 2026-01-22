const questions = [
    {
        question: "Dans quelle université étudies-tu ?",
        answers: [
            { text: "IIT", correct: true },
            { text: "INSAT", correct: false },
            { text: "ENIT", correct: false }
        ]
    },
    {
        question: "Quel est ton domaine d'étude ?",
        answers: [
            { text: "Informatique", correct: true },
            { text: "Médecine", correct: false },
            { text: "Architecture", correct: false }
        ]
    },
    {
        question: "Que signifie HTML ?",
        answers: [
            { text: "HyperText Markup Language", correct: true },
            { text: "HighText Machine Language", correct: false },
            { text: "HyperText Markdown Language", correct: false }
        ]
    },
    {
        question: "Que signifie CSS ?",
        answers: [
            { text: "Cascading Style Sheets", correct: true },
            { text: "Computer Style System", correct: false },
            { text: "Creative Styling Syntax", correct: false }
        ]
    },
    {
        question: "JavaScript est utilisé pour ?",
        answers: [
            { text: "Rendre les pages web interactives", correct: true },
            { text: "Définir la structure des pages web", correct: false },
            { text: "Stocker les données en base de données", correct: false }
        ]
    },
    {
        question: "Quelle balise HTML contient le texte principal d'une page ?",
        answers: [
            { text: "<body>", correct: true },
            { text: "<head>", correct: false },
            { text: "<footer>", correct: false }
        ]
    },
    {
        question: "Quelle est la bonne syntaxe pour créer une fonction en JavaScript ?",
        answers: [
            { text: "function maFonction() {}", correct: true },
            { text: "def maFonction() {}", correct: false },
            { text: "func maFonction() {}", correct: false }
        ]
    },
    {
        question: "Le CSS permet de ?",
        answers: [
            { text: "Styliser une page web", correct: true },
            { text: "Créer des bases de données", correct: false },
            { text: "Programmer des scripts serveur", correct: false }
        ]
    },
    {
        question: "Quel attribut HTML est utilisé pour les images ?",
        answers: [
            { text: "src", correct: true },
            { text: "href", correct: false },
            { text: "altitude", correct: false }
        ]
    },
    {
        question: "Quel langage est côté serveur ?",
        answers: [
            { text: "PHP", correct: true },
            { text: "HTML", correct: false },
            { text: "CSS", correct: false }
        ]
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

function showQuestion() {
    let q = questions[currentQuestion];
    questionEl.innerText = q.question;
    answersEl.innerHTML = "";

    q.answers.forEach(answer => {
        const btn = document.createElement("button");
        btn.innerText = answer.text;
        btn.onclick = () => selectAnswer(answer.correct);
        answersEl.appendChild(btn);
    });
}

function selectAnswer(correct) {
    if(correct) score++;
    currentQuestion++;

    if(currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionEl.innerText = "Quiz terminé !";
    answersEl.innerHTML = "";
    nextBtn.style.display = "none";
    resultEl.innerText = `Ton score : ${score} / ${questions.length}`;
}

nextBtn.onclick = showQuestion;

showQuestion();
