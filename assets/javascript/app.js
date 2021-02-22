var correct = 0;
var incorrect = 0;

function countDown(i) {
  var int = setInterval(function() {
    $("#countdown").text("Time Left: " + i);
    console.log(i);
    i-- || clearInterval(int); //if i is 0, then stop the interval
  }, 1000);
  console.log(i);

}

countDown(19);

window.setTimeout(function() {
    
    $("#question0").hide();
    
    console.log("timed out!");
    if ($("#question1-1").prop("checked")) {
      correct++;
    } else {
      incorrect++;
    }
  
    if ($("#question2-1").prop("checked")) {
      correct++;
    } else {
      incorrect++;
    }
    if ($("#question3-2").prop("checked")) {
      correct++;
    } else {
      incorrect++;
    }
    if ($("#question4-4").prop("checked")) {
      correct++;
    } else {
      incorrect++;
    }
    if ($("#question5-3").prop("checked")) {
      correct++;
    } else {
      incorrect++;
    }
    $("#correct").text("Correct: " + correct);
    $("#incorrect").text("Incorrect: "+ incorrect);
    
    if(correct> 2){
        $("#yoda").html("<img src='assets/images/hqdefault.jpg' alt=yodidgood'>")
    }else{
        $("#yoda").html("<img src='assets/images/tenor.gif' alt='yodasad'>")
    }
    console.log(correct);
    console.log(incorrect);
    
  }, 10000);
