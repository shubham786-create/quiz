let mathScore=document.querySelector(".math");
let engScore=document.querySelector(".eng");
let genScore=document.querySelector(".gen");
let scienceScore=document.querySelector(".science");
let funScore=document.querySelector(".fun");

let mathDisplay=JSON.parse(localStorage.getItem("mathHighest"))||"0";
mathScore.innerText=`Highest Score:${mathDisplay}`;

let engDisplay=JSON.parse(localStorage.getItem("engHighest"))||"0";
engScore.innerText=`Highest Score:${engDisplay}`;

let genDisplay=JSON.parse(localStorage.getItem("genHighest"))||"0";
genScore.innerText=`Highest Score:${genDisplay}`;

let scienceDisplay=JSON.parse(localStorage.getItem("scienceHighest"))||"0";
scienceScore.innerText=`Highest Score:${scienceDisplay}`;

let funDisplay=JSON.parse(localStorage.getItem("funHighest"))||"0";
funScore.innerText=`Highest Score:${funDisplay}`;

        window.addEventListener("load",(e)=>{
            let loginPass=localStorage.getItem("loginId");
            if(loginPass!="true"){
                window.location.href="login.html";
            }
        });