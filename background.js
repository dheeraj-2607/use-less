const animals = [ 
    'images/an1.png',
    'images/an5.png',
    'images/an4.png',
    'images/an3.png',
    'images/an2.png',
   
  ];
  
  function createPixelAnimal() {
    const animal = document.createElement('div');
    animal.classList.add('pixel-animal');
  
    const randomIndex = Math.floor(Math.random() * animals.length);
    animal.style.backgroundImage = `url(${animals[randomIndex]})`;
  
    animal.style.top = Math.random() * window.innerHeight + 'px';
    animal.style.left = Math.random() * window.innerWidth + 'px';
  
    document.querySelector('.background-animation').appendChild(animal);
  
    animateAnimal(animal);
  }
  
  function animateAnimal(animal) {
    const duration = Math.random() * 5 + 3; 
    const endX = Math.random() * window.innerWidth;
    const endY = Math.random() * window.innerHeight;
  
    animal.animate([
      { transform: 'translate(0, 0)' },
      { transform: `translate(${endX}px, ${endY}px)` }
    ], {
      duration: duration * 1000, 
      easing: 'linear',
    });
  
    setTimeout(() => {
      animal.remove();
    }, duration * 10000);
  }
  
  setInterval(createPixelAnimal, 2); 
  
