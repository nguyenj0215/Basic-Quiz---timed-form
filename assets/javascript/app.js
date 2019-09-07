$(document).ready(function () {

    // Default: have page one showing for 30 seconds and page two hidden ---------------
    $(".pageTwo").hide()

    var stopPageTimeout;

    function pageOneTimer() {

        stopPageTimeout = setTimeout(pageTwo, 25 * 1000)
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
    var correct = 0;

    function counterDown() {

        if (time > 0) {
            time--;
            $(".timerText").text(time)
            
        }
        else {

            $(".forPage1").hide()
            $(".forPage2").show()

            clearInterval(timerInt)

            //Checking radio buttons for correct box checked-------------------------------------
            if ($('input[name="q1Ans"]:checked').val() == "tor") {
                correct++;
                count++
            }

            if ($('input[name="q2Ans"]:checked').val() == "ne") {
                correct++;
                count++
            }

            if ($('input[name="q3Ans"]:checked').val() == "oak") {
                correct++;
                count++
            }

            if ($('input[name="q4Ans"]:checked').val() == "tex") {
                correct++;
                count++
            }

            $(".score").text(correct)

        }

    }

    function startTimer() {

        timerInt = setInterval(counterDown, 1000)
    }

    startTimer()

    //Submit button function -----------------------------------------------
    $(".submit").on("click", function submit() {

        clearInterval(timerInt)
        clearTimeout(stopPageTimeout)

        $(".pageOne").hide()
        $(".pageTwo").show()

        if ($('input[name="q1Ans"]:checked').val() == "tor") {
            correct++;
            count++
        }

        if ($('input[name="q2Ans"]:checked').val() == "ne") {
            correct++;
            count++
        }

        if ($('input[name="q3Ans"]:checked').val() == "oak") {
            correct++;
            count++
        }

        if ($('input[name="q4Ans"]:checked').val() == "tex") {
            correct++;
            count++
        }

        $(".score").text(correct)

    })



    //Restart game function------------------------------------------------------------
    $(".restart").on("click", function restart() {

        clearInterval(timerInt)
        clearTimeout(stopPageTimeout)

        pageOneTimer()

        startTimer()

        counterDown()

        correct = 0
        time = 25

        $(".pageOne").show()
        $(".pageTwo").hide()

        $(".forPage1").show()
        $(".forPage2").hide()
        $(".timerText").text("25")

        $(".radioBtn").prop('checked', false);

    })
})