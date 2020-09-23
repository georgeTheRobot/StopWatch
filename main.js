window.onload = function(){

  var seconds = 00;
  var tens = 00;

  var appendTens = document.getElementById('tens');
  var appendSeconds = document.getElementById('seconds');
  var buttonStart = this.document.getElementById('button-start');
  var buttonStop = this.document.getElementById('button-stop');
  var buttonReset = this.document.getElementById('button-reset');

  var Interval;

  //First step
  //first function that start timer working

  function startTimer(){
    tens++;
    //console.log(tens);
    if(tens < 9){
      appendTens.innerHTML = '0' + tens;
    }
    if(tens > 9){
      appendTens.innerHTML = tens;
    }
    if(tens > 99){
      seconds++;
      console.log(seconds);
      appendSeconds.innerHTML = '0' + seconds;
      tens = 0;
      appendTens.innerHTML = '0' + tens;
    }
    if(seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
  }

  //button to start startTimer
  buttonStart.onclick = function(){
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  }

  //button to stop timer
  buttonStop.onclick = function(){
    clearInterval(Interval);
  }

  //button to reset timer
  buttonReset.onclick = function(){
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
  }
}
