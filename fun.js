let questionSeries=document.querySelector(".serial");
let questionDisplay=document.querySelector(".question");
let optionDisplay=document.querySelectorAll(".option");
let btn=document.querySelector(".mainBtn");
let serialNum=0;
let iteration=0;
let userScore=0;
let intervalId;
let timeoutId;
let mainSection=document.querySelector(".main");
let popUp=document.querySelector(".pop-up");
let body=document.querySelector("body");
let startBtn=document.querySelector(".start");
let styleSection=document.querySelector(".stylesec");
let scorecard=document.querySelector(".scorecard");
let restart=document.querySelector(".restart");
let score=document.querySelector(".score");
let timerDisplay=document.querySelector(".timer");
let highScoreDisplay=document.querySelector(".highScore");



let highScore=JSON.parse(localStorage.getItem("funHigest"))||"0";
  highScoreDisplay.innerText=`👑Highest Score:${highScore}`;

  
styleSection.style.visibility="hidden";
mainSection.style.visibility="hidden";
scorecard.style.visibility="hidden";

startBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    styleSection.style.visibility="visible";
    mainSection.style.visibility="visible";
    popUp.style.visibility="hidden";
    updateTimer();

});


let questions = [
  {
    Question: "Which Bollywood actor is known as the 'Khiladi' of Bollywood?",
    options: ["Shah Rukh Khan", "Aamir Khan", "Akshay Kumar", "Salman Khan"],
    answer: "Akshay Kumar"
  },
  {
    Question: "In the movie '3 Idiots', what is Rancho’s real name?",
    options: ["Ranchoddas Shamaldas Chanchad", "Raju Rastogi", "Farhan Qureshi", "Phunsukh Wangdu"],
    answer: "Phunsukh Wangdu"
  },
  {
    Question: "Which Bollywood film features the song 'All is Well'?",
    options: ["PK", "3 Idiots", "Chhichhore", "Dangal"],
    answer: "3 Idiots"
  },
  {
    Question: "Who played the role of 'Mogambo' in the film 'Mr. India'?",
    options: ["Amrish Puri", "Prem Chopra", "Anupam Kher", "Danny Denzongpa"],
    answer: "Amrish Puri"
  },
  {
    Question: "In which movie does the dialogue 'Tumse na ho payega' appear?",
    options: ["Gully Boy", "Tamasha", "Chhichhore", "Bhaag Milkha Bhaag"],
    answer: "Chhichhore"
  },
  {
    Question: "Which Bollywood actor is famous for his dance moves and has the nickname 'Greek God of Bollywood'?",
    options: ["Tiger Shroff", "Ranbir Kapoor", "Hrithik Roshan", "Varun Dhawan"],
    answer: "Hrithik Roshan"
  },
  {
    Question: "What was the name of the virus in 'Munna Bhai M.B.B.S.'?",
    options: ["Dr. Asthana", "Circuit", "Zafar Bhai", "Khujli Bhai"],
    answer: "Dr. Asthana"
  },
  {
    Question: "Which film features a gangster named 'Chhedi Singh'?",
    options: ["Singham", "Dabangg", "Rowdy Rathore", "Wanted"],
    answer: "Dabangg"
  },
  {
    Question: "What is the full form of 'DDLJ'?",
    options: [
      "Dilwale Dil Le Jayenge",
      "Dilwale Dulhania Le Jayenge",
      "Dilwale Dulhan Le Jayenge",
      "Dilwale Duniya Le Jayenge"
    ],
    answer: "Dilwale Dulhania Le Jayenge"
  },
  {
    Question: "Which actress is known for the iconic dialogue 'Thappad se darr nahi lagta sahab, pyaar se lagta hai'?",
    options: ["Deepika Padukone", "Kareena Kapoor", "Katrina Kaif", "Sonakshi Sinha"],
    answer: "Sonakshi Sinha"
  }
];




btn.addEventListener("click",(e)=>{
    iteration++;
    updateQuestion(iteration);
    e.preventDefault();
    optionDisplay.forEach(ele=>{
        ele.style.pointerEvents="auto";
        ele.style.userSelect="auto";
        ele.style.backgroundColor="white";
        ele.style.color="black";
    });
    if(iteration>=questions.length){
          clearInterval(intervalId);
        clearInterval(timeoutId);
    }
    else{
     clearInterval(intervalId);
        clearInterval(timeoutId);
        updateTimer();
    }
});


const updateQuestion=(i)=>{
    if(i>= questions.length){
        styleSection.style.visibility="hidden";
        mainSection.style.visibility="hidden";
        scorecard.style.visibility="visible";
        score.innerText=`🏆Score :${userScore}`;
        console.log("user's score is ", userScore);
        if(userScore>highScore){
            highScore=userScore;
        localStorage.setItem("funHighest",JSON.stringify(userScore));
          highScoreDisplay.innerText=`👑Highest Score:${highScore}`;
        }

       
    }
    else{
    questionDisplay.innerText=questions[i].Question;
    for(let j=0; j<4; j++){
        optionDisplay[j].innerText=questions[i].options[j];
    }
     serialNum++;
        questionSeries.innerText=`Question No. ${serialNum}`;
}
}


optionDisplay.forEach((element, index)=> {
    element.addEventListener("click",(e)=>{
        let text=e.target;
          clearInterval(intervalId);
        clearInterval(timeoutId);
        if(text.innerText==questions[iteration].answer){
                    userScore++;
        }
        optionDisplay.forEach(ele=>{
            ele.style.pointerEvents="none";
            if(text.innerText==questions[iteration].answer){
                text.style.backgroundColor="green";
                text.style.color="white";
            }else{
                text.style.backgroundColor="red";
                    text.style.color="white";
            }
        });

     console.log(e.target.innerText);  
    });
   

});


restart.addEventListener("click",(e)=>{
      e.preventDefault();
      iteration=0;
      userScore=0;
      serialNum=0;
      scorecard.style.visibility="hidden";
      styleSection.style.visibility="visible";
      mainSection.style.visibility="visible";
      updateQuestion(iteration);
       clearInterval(intervalId);
        clearInterval(timeoutId);
        updateTimer();
});


 updateQuestion(iteration);



 function updateTimer(){
    let i=60;
 function timer(){
    timerDisplay.innerText=i;
    i--;
 }
 timer();
 intervalId = setInterval(timer, 1000);
timeoutId=setTimeout(() => {
    clearInterval(intervalId);
    timerDisplay.innerText="⏰Timer Over!"
    optionDisplay.forEach(ele=>{
        ele.style.pointerEvents="none";
    });
}, 60000);
 }
         window.addEventListener("load",(e)=>{
            let loginPass=localStorage.getItem("loginId");
            if(loginPass!="true"){
                window.location.href="login.html";
            }
        });