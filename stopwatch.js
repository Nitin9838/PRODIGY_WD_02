document.addEventListener("DOMContentLoaded", () => {
    // Initialize time variables
    let ms = 0, s = 0, m = 0, h = 0;
    let timer;

    // Cache DOM elements
    const display = document.querySelector(".timer-Display");
    const laps = document.querySelector(".laps");

    // Add event listeners for buttons
    document.getElementById("startTimer").addEventListener("click", start);
    document.getElementById("pauseTimer").addEventListener("click", pause);
    document.getElementById("resetTime").addEventListener("click", reset);
    document.getElementById("restartTimer").addEventListener("click", restart);
    document.getElementById("lap").addEventListener("click", lap);
    document.getElementById("resetLap").addEventListener("click", resetLap);

    // Start the timer
    function start() {
        if (!timer) {
            timer = setInterval(run, 10);
        }
    }

    // Update the timer every 10 milliseconds
    function run() {
        ms++;
        if (ms == 100) {
            ms = 0;
            s++;
        }
        if (s == 60) {
            s = 0;
            m++;
        }
        if (m == 60) {
            m = 0;
            h++;
        }

        // Format the display
        display.innerHTML = getTimer();
    }

    // Format the timer string
    function getTimer() {
        return `${h < 10 ? "0" + h : h} : ${m < 10 ? "0" + m : m} : ${s < 10 ? "0" + s : s} : ${ms < 10 ? "0" + ms : ms}`;
    }

    // Pause the timer
    function pause() {
        stopTimer();
    }

    // Stop the timer
    function stopTimer() {
        clearInterval(timer);
        timer = null;
    }

    // Reset the timer to zero
    function reset() {
        stopTimer();
        ms = 0;
        s = 0;
        m = 0;
        h = 0;
        display.innerHTML = getTimer();
    }

    // Restart the timer
    function restart() {
        reset();
        start();
    }

    // Record a lap time
    function lap() {
        if (timer) {
            const li = document.createElement("li");
            li.textContent = getTimer();
            laps.appendChild(li);
        }
    }

    // Reset lap times
    function resetLap() {
        laps.innerHTML = "";
    }
});
