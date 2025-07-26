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



let highScore=JSON.parse(localStorage.getItem("engHighet"))||"0";
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



let questions=[{Question:"What is the meaning of the word 'obfuscate'?",options:["Clarify", "Hide" ,"Encourage", "Confuse"], answer:"Confuse"},
{Question:`Which word best fits in the blank?
The scientist’s theory was purely ______ and lacked practical application.`,options:["empirical","hypothetical","conclusive","tactile"],answer:"hypothetical"},
{Question:"What does the idiom 'beat around the bush' mean?",options:["To hit something","To speak indirectly","To tell lies","To forget something"],answer:"To speak indirectly"},
{Question:"Which of these idioms means “to reveal a secret”?",options:["Bite the bullet","Spill the beans","Barking up the wrong tree","Pull someone's leg"],answer:"Spill the beans"},
{Question:`What tone does the following sentence convey?
“Well, that is just fantastic,” she muttered, staring at her ruined project.`,options:["Joyful","Sarcastic","Confident","Indifferent"],answer:"Sarcastic"},
{Question:"The word 'obsequious' refers to someone who is:",options:["Disobedeint","EXtremely obedient","Angry","Smart"],answer:"Extremely Obedient"},
{Question:"Which sentence contains an error in subject-verb agreement?",options:["Each of the players runs fast.","The committee has made its decision."," Neither of the options are good"," The dog with the puppies is barking"],answer:" Neither of the options are good"},
{Question:`Choose the word that means “harsh in tone or manner”:`,options:["Acrimonious","Placid","Mellow","Jovial"],answer:"Acrimonious"},
{Question:`His obfuscating explanations only made the topic harder to understand. What does "obfuscating" mean?`,options:["Clarifying","Simplifying","Confusing","Strengthening"],answer:"Confusing"},
{Question:"Choose the correct synonym of 'nefarious':",options:["Kind","Evil","Silly","Lazy"],answer:"Evil"}];


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
        localStorage.setItem("engHighest",JSON.stringify(userScore));
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