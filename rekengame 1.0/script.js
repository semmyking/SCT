const wrapper = document.getElementById('wrapper');
const myAssigment = document.getElementById('myAssigment');
const myAnswer = document.getElementById('myAnswer');
const feedback = document.getElementById('feedback');

let mySum;
let sound = new Audio();

////////////////////////////////
function makeSum() {

var a = Math.floor(Math.random() * 9 + 1);
var b = Math.floor(Math.random() * 9 + 1);
mySum = a + " * " + b;
myAssigment.innerHTML = mySum;
myAnswer.focus();
}
////////////////////////////////


function keyPressed(evt){

if (evt.keyCode == 13) {
  if (eval(mySum) == myAnswer.value) {
    feedback.src = "https://cdn.shopify.com/s/files/1/0930/6934/t/11/assets/order-popup-thankyou.png?2917745227006421658";
    sound.src = "correct.wav";
    sound.play();

  } else {
    feedback.src = "http://www.soprintel.ch/site/wp-content/uploads/2017/01/2017_01-radiation.jpg";
    sound.src = "incorrect.wav";
    sound.play();

  }
window.setTimeout(waiting, 700);
  }
}
//////////////////////////////////

function waiting() {

feedback.src = "https://succesdoorbijles.nl/wp-content/uploads/2017/03/Rekenen-1.png";
myAnswer.value = "";
makeSum();
}

//////////////////////////////////
makeSum();
myAnswer.addEventListener("keydown", keyPressed, false)
