let profile=document.querySelectorAll(".profile");
let fileId=document.querySelector("#fileId");
let name=document.querySelector(".name");
let mail=document.querySelector(".mail");
let joined=document.querySelector(".join");
let edit=document.querySelector("#edit");
let save=document.querySelector("#save");
let logOut=document.querySelector("#logout");
let mainSection=document.querySelector(".main");
let editSection=document.querySelector(".editSection");
let editName=document.querySelector("#editName");
let editMail=document.querySelector("#editMail");
let remove=document.querySelector("#remove");


editSection.style.display="none";
fileId.addEventListener("change",(e)=>{
    const file=fileId.files[0];
    if(file){
        const reader=new FileReader();
        reader.onload=(e)=>{
            profile[0].src=e.target.result;
            localStorage.setItem("profilePic", e.target.result);
        }
        reader.readAsDataURL(file);
    }
});

window.addEventListener("load",(e)=>{
    let loginPass=localStorage.getItem("loginId");
    if(loginPass=="true"){
    let pic=localStorage.getItem("profilePic");
    if(pic){
    profile[0].src=pic;
    }
    let username=JSON.parse(localStorage.getItem("username"));
    let email=JSON.parse(localStorage.getItem("userMail"));
    let loginTime=String(localStorage.getItem("userLogin"));
    name.innerText=`Name:${username}`;
    mail.innerText=`Email:${email}`;
    joined.innerText=`Joined:${loginTime}`;
    }else{
        window.location.href="login.html";
    }
});

edit.addEventListener("click",(e)=>{
    let savedPic=localStorage.getItem("profilePic");
    mainSection.style.display="none"; 
    editSection.style.display="flex";
      profile[1].src=savedPic;
    
});

save.addEventListener("click",(e)=>{
    if((editName.value && editMail.value !='')){
    let edited=((editMail.value).trim());
    let editedName=((editName.value).trim());
    if(edited.includes("@")){
        localStorage.setItem("userMail",JSON.stringify(edited));
        localStorage.setItem("username",JSON.stringify(editedName));
        editSection.style.display="none";
        mainSection.style.display="flex";
        window.location.href="profile.html";
    }else{
        alert("fill out correctly");
    }
}else{
    alert("don't leave it blank");
}
});

remove.addEventListener("click",(e)=>{
    profile[1].src="avataaars.png";
    localStorage.setItem("profilePic","avataaars.png");
});

logOut.addEventListener("click",()=>{
     window.location.href="login.html";
     localStorage.setItem("loginId", "false");
});