//creating a function to hide and show hideDiv2, hideGameContainer and hideGameResultContainer
function hideDiv(){//name of function
  document.getElementById("hideDiv2"); 
  //creating if to hide gameDiv1 and show gameDiv2
  if(document.getElementById("hideDiv2").style.display == "none"){
    document.getElementById("hideGameContainer").style.display = "none";
    document.getElementById("hideDiv2").style.display ="block";
    document.getElementById("hideGameResultContainer").style.display ="none";
  }else{ //showing gameDiv1 and hiding gameDiv2 again
    document.getElementById("hideGameContainer").style.display = "block";
    document.getElementById("hideGameResultContainer").style.display ="block";
    document.getElementById("hideDiv2").style.display = "none";
  }
}
//creating random guessing game with Math.floor(Math.random())
function playGuessingGame(){//name of function
  //creating variables
  var clickButton=document.getElementById('submitbttn');
  var showOutPut=document.getElementById('showmsg');
  var showOutPut2=document.getElementById('showmsg2');
  var userGuesses = document.getElementById('userguess').value
  var showCorrectGuess=document.getElementById('rightGuesses');
  var showWrongGuess=document.getElementById('wrongGuesses');
  var showRightNumber=document.getElementById('rightNumber');
  var showRightPicture=document.getElementById('pictureNumber');
  var pictureName = ["","Guardian Angel", "Naked Beauty", "Morder Art", "van Gogh", "Soul Eater", "Chaos"];
  //creating variable for random number of 21
  var randomNumGuess=[Math.floor(Math.random() * 6)];
  //creating variable for results of guess
  var resultsGuess=[0,0];

  //creating output to show guess is right
  if(userGuesses==randomNumGuess){
    showOutPut.innerHTML='Great job!, you guessed the right number';
    resultsGuess[0]++
  //creating output if guess is too low
  }else if(userGuesses<randomNumGuess){
    showOutPut.innerHTML="Sorry, your guess was too low!";
    showOutPut2.innerHTML="try again!";
    resultsGuess[1]++;//if guess is wrong +1 wrongGuesses
  //creating output if guess is too high
  }else if(userGuesses>randomNumGuess){
    showOutPut.innerHTML="Sorry, your guess was too low!";
    showOutPut2.innerHTML="try again!";
    resultsGuess[1]++;//if guess is wrong +1 wrongGuesses
  }
  //putting all results into the table
  showCorrectGuess.innerHTML=resultsGuess[0];
  showWrongGuess.innerHTML=resultsGuess[1];
  showRightNumber.innerHTML=randomNumGuess;
  showRightPicture.innerHTML=pictureName[userGuesses];
 }
