const mijnOpgave = document.getElementById('mijnOpgave');
const mijnAntwoord = document.getElementById('mijnAntwoord');
const backfeed = document.getElementById('backfeed');

let mijnSommen = [];
let teller = 0;

for(let i=0; i<10; i++){
  let mijnSom = {};
  mijnSom.getalA = maakGetal();
  mijnSom.getalB = maakGetal();
  mijnSom.goedeAntwoord = mijnSom.getalA * mijnSom.getalB;
  mijnSommen.push(mijnSom);
  //console.log(mijnSom);
}

backfeed.style.display = "none";
mijnOpgave.innerHTML = mijnSommen[0].getalA + " X " + mijnSommen[0].getalB;
// mijnSommen[teller].mijnAntwoord = "joi";
// console.log(mijnSommen);
// console.log(mijnsommen[teller]);

function invoer(event)
{
  if (event.keyCode === 13)
  {
    mijnSommen[teller].mijnAntwoord = mijnAntwoord.value;
    mijnAntwoord.value = "";
    teller++;
    console.log("wut");
    if (teller >= mijnSommen.length)
    {
      eindeSpel();

    }
    else
    {
      mijnOpgave.innerHTML = mijnSommen[teller].getalA + " X " + mijnSommen[teller].getalB;
    }

  }
}

function eindeSpel()
{
console.log(mijnSommen)
mijnOpgave.style.display = "none";
mijnAntwoord.style.display = "none";
backfeed.style.display ="block";

let mijnTabel = document.createElement('table');
mijnTabel.setAttribute('border','1');
for(let i=0; i<10; i++)
{
let row = mijnTabel.insertRow();
if(mijnSommen[i].goedeAntwoord == mijnSommen[i].mijnAntwoord)
{
  row.ClassName= "goed";
}else {
  row.ClassName="fout";
}
let cell1 = row.insertCell();
cell1.innerHTML = mijnSommen[i].getalA + " X " + mijnSommen[i].getalB + " = " + mijnSommen[i].goedeAntwoord;
let cell2 = row.insertCell();
cell2.innerHTML = mijnSommen[i].mijnAntwoord;

}
backfeed.appendChild(mijnTabel);
}

function maakGetal(){
  let mijnGetal = Math.floor(Math.random()*9)+1;
  return mijnGetal;
}

mijnAntwoord.addEventListener('keydown',invoer,false);

// const myAssignment = document.getElementById('myAssignment');
// const myInput = document.getElementById('myInput');
// const feedback = document.getElementById('feedback');
//
// let assignments = [];
// let counter = 0;
//
// function init(){
//   for(i=0; i<10; i++){
//     assignments.push(makeSum());
//   // console.log(makeSum());
//   }
//   console.log(assignments());
//   console.log(assignments());
// }
//
// function inputHandler(evt){
//   //
// }
//
// function makeSum(){
//   let mySum = {};
//   mySum.numA = getNumber;
//   mySum.numB = getNumber
//   mySum.ans = mySum.numA * mySum.numB;
//   return getNumber();
// }
//
// function evaluate(){
//
// }
//
// function getNumber(){
//   let number = Math.floor(Math.random()*9)+1;
//   return number;
// }
//
// myInput.addEventListener('keydown',inputHandler,false);
//
// init();
