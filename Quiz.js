const QuizDB =[
    {
question: "Q1: What is the full form of HTML?",
a:"Hello To My Land",
b:"Heyy Text Markup Language",
c:"Hyper Text makeup Language",
d:"Hyper Text markup Language",
ans:"ans4"
},
{
    question: "Q2: What is the full form of CSS?",
    a:"Casding Style Sheet",
    b:"Cascading Style Sheet",
    c:"Cascading Style Sheets",
    d:"Cascading Sleep Sheet",
    ans:"ans2"
   },
{
      question: "Q3: What is the full form of HTTP?",
      a:"Hyper Takeup Protocol",
      b:"Hypertext testy prity",
      c:"Hyper Text Takeup Protocol",
      d:"Hypertext Transfer Protocol",
      ans:"ans4"
  },

      {
         question: "Q4: What is the full form of JS?",
         a:"JavaSuper",
         b:"JustScript",
         c:"JavaScript",
         d:"Jiosleep",
         ans:"ans3"
      }
];


const question = document.querySelector(".question");
const opt1 = document.querySelector('#opt1');
const opt2 = document.querySelector('#opt2');
const opt3 = document.querySelector('#opt3');
const opt4 = document.querySelector('#opt4');
const Submit = document.querySelector('#Submit');


const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score =0;



const loadQestion = () =>{

    const questionList = QuizDB[questionCount];
    question.innerText = questionList.question;
    opt1.innerText = questionList.a;
    opt2.innerText = questionList.b;
    opt3.innerText = questionList.c;
    opt4.innerText = questionList.d;


 }
 loadQestion();

const getCheckAnswer = () =>{
let answer;
answers.forEach((curAnsElem)=>{
if(curAnsElem.checked){
    answer = curAnsElem.id;
}

});
return answer;
} ;
Submit.addEventListener('click',()=>{
    const checkdAnswer = getCheckAnswer();

    console.log(checkdAnswer);

    if(checkdAnswer === QuizDB[questionCount].ans){
        score ++;
    };
    questionCount ++;
    if(questionCount < QuizDB.length){
        loadQestion();
    }else{



        showScore.innerHTML =`
        <h3>You scored ${score} / ${QuizDB.length}  ✌️</h3> 
         <button class = "btn" onclick= "location.reload()">Play Again</button> `;

       
       
         showScore.classList.remove('scoreArea');
    }

});