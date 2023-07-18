const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const statusBar = document.querySelector("#statusBar")
const endPoint = 12;
const select = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

function contact() {
    window.open("https://github.com/onlee1425","_blank");
}
function contact1() {
    window.open("https://instagram.com/nusnijkrap?igshid=OGQ5ZDc2ODk2ZA==","_blank");
}
function contact2() {
    window.open("https://cafe.naver.com/ko8524525","_blank");
}
function contact3() {
    window.open("https://www.instagram.com/kumo_kumdo_official/","_blank");
}
function contact4() {
    window.open("https://www.youtube.com/@Barefoot_Couple","_blank");
}

function calResult(){
    console.log(select);
    var result = select.indexOf(Math.max(...select));
    return result;
}

function setResult(){
    let point = calResult();
    const resultName = document.querySelector('.resultName');
    resultName.innerHTML = infoList[point].name;

    var resultImg = document.createElement('img');
    const imgDiv = document.querySelector('#resultImg');
    var imgURL = 'img/img-' + point + '.png';
    resultImg.src = imgURL;
    resultImg.alt = point;
    resultImg.classList.add('img-fluid');
    imgDiv.appendChild(resultImg);

    const resultDesc = document.querySelector('.resultDesc');
    resultDesc.innerHTML = infoList[point].desc;

}

function goResult() {
    qna.style.WebkitAnimation = "fadeOut 1s";
    qna.style.animation = "fadeOut 1s";
  
    setTimeout(() => {
      result.style.WebkitAnimation = "fadeIn 1s";
      result.style.animation = "fadeIn 1s";
      qna.style.display = "none";
      result.style.display = "block";
  
      console.log(select);
      setResult();
    }, 450);
  }


function addAnswer(answerText,qIdx,idx){
    var a = document.querySelector('.answerBox');
    var answer = document.createElement('button');
    answer.classList.add('answerList');
    answer.classList.add('my-3');
    answer.classList.add('py-3');
    answer.classList.add('mx-auto');
    answer.classList.add('fadeIn');

    a.appendChild(answer);
    answer.innerHTML = answerText;

    answer.addEventListener("click", function(){
    var children = document.querySelectorAll('.answerList');
    for(let i = 0; i < children.length; i++){
      children[i].disabled = true;
      children[i].style.WebkitAnimation = "fadeOut 0.5s";
      children[i].style.animation = "fadeOut 0.5s";
    }
     setTimeout(() => {
        var target = qnaList[qIdx].a[idx].type;
        for(let i = 0; i < target.length; i++){
          select[target[i]] += 1;
        }
  
        for(let i = 0; i < children.length; i++){
          children[i].style.display = 'none';
        }
        goNext(++qIdx);
    },450)
  }, false);
}

function goNext(qIdx){
    if(qIdx === endPoint){
        goResult();
        return;
    }

    var q = document.querySelector('.qBox');
    q.innerHTML = qnaList[qIdx].q;
    for(let i in qnaList[qIdx].a){
        addAnswer(qnaList[qIdx].a[i].answer, qIdx,i);
    }

    var status = document.querySelector('.statusBar');
    status.style.width = (100/endPoint) * (qIdx+1) + '%';
}

function showImage() {
    main.style.display = "none";
    image.style.display = "block";
    main.style.animation = "fadeOut 1s";
    image.style.animation = "fadeIn 1s";
    statusBar.style.display = "none";
    qna.style.animation = "fadeIn 1s";
    qna.style.display = "block";
}
  
function hideImage() {
    image.style.animation = "fadeOut 1s";
    setTimeout(() => {
        image.style.display = "none";
        qna.style.display = "block";
        statusBar.style.display = "block";
        
    }, 450);
}

function begin() {
    hideImage();
    main.style.animation = "fadeOut 1s";
    setTimeout(() => {
        qna.style.animation = "fadeIn 1s";
        qna.style.display = "block";
        let qIdx = 0;
        goNext(qIdx);
    }, 450);
}
