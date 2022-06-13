var ClickButton = document.getElementsByClassName ("ClickButton")
var text = document.getElementById("ClickButton")
var btn = document.getElementById("Counter")
var ClickCounter = document.getElementsByClassName ("ClickCounter")
var ShowCounter = document.getElementsByClassName ("ShowCounter")
var HideCounter = document.getElementsByClassName ("HideCounter")
var Highscore = document.getElementsByClassName ("Highscore")
var TotalClicks = document.getElementsByClassName ("TotalClicks")
var ClickCounterMechanism = document.getElementsByClassName ("ClickCounterMechanism")
var Stats = document.getElementsByClassName ("Stats")
var ShowStats = document.getElementsByClassName ("ShowStats")


/* var ResetCounter = document.getElementsbyClassName ("ResetCounter") */

console.log ("Loading...")


/* Click counter setup */
ClickCounterMechanism[0].style.display = "none"
Stats[0].style.display = "none"

/* Click Counter */
count = 0
highscore = 0
total = 0
resets = 0
time = 0
btn.onclick = function(){
    count += 1
    btn.innerHTML = "Clicks: " + count
    checkInterval()
}

/* Timer */
var timeInterval
function Timer () {
    console.log ("Timer started", time)
    time += 1
    timerEnd()
}
function checkInterval() {
    if (count === 1) {
        time = 0
        console.log ("timer setup")
        timeInterval = setInterval(Timer, 100)
    }
}

function timerEnd() {
    if (time === 10) {
        console.log ("Timer End")
        updateStats()
        goStats()
    }
}

//////////////////////////////////////




/* On click Button "Reset Counter" */
btn_03.onclick = function Reset(){
    updateStats()
        /* Reset count */
    count = 0
    btn.innerHTML = "Clicks:" + count
    resets += 1
    btn_06.innerHTML = "Resets: " + resets
    console.log ("Click Counter has been reset.")
}

/* Update Stats */
function updateStats() {
    stopTimer()

    total += count
    btn_05.innerHTML = "Total Clicks: " + total

    /* Highscore */
    if (highscore <= count) {
        highscore = count
        console.log ("^.^ New Highscore ^.^")
        btn_04.innerHTML = "Highscore: " + highscore
    }
    console.log ("Highscore: " + highscore)

    /* Reset count */
    count = 0
    btn.innerHTML = "Clicks:" + count
    resets += 1
    btn_06.innerHTML = "Resets: " + resets
    console.log ("Click Counter has been reset.")

    /* Average Score */
    average = 0
    if (resets >= 1) {
        average = total / resets
        btn_09.innerHTML = "Average Score: " + average
        console.log ("Average: " + average)
    }
}




//////////////////////////////////////

/* Stop Timer */
function stopTimer() {
    clearInterval(timeInterval)
    console.log ("Time: ", time / 10, "seconds")
}


/* Show and hide mechanism for the Click Counter */
/*Makes the Counter show */
btn_01.onclick = function() {
    ClickCounterMechanism[0].style.display = "block"
    ShowCounter[0].style.display = "none"
}

/* Makes the Counter hide again */
btn_02.onclick = function() {
    ClickCounterMechanism[0].style.display = "none"
    ShowCounter[0].style.display = "block"
}


/* Show and Hide the Stats screen */
/* Show Stats */
btn_07.onclick = function() {
    goStats()
}
function goStats() {
    Stats[0].style.display = "block"
    ShowStats[0].style.display = "none"
    ClickCounterMechanism[0].style.display = "none"
}

/* Hide Stats */
btn_08.onclick = function() {
    Stats[0].style.display = "none"
    ShowStats[0].style.display = "block"
    ClickCounterMechanism[0].style.display = "block"
}



console.log ("Click counter: Loaded")