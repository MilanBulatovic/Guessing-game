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
function randomNum() {
    //Calculate random number from 1-? detaljno provjeriti
    const randomNumber = Math.round(Math.random() * 50) + 1;
    console.log(randomNumber);
    

    for(let i =0; i < btns.length; i++) {
        btns[i].addEventListener('click', (e) => {
             
            // if(btns[i].classList.contains('again')){
            //     //Refresh page and clear inputs, storage stays
            //     clearAll();
                
            //Checking if any button contains class check and if do
            if(btns[i].classList.contains('check')){
                let inputNum = input.value;
                //Check if input number is up or down by one
                if(inputNum == randomNumber + 1 || inputNum == randomNumber - 1){
                    message.innerHTML = `Pretty warm right thurrrr right thurrrr`;
                //If input is greater than generated hidden number
                } else if( inputNum > randomNumber ){
                    message.innerHTML = `Lower`;
                //If input is less than generated hidden number
                } else if( inputNum < randomNumber ){
                    message.innerHTML = `Higher`;
                //If number is guessed
                } else {
                    //Change message
                    message.innerHTML = `Success!!!`;
                    //Display hidden number
                    number.innerHTML = randomNumber;
                    //Change background when number is guessed
                    body.style.background = 'Green';
                    //Update score
                    score.innerHTML = randomNumber;
                    //Change title
                    guessTitle.innerHTML = `Correct!`;
                   
                    
                    //Check if array exists in localStorage
                    if (localStorage.getItem('highscores')) {
                        highScores = JSON.parse(localStorage.getItem('highscores'));
                        
                    } else {
                        //Set empty array
                        highScores = [];
                    }

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
}
randomNum();

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
            highscored.innerHTML = Math.max(...final);
        } 
    }
}
bigestNum();




