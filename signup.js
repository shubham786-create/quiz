let form=document.querySelector("#formId");
let name=document.querySelector(".name");
let password=document.querySelector(".pass");
let email=document.querySelector("#email");
let savedName=JSON.parse(localStorage.getItem("username"));
let savedPass=String(localStorage.getItem("passId"));
let savedMail=JSON.parse(localStorage.getItem("userMail"));

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let emailId=(email.value).trim();
    let nameId=(name.value).trim();
    let pass=String((password.value)).trim();
    if(emailId.includes("@")==true){
       localStorage.setItem("userMail",JSON.stringify(emailId));
       localStorage.setItem("username",JSON.stringify(nameId));
       localStorage.setItem("passId", pass);
       if(savedMail==emailId || savedName==nameId || savedPass==pass){
        alert("User exists ,please log in !");
       }else{
       window.location.href="home.html";
       checkTime();
       }
        name.value='';
       password.value='';
       email.value='';
    }else{
        alert("Please fill out the correct name and email!");
    }
});

const checkTime=()=>{
    let date=new Date();
    let day=date.getDate();
    let year=date.getFullYear();
    let months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    let month=months[date.getMonth()];
    let loginTime=`${day} ${month} ${year}`;
    localStorage.setItem("userLogin",loginTime);
}
