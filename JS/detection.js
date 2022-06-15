// let detections = [];

// const videoElement = document.getElementById('video');

// // function gotFaces(results) {
// //   detections = results;
// //   // console.log(detections);
// // }

// // const faceMesh = new FaceMesh({locateFile: (file) => {
// //   return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
// // }});

// // faceMesh.setOptions({
// //   maxNumFaces: 1,
// //   minDetectionConfidence: 0.5,
// //   minTrackingConfidence: 0.5
// // });
// // faceMesh.onResults(gotFaces);

// const camera = new Camera(videoElement, {
//   onFrame: async () => {
//     await faceMesh.send({image: videoElement});
//   },
//   width: 1280,//Or 640
//   height: 720 // Or 480
// });
// camera.start();


// 위의 주석은 기존의 코드.

let capture;
let faceapi;
let img;
let stack;
let newTag;
let i=0;


function createShake(){
  document.getElementById("shake").style.display='block';
}
function firstText(){
  document.getElementById("first").style.display="none";
}

setTimeout(firstText,4000); // 얼굴인식 텍스트 시간
setTimeout(createShake,15000); // 여기가 얼굴을 흔들어주세요가 생성되는 부분이여~~ 허허허허.


// 메인으로 돌아가는 함수. 
function go_url(){
      location.href="LastSplash.html";
}

function preload()
{
  if(localStorage.getItem('toss') =='사과'){
    img=loadImage("onImage/apple.png");
    stack=localStorage.getItem('toss');
  }else if(localStorage.getItem('toss') =='햄버거'){
    img=loadImage("onImage/burger.png");
    stack=localStorage.getItem('toss');
  }else if(localStorage.getItem('toss') =='빵'){
    img=loadImage("onImage/bread.png");
    stack=localStorage.getItem('toss');
  }else if(localStorage.getItem('toss') =='아이스크림'){
    img=loadImage("onImage/icecream.png");
    stack=localStorage.getItem('toss');
  }else if(localStorage.getItem('toss') =='치킨'){
    img=loadImage("onImage/chicken.png");
    stack=localStorage.getItem('toss');
  }
  localStorage.setItem(stack,stack);
  
  setTimeout(go_url,20000); // 1000 => 1s //얼굴인식 화면이 메인으로 넘어가는데 걸리는 시간
}    

function setup(){
    let canvas=createCanvas(700,700); //둘러싼 박스 크기
    canvas.parent('myContainer');
    capture=createCapture(VIDEO);
    capture.hide();
    faceapi=ml5.faceApi(capture,modelReady);
}


function modelReady(){
    print("OK");
    faceapi.detectSingle(goResult);
}

function goResult(err,result){
    background(0); //백그라운드 색
    image(capture,20,200); //위치 이동
    // tint(180,180); // 투명도.
    if(result){
      print(result);
      noFill();
      strokeWeight(0);
      let face=result.alignedRect.box;
      let x=face._x;
      let y=face._y;
      let w=face._width;
      let h=face._height;
      rect(x,y,w,h);
      image(img,x+15  ,y,w,h);
    }
  faceapi.detectSingle(goResult);
}