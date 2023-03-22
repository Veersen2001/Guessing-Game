const result = document.getElementById("result");
const inputbox = document.getElementById("inputbox");
const btn = document.getElementById("button");
let range = document.getElementById("range");
let tattempt = document.getElementById("attempt");
const Restart = document.getElementById("restart");
let select = document.getElementById('select');
let computerGuess = null;
let count = 0;
select.addEventListener('click', ()=>{
  if(select.value=='easy')
  {
    computerGuess = Math.floor(Math.random()*10);
    
    range.value='0-10';
  }
  else if(select.value=='medium')
  {
    computerGuess = Math.floor(Math.random()*50);
    range.value='0-50';
  }
  else{
    computerGuess = Math.floor(Math.random()*100);
    range.value='0-100';
  }
})


btn.addEventListener("click", () => {
  const userGuess = Number(inputbox.value);

  if(select.value == ''){
    alert("Please Select Level First🤦‍♂️");
}
else{
  if (computerGuess === userGuess) {
    result.innerText = "Congratulation🎉💫You won the game";
    count = count + 1;
  } else if (computerGuess > userGuess) {
    result.innerText = "Sorry! 🫡please guess larger number";
    count = count + 1;
  } else {
    result.innerText = "Sorry!😒 please guess Smaller number";
    count = count + 1;
  }
  tattempt.value = count;
}
  
});

Restart.addEventListener("click", () => {
  tattempt.value = 0;
  inputbox.value = null;
  range.value='-'
  select.value=''
  result.innerText="Guess the Number"
});