const quotes = [
    "Keep going, you are getting there!",
    "Believe in yourself!",
    "Every step counts!",
    "Stay positive, work hard, make it happen!",
    "You got this!",
    "Don't stop until you're proud!",
    "Success is the sum of small efforts, repeated day in and day out.",
    "Push yourself, because no one else is going to do it for you."
];

function displayRandomQuote() {
    const quoteDisplay = document.getElementById("quote-display");
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.textContent = quotes[randomIndex];
}
displayRandomQuote();
function showCompliment() {
    const compliments = [
        "You're doing great!",
        "Keep it up!",
        "You're amazing!",
        "Fantastic job!",
        "You're a star!",
        "You've got this!",
        "You're making progress!",
        "Your hard work is paying off!"
    ];
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    alert(randomCompliment);
}

// Set an interval to show a compliment every 2 minutes (120000 milliseconds)
setInterval(showCompliment, 120000);
