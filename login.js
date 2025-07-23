let name=document.querySelector("#name");
let password=document.querySelector("#password");
let form=document.querySelector(".form");
let userId=JSON.parse(localStorage.getItem("username"));
let userPass=String(localStorage.getItem("passId"));


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let typeName=(name.value).trim();
    let typePass=String((password.value)).trim();
    if(typeName==userId && typePass==userPass){
        window.location.href="home.html";
    }else{
        alert("You don't have any account. Please Sign up!");

    }
    name.value='';
    password.value='';
});