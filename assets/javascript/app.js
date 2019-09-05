// Default: have page one showing for 30 seconds and page two hidden    
$(".pageTwo").hide()

function pageOneTimer() {
    setTimeout(pageTwo, 25 * 1000)
}
pageOneTimer()

// Make page one hidden and make page two visible
function pageTwo() {
    $(".pageOne").hide()
    $(".pageTwo").show()
}

// Counter for time
var timerInt;
var time = 15;

function counterDown() {
    if (time > 0) {
        time--;
        $(".timerText").text(time)
    } else {
        $(".timerTextHeader").html("Times up! Here are the correct answers!")

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

function startTimer() {
    timerInt = setInterval(counterDown, 1000)
}
startTimer()

var score = 0;

