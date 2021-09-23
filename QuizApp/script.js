const quizData = [
  {
    question:'How old is Christian Darlington?',
    a: '19',
    b: '21',
    c: '20',
    d: '22',
    correct: c
  },{
    question: 'Which NBA player nickname is the \'Diesil\'?',
    a: 'Joel Embiid',
    b: 'Shaq',
    c: 'Alonzo Mourning',
    d: 'Lebron James',
    correct: b
  },{
    question: 'Which of these were the most popular programming language in 2019?',
    a:'Java',
    b:'Javascript',
    c:'Python',
    d:'C',
    correct: a
  },{
    question:'What is the most popular game in 2021?',
    a:'Fornite',
    b:'Call of Duty Warzone',
    c: 'Minecraft',
    d: 'Super Smash Bros. Ultimate',
    correct: c
  },{
    question: 'According to box office sales, Which movie is the best?',
    a: 'Black Widow',
    b: 'Shang-Chi',
    c: 'F9',
    d: 'Snake Eyes',
    correct: a
  },{
    question: 'What year was Javascript launched?',
    a: '2010',
    b:'2005',
    c:'1995',
    d:'none of the above',
    correct: c
  }
]

const questionEl = document.getElementById
("question")

const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitBtn = document.getElementById("submit")

let currentQuestion = 0

loadQuiz()

function loadQuiz(){
const currentQuizData = quizData[currentQuestion]

questionEl.innerText = currentQuizData.question

a_text.innerHTML = currentQuizData.a
b_text.innerHTML = currentQuizData.b
c_text.innerHTML = currentQuizData.c
d_text.innerHTML = currentQuizData.d
  

}

submitBtn.addEventListener('click', () => {
  currentQuestion++

  if(currentQuestion < quizData.length){
    loadQuiz()
  } else {
    alert("You finished! Now eat a nice big bowl of veggies")
  }
})