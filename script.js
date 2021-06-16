const quizData = [
  {
    question:
      'Which of the following is true about variable naming conventions in JavaScript?',
    a: 'You should not use any of the JavaScript reserved keyword as variable name.',
    b: 'JavaScript variable names should not start with a numeral (0-9).',
    c: 'Both of the above.',
    d: 'None of the above.',
    correct: 'c',
  },
  {
    question:
      'Which of the following is the correct syntax to redirect a url using JavaScript?',
    a: 'document.location',
    b: 'browser.location',
    c: 'navigator.location',
    d: 'window.location',
    correct: 'd',
  },
  {
    question:
      'Which built-in method returns the index within the calling String object of the first occurrence of the specified value?',
    a: ' getIndex()',
    b: 'location()',
    c: 'indexOf()',
    d: 'None of the above.',
    correct: 'c',
  },
  {
    question: 'Which of the following code creates an object?',
    a: 'var book = Object();',
    b: 'var book = new Object();',
    c: 'var book = new OBJECT();',
    d: 'var book = new Book();',
    correct: 'b',
  },
  {
    question:
      'Which of the following function of Number object returns the numbers value?',
    a: 'toString()',
    b: 'valueOf()',
    c: 'toLocaleString()',
    d: 'toPrecision()',
    correct: 'b',
  },
  {
    question:
      'Which of the following function of String object is used to match a regular expression against a string?',
    a: 'concat()',
    b: 'match()',
    c: 'search()',
    d: 'replace()',
    correct: 'b',
  },
  {
    question:
      'Which of the following function of String object creates an HTML anchor that is used as a hypertext target?',
    a: 'anchor()',
    b: 'link()',
    c: 'blink()',
    d: 'big()',
    correct: 'a',
  },
  {
    question:
      'Which of the following function of String object causes a string to be italic, as if it were in an <i> tag?',
    a: 'fixed()',
    b: 'fontcolor()',
    c: 'fontsize()',
    d: 'italics()',
    correct: 'd',
  },
  {
    question:
      'Which of the following function of Array object adds one or more elements to the end of an array and returns the new length of the array?',
    a: 'pop()',
    b: 'push()',
    c: 'join()',
    d: 'map()',
    correct: 'b',
  },
  {
    question:
      'Which of the following function of Array object reverses the order of the elements of an array?',
    a: 'revrese()',
    b: 'push()',
    c: 'reduce()',
    d: 'reduceRight()',
    correct: 'a',
  },
]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
  deselectAnswers()

  const currentQuizData = quizData[currentQuiz]

  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}

function getSelected() {
  let answer = undefined

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id
    }
  })

  return answer
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false
  })
}

submitBtn.addEventListener('click', () => {
  // check to see the answer
  const answer = getSelected()

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++
    }

    currentQuiz++
    if (currentQuiz < quizData.length) {
      loadQuiz()
    } else {
      quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `
    }
  }
})
