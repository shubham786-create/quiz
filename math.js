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
let highScore=JSON.parse(localStorage.getItem("highest"))||"0";
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

})

let questions=[{Question:"A train travels 60 km in 1 hour. How far will it travel in 3.5 hours ?",options:["180 km", "210 km" ,"240 km", "200 km"], answer:"210 km"},
{Question:"Triangle angles are in the ration of 2:3:4. Find all the angles.",options:["40°,60°,80°","30°,60°,90°","20°,40°,120°","45°,45°,90°"],answer:"40°,60°,80°"},
{Question:"If A and B are events with P(A) = 0.5 and P(B) = 0.7, and they are independent, what is P(A ∩ B)?",options:["0.2","1.2","0.35","0.5"],answer:"0.35"},
{Question:"Number of zeros at the end of 100!",options:["20","24","22","25"],answer:"24"},
{Question:" If John's age is twice that of his sister and the sum of their ages is 36, what is John's age?",options:["10","24","18","20"],answer:"24"},
{Question:"A man walks 10 km south, then 10 km west, then 10 km north. How far is he from the starting point?",options:["10 Km","30 Km","20 Km","0 Km"],answer:"10 Km"},
{Question:" Which number is one-fourth of one-third of one-half of 240?",options:["20","10","30","40"],answer:"10"},
{Question:"Which shape has the most number of lines of symmetry?",options:["Rectangle","Square","Equilateral Triangle","Circle"],answer:"Circle"},
{Question:"If Today is Monday, what day will it be after 45 days ?",options:["Wednesday","Thursday","Saturday","Sunday"],answer:"Thursday"},
{Question:" If all squares are rectangles, and all rectangles are quadrilaterals, then all squares are:",options:["Circles","Quadrilaterals","Rhombuses","Parallelograms"],answer:"Quadrilaterals"}];

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
        localStorage.setItem("highest",JSON.stringify(userScore));
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
})
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