const quizData = [
    {
        question: "What is the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "Who is the President of US?",
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Mihai Andrei",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const btn = document.getElementById("btn");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const que = document.getElementById("q");
const ops = document.querySelectorAll(".op");
let count = 0;
let correctCount = 0;

if (count === 0) {
    document.getElementById("qu1").innerHTML = "<button id=load>Load quiz</button>";

}
const load = document.getElementById("load");

load.addEventListener("click", (e) => {
    unCheck();
    e.preventDefault();
    document.getElementById("qu1").innerHTML = "";
    document.getElementById("qu").hidden = false;
    quizdisplay(count++);
});

btn.addEventListener("click", (e) => {
    if (count < quizData.length) {
        e.preventDefault();
        let ans = getChecked();
        if (ans == quizData[count - 1].correct) {
            ++correctCount;
        }
        console.log(correctCount);
        quizdisplay(count++);
        unCheck();
    } else {
        e.preventDefault();
        document.getElementById("qu").hidden = true;
        document.getElementById("qu1").innerHTML = `<h3>Your score is : ${correctCount}<h3><br><button id=load >Load quiz</button>`;
    }

})

function unCheck() {
    ops.forEach((op) => {
        op.checked = false;
    });
}
function getChecked() {
    let ans = undefined;
    ops.forEach((op) => {
        if (op.checked) {
            ans = op.id;
        }
    });
    return ans;
}

function quizdisplay(i) {
    que.innerHTML = quizData[i].question;
    a_text.innerHTML = quizData[i].a;
    b_text.innerHTML = quizData[i].b;
    c_text.innerHTML = quizData[i].c;
    d_text.innerHTML = quizData[i].d;
}