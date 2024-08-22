let randomNumber =(parseInt(Math.random()*10 +1));
 const submit=document.querySelector('#subt')
 //console.log(submit)
 const userInpute=document.querySelector('#guessField')
 //console.log(userInpute);
 const guessSlot=document.querySelector('.guesses')
 //console.log(guessSlot);
 
 const remaining=document.querySelector('.lastResult')
// console.log(remaining)
const lowerHigh=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')

const p=document.createElement('p')

let prevGuess = []
let numGuess= 1
let playGame= true

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
       const guess= parseInt(userInpute.value)
       console.log(guess);
       
       validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter the valid no:')
    }else if(guess<1){
        alert('please enter a number more then 1:')
    }
    else if(guess>100){
        alert('please enter a number less than 100:')
    } else {
        prevGuess.push(guess)
        if(numGuess==11){
            displayGuess(guess)
            displayMessage('Game Over. Random number was ${randomNumber}')
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
    
}

function checkGuess(guess) {
    if(guess==randomNumber){
        displayMessage(`WOW You guessed it right`)
        endGame()
    }else if (guess<randomNumber){
        displayMessage(`Number is Too Low`)
    } else if (guess>randomNumber){
        displayMessage(`Number is Tooo High`)
    }
}
 function displayGuess(guess){   //cleanupGuess
    userInpute.value=' '
    guessSlot.innerHTML+=`${guess} `
    numGuess++;
    remaining.innerHTML=`${11- numGuess}`
 }

 function displayMessage(message){
    lowerHigh.innerHTML=`<h2>${message}</h2>`
 }
 function endGame(){
    userInpute.value=' '
    userInpute.setAttribute('disabled',' ' )
    p.classList.add('button')
    p.innerHTML= `<h2 id="newGame"> Sart new game </h2>`
    startOver.appendChild(p)
    playGame=false
    newGame()
 }

 function newGame(){
   const newgameButton= document.querySelector('#newGame')
   newgameButton.addEventListener('click', function(e){
    randomNumber =(parseInt(Math.random()*10 +1));
    prevGuess=[]
    numGuess=1
    guessSlot.innerHTML=' '
     remaining.innerHTML=`${11- numGuess}`;
     userInpute.removeAttribute('disabled')
     startOver.removeChild(p)
    playGame=true
   })

 }

 