let profile=document.querySelector("#profile");
let fileId=document.querySelector("#fileId");
let name=document.querySelector(".name");
let mail=document.querySelector(".mail");
let joined=document.querySelector(".join");
let edit=document.querySelector("#edit");
let logOut=document.querySelector("#logout");

fileId.addEventListener("change",(e)=>{
    const file=fileId.files[0];
    if(file){
        const reader=new FileReader();
        reader.onload=(e)=>{
            profile.src=e.target.result;
            localStorage.setItem("profilePic", e.target.result);
        }
        reader.readAsDataURL(file);
    }
});

window.addEventListener("load",(e)=>{
    let pic=localStorage.getItem("profilePic");
    if(pic){
    profile.src=pic;
    }
    let username=JSON.parse(localStorage.getItem("username"));
    let email=JSON.parse(localStorage.getItem("userMail"));
    let loginTime=String(localStorage.getItem("userLogin"));
    name.innerText=`Name:${username}`;
    mail.innerText=`Email:${email}`;
    joined.innerText=`Joined:${loginTime}`;
});

edit.addEventListener("click",(e)=>{
    
})