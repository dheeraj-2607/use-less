const compliments = [
    "You're doing great!",
    "Keep up the good work!",
    "You're a star!",
    "Believe in yourself!",
    "You've got this!",
    "You're amazing!",
    "Stay positive!",
    "You make a difference!",
    "You're capable of incredible things!",
    "Your effort is commendable!"
  ];
  
  function showCompliment() {
    const complimentPopup = document.getElementById('compliment-popup');
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    
    complimentPopup.textContent = randomCompliment;
    complimentPopup.style.display = 'block';
  
    setTimeout(() => {
      complimentPopup.style.display = 'none';
    }, 5000);
  }
  
  setInterval(showCompliment, 60000);
  
