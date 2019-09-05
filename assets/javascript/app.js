// Default: have page one showing for 30 seconds and page two hidden ---------------
$(".pageTwo").hide()

function pageOneTimer() {
    setTimeout(pageTwo, 25 * 1000)
}
pageOneTimer()

// Make page one hidden and make page two visible----------------------------------
function pageTwo() {
    $(".pageOne").hide()
    $(".pageTwo").show()
}

// Counter for time----------------------------------------------------------------
var timerInt;
var time = 25;
var score = 0;

function counterDown() {
    if (time > 0) {
        time--;
        $(".timerText").text(time)
    } else {
        $(".forPage1").hide()
        $(".forPage2").show()

        clearInterval(timerInt)

        //Checking radio buttons for correct box checked-----------------------------------
        if ($('input[name="q1Ans"]:checked').val() == "tor") {
            score++;
        }
        if ($('input[name="q2Ans"]:checked').val() == "ne") {
            score++;
        }
        if ($('input[name="q3Ans"]:checked').val() == "oak") {
            score++;
        }
        if ($('input[name="q4Ans"]:checked').val() == "tex") {
            score++;
        }

        $(".score").text(score)

    }
}

function startTimer() {
    timerInt = setInterval(counterDown, 1000)
}
startTimer()


//Restart game function------------------------------------------------------------
$(".restart").on("click", function restart() {

    score = 0
    time = 25

    $(".pageOne").show()
    $(".pageTwo").hide()

    $(".forPage1").show()
    $(".forPage2").hide()
    $(".timerText").text("25")

    function pageOneTimer() {
        setTimeout(pageTwo, 25 * 1000)
    }
    pageOneTimer()

    function startTimer() {
        timerInt = setInterval(counterDown, 1000)
    }
    startTimer()

    var timerInt;
var time = 25;
var score = 0;

function counterDown() {
    if (time > 0) {
        time--;
        $(".timerText").text(time)
    } else {
        $(".forPage1").hide()
        $(".forPage2").show()

        clearInterval(timerInt)

        if ($('input[name="q1Ans"]:checked').val() == "tor") {
            score++;
        }
        if ($('input[name="q2Ans"]:checked').val() == "ne") {
            score++;
        }
        if ($('input[name="q3Ans"]:checked').val() == "oak") {
            score++;
        }
        if ($('input[name="q4Ans"]:checked').val() == "tex") {
            score++;
        }

        $(".score").text(score)

    }
}

$(".radioBtn").prop('checked', false);

})