


function countDown(i) {
    var int = setInterval(function () {
        $("#countdown").text("Time Left: "+i);
        // console.log(i);
        i-- || clearInterval(int);  //if i is 0, then stop the interval
    }, 1000);
}
countDown(30);


