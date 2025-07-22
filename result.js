let mathScore=document.querySelector(".math");
let engScore=document.querySelector(".eng");
let gerScore=document.querySelector(".gen");
let scienceScore=document.querySelector(".science");
let funScore=document.querySelector(".fun");

let mathDisplay=JSON.parse(localStorage.getItem("mathHighest"))||"0";
mathScore.innerText=`Highest Score:${mathDisplay}`;