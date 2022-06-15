document.getElementById("blueBtn").style.visibility="hidden";

let eye=document.getElementById("eyeLeft");
eye.addEventListener("click",showVisible);
// function showVisible(){
//     document.getElementById("test").style.visibility="visible";
  
// }
function showVisible(){
    if(document.getElementById("blueBtn").style.visibility == "visible"){
        document.getElementById("blueBtn").style.visibility="hidden";
    }else if(document.getElementById("blueBtn").style.visibility == "hidden"){
        document.getElementById("blueBtn").style.visibility="visible";
    }
}

// == => 비교!, = => 값을 준다. 