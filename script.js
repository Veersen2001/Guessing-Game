const inputBox = document.getElementById('inputBox');
const resultbtn = document.getElementById('ans');
const restartBtn = document.getElementById('restart');
const matchResult = document.getElementById('matchResult');

const range = document.getElementById('range');
let attempt = document.getElementById('attempt');
const select = document.getElementById('select');

let count = 0;
let computerGuess=null;
select.addEventListener('click',()=>
{
 

 if(select.value == 'hard')
 {
      computerGuess = Math.floor(Math.random() * 100);
     range.innerText = '0-100';

     // default math value 0 or 1 or floor 6.7 = 6

 }
 else if(select.value == 'Medium')
 {
     computerGuess = Math.floor(Math.random() * 50);
        range.innerText = '0-50';
       
        
    // // default math value 0 or 1 or floor 6.7 = 6
 }
 else
 {
     computerGuess = Math.floor(Math.random() * 10);
       range.innerText = '0-10';

 }

});




resultbtn.addEventListener('click',()=>{
    const userGuess = Number(inputBox.value);
    console.log(computerGuess);

    if(select.value == 'select_option'){
        alert("please Select Level");
        count = 0;
    }
    // Number() -> change string to number
    if(userGuess === computerGuess)
    {
        attempt.value = ++count;
        matchResult.innerText = ' Congratulation🎉🎊! Won the match';
    } 
    else if (computerGuess > userGuess) {
        attempt.value = ++count;
        matchResult.innerText = "Guess a greater number";
    } 
    else {
        attempt.value = ++count;
        matchResult.innerText = "Guess a smaller number";
    }
});


restartBtn.addEventListener('click',() =>{

    // inputBox.value = null;
    // count = 0;
    // attempt.value = 0;
    window.location.reload();
    


})



