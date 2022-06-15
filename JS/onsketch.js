document.addEventListener('keydown', function(e) {

  if (e.keyCode<=65 || e.keyCode<75) {
    document.getElementById('audio').play();
  }
  else if(e.keyCode<=75 || e.keyCode<85){
    document.getElementById('test').play();
  }
  else if(85<=e.keyCode || e.keyCode<=90){
    document.getElementById('test2').play();
  }
  });
  // document.querySelector("video").playbackRate = 0.4;
  // // document.querySelector("video").playbackRate = 1;
  // document.getElementById("hamburger").playbackRate=0.4;




var input = document.querySelector('.search-form');
var search = document.querySelector('input')
var button = document.querySelector('button');

button.addEventListener('click', function(e) {
e.preventDefault();
input.classList.toggle('active');
})
search.addEventListener('focus', function() {
input.classList.add('focus');
})

search.addEventListener('blur', function() {
search.value.length != 0 ? input.classList.add('focus') : input.classList.remove('focus');
})



function pressEnter(){
if(event.keyCode == 13){
  let inputText=document.getElementById('test3').value;
  localStorage.setItem('toss',inputText);
  location.href='SecondSplash.html';

}
}

function clickBtn(){
  let inputText=document.getElementById('test3').value;
  localStorage.setItem('toss',inputText);
  location.href='SecondSplash.html';
  // location.href="firstSplash.html";
// const clickBtn=document.getElementById('test3').value;


// switch(clickBtn) {
//   case "햄버거":
//       location.href="video.html";
//       break;
//    case "사과":
//        location.href="apple.html";
//        break;
//    case "빵":   
//        location.href="bread.html";
//        break;
//    default:
//        alert("빵이나 사과나 햄버거를 생각하세요");
//        break;     
// }


}