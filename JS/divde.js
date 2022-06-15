let item;
let what= document.getElementById("what").innerHTML;


function go_url(item){
    if(item == "사과"){
        location.href="apple.html";
    }else if(item=="빵"){
        location.href="bread.html";
    }else if(item =="햄버거"){
        location.href="video.html";
    }else if(item =="치킨"){
        location.href="chicken.html";
    }else if(item =="아이스크림"){
        location.href="icecream.html";
    }
}

function window_onload(){
    if(localStorage.getItem('toss') =='사과'){
        item='사과';
        document.getElementById("what").innerHTML=item;
        setTimeout(go_url,4000,item);
        // window.localStorage.removeItem('toss');
    }
    else if(localStorage.getItem('toss')=='빵'){
        item='빵';
        document.getElementById("what").innerHTML=item;
        setTimeout(go_url,4000,item);
        // window.localStorage.removeItem('toss');
    }
    else if(localStorage.getItem('toss')=='햄버거'){
        item='햄버거';
        document.getElementById("what").innerHTML=item;
        setTimeout(go_url,4000,item);
        // window.localStorage.removeItem('toss');
    }
    else if(localStorage.getItem('toss')=='치킨'){
        item='치킨';
        document.getElementById("what").innerHTML=item;
        setTimeout(go_url,4000,item);
        // window.localStorage.removeItem('toss');
    }
    else if(localStorage.getItem('toss')=='아이스크림'){
        item='아이스크림';
        document.getElementById("what").innerHTML=item;
        setTimeout(go_url,4000,item);
        // window.localStorage.removeItem('toss');
    }
    else{
        document.getElementById("what").innerHTML=localStorage.getItem('toss');
        alert("땡!");
        // window.localStorage.removeItem('toss');
    }
}

