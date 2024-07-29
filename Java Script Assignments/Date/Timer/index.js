// Target date for Eid ul-Adha (July 20th, 2024)
const eidUlAdhaDate = new Date("2024-07-20T00:00:00Z").getTime();

// Update the countdown timer every second
const timerInterval = setInterval(function() {
    // Get the current date and time
    const now = new Date().getTime();
    
    // Calculate the time remaining until Eid ul-Adha
    const timeRemaining = eidUlAdhaDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Display the countdown timer
    const timerElement = document.getElementById("timer");
    timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // Check if the countdown has reached zero
    if (timeRemaining <= 0) {
        clearInterval(timerInterval); // Stop the timer
        timerElement.innerHTML = "Eid Mubarak!"; // Display a message
    }
}, 1000);
