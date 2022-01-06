//Fetching elements
const check = document.querySelector('.check');
const btns = document.querySelectorAll('.btn');
const input = document.querySelector('.guess');
const message = document.querySelector('.message2');
const guessTitle = document.querySelector('.guess-title');
const body = document.querySelector('body');
const number = document.querySelector('.number');
const score = document.querySelector('.score');
const highscored = document.querySelector('.highscored');
let highScores;

//Generate random number

//Random number from 1-51
const randomNumber = Math.round(Math.random() * 50) + 1;
console.log(randomNumber);

//Looop through buttons and add click event
for(let i =0; i < btns.length; i++) {
    btns[i].addEventListener('click', (e) => {
        //Checking if any button contains class .check and if do
        if(btns[i].classList.contains('check')){
            let inputNum = input.value;
            //Check if input number is up or down by one
            if(inputNum == randomNumber + 1 || inputNum == randomNumber - 1){
                displayMessage(message, `Pretty warm right thurrrr right thurrrr`);
            //If input is greater than generated hidden number
            } else if( inputNum > randomNumber ){
                displayMessage(message, `Lower`);
            //If input is less than generated hidden number
            } else if( inputNum < randomNumber ){
                displayMessage(message, `Higher`);
            //If number is guessed
            } else {
                //Change message
                displayMessage(message, `Success!`);
                //Display hidden number
                displayMessage(number, randomNumber);
                //Change background when number is guessed
                body.style.background = 'Green';
                //Update score
                displayMessage(score, randomNumber);
                //Change title
                displayMessage(guessTitle, `Correct`);
                
                //Check if array exists in localStorage
                (localStorage.getItem('highscores')) ? highScores = JSON.parse(localStorage.getItem('highscores')) : highScores = [];

                //Update array with new values
                highScores.push(randomNumber);
                localStorage.setItem('highscores', JSON.stringify(highScores));
                bigestNum();
            }   
        } else if (btns[i].classList.contains('reset')){
                //Clear storage
                localStorage.clear();
        }
    });
}

//Function display message
function displayMessage(className, output){
    className.innerHTML = output;
}

//Refresh page and clear inputs
function clearAll() {
    //Refresh browser
    window.location.reload();
}

//Function that finds biggest number in localStorage array
function bigestNum(){
    //Call from storage
    let final = JSON.parse(localStorage.getItem('highscores'));
    //Solves the error "cannot read property length" if array is empty - If not empty ->
    if(!final == ['']){
        //->Loop through values
        for(let i = 0; i < final.length; i++){
            //->Display highest value
             //Change background when number is guessed
            displayMessage(highscored, Math.max(...final));
        } 
    }
}
bigestNum();




