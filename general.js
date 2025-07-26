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



let highScore=JSON.parse(localStorage.getItem("genHigest"))||"0";
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
    Question: "Which Nobel laureate developed the concept of “bounded rationality” in economics?",
    options: ["Amartya Sen", "Daniel Kahneman", "Herbert Simon", "Milton Friedman"],
    answer: "Herbert Simon"
  },
  {
    Question: "Which element has the lowest melting point?",
    options: ["Helium", "Hydrogen", "Nitrogen", "Neon"],
    answer: "Helium"
  },
  {
    Question: "In which year did the Berlin Wall fall?",
    options: ["1987", "1989", "1990", "1991"],
    answer: "1989"
  },
  {
    Question: "Who was the first woman to win a Nobel Prize in two different sciences?",
    options: ["Dorothy Hodgkin", "Marie Curie", "Rosalind Franklin", "Ada Lovelace"],
    answer: "Marie Curie"
  },
  {
    Question: "Which Indian classical dance form originated in Kerala?",
    options: ["Kathak", "Bharatanatyam", "Kathakali", "Odissi"],
    answer: "Kathakali"
  },
  {
    Question: "What is the SI unit of luminous flux?",
    options: ["Lumen", "Lux", "Candela", "Watt"],
    answer: "Lumen"
  },
  {
    Question: "Which Mughal emperor built the Buland Darwaza?",
    options: ["Akbar", "Shah Jahan", "Babur", "Aurangzeb"],
    answer: "Akbar"
  },
  {
    Question: "What is the main function of ribosomes in a cell?",
    options: ["Energy production", "Protein synthesis", "Lipid transport", "DNA replication"],
    answer: "Protein synthesis"
  },
  {
    Question: "Which city hosted the first modern Olympic Games?",
    options: ["Rome", "Athens", "London", "Paris"],
    answer: "Athens"
  },
  {
    Question: "Which African country has never been colonized?",
    options: ["Ghana", "Ethiopia", "Kenya", "Algeria"],
    answer: "Ethiopia"
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
        localStorage.setItem("genHighest",JSON.stringify(userScore));
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