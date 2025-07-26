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



let highScore=JSON.parse(localStorage.getItem("scienceHigest"))||"0";
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
    Question: "What is the Heisenberg Uncertainty Principle primarily related to?",
    options: ["Time and Energy", "Mass and Volume", "Position and Momentum", "Speed and Acceleration"],
    answer: "Position and Momentum"
  },
  {
    Question: "Which law states that energy cannot be created or destroyed?",
    options: ["Law of Conservation of Mass", "First Law of Thermodynamics", "Newton's First Law", "Ohm's Law"],
    answer: "First Law of Thermodynamics"
  },
  {
    Question: "What type of bond involves the sharing of electron pairs between atoms?",
    options: ["Ionic bond", "Hydrogen bond", "Covalent bond", "Metallic bond"],
    answer: "Covalent bond"
  },
  {
    Question: "What is the SI unit of capacitance?",
    options: ["Ohm", "Farad", "Tesla", "Henry"],
    answer: "Farad"
  },
  {
    Question: "What is the half-life of a radioactive isotope?",
    options: ["Time for half the sample to evaporate", "Time to convert to stable form", "Time for half the nuclei to decay", "Time taken to double in size"],
    answer: "Time for half the nuclei to decay"
  },
  {
    Question: "Which phenomenon explains the bending of light as it passes from one medium to another?",
    options: ["Reflection", "Refraction", "Dispersion", "Interference"],
    answer: "Refraction"
  },
  {
    Question: "Which organelle is involved in detoxification and lipid synthesis?",
    options: ["Golgi apparatus", "Smooth endoplasmic reticulum", "Nucleus", "Ribosome"],
    answer: "Smooth endoplasmic reticulum"
  },
  {
    Question: "Which nuclear reaction occurs in the Sun’s core?",
    options: ["Fission", "Fusion", "Ionization", "Combustion"],
    answer: "Fusion"
  },
  {
    Question: "Which part of the electromagnetic spectrum has the shortest wavelength?",
    options: ["Ultraviolet", "X-rays", "Gamma rays", "Infrared"],
    answer: "Gamma rays"
  },
  {
    Question: "What is Planck’s constant (approximate value)?",
    options: ["6.626×10⁻³⁴ Js", "3.14×10⁸ m/s", "9.8 m/s²", "1.6×10⁻¹⁹ C"],
    answer: "6.626×10⁻³⁴ Js"
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
        localStorage.setItem("scienceHighest",JSON.stringify(userScore));
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