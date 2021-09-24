const quizData = [
  {
    question: 'How old is Christian Darlington?',
    a: '19',
    b: '21',
    c: '20',
    d: '22',
    correct: "c",
  },
  {
    question: "Which NBA player nickname is the 'Diesil'?",
    a: 'Joel Embiid',
    b: 'Shaq',
    c: 'Alonzo Mourning',
    d: 'Lebron James',
    correct: "b",
  },
  {
    question: 'Which of these were the most popular programming language in 2019?',
    a: 'Java',
    b: 'Javascript',
    c: 'Python',
    d: 'C',
    correct: "a",
  },
  {
    question: 'What is the most popular game in 2021?',
    a: 'Fornite',
    b: 'Call of Duty Warzone',
    c: 'Minecraft',
    d: 'Super Smash Bros. Ultimate',
    correct: "c",
  },
  {
    question: 'According to box office sales, Which movie is the best?',
    a: 'Black Widow',
    b: 'Shang-Chi',
    c: 'F9',
    d: 'Snake Eyes',
    correct: "a",
  },
  {
    question: 'What year was Javascript launched?',
    a: '2010',
    b: '2005',
    c: '1995',
    d: 'none of the above',
    correct: "c",
  },{
    question: "What is the rarest M&M color?",
    a: 'Green',
    b: 'Brown',
    c: 'Red',
    d: 'Brown',
    correct: 'd',
  },{
    question: "Area 51 is located in which state?",
    a: 'California',
    b: 'South Dakota',
    c: 'Arizona',
    d: 'Nevada',
    correct: 'd',
  },{
    question: "Which country invented tea?",
    a: 'China',
    b: 'England',
    c:'America',
    d:'Russia',
    correct: 'a'
  }
]


const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});