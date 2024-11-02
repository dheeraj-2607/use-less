document.getElementById("start").addEventListener("click", () => {
    const workDuration = document.getElementById("work-duration").value;
    const breakDuration = document.getElementById("break-duration").value;
    window.location.href = `countdown.html?work=${workDuration}&break=${breakDuration}`;
  });
  const numPixels = 100; 
const backgroundAnimation = document.querySelector('.background-animation');

backgroundAnimation.innerHTML = '';

for (let i = 0; i < numPixels; i++) {
  const pixel = document.createElement('div');
  pixel.classList.add('pixel');
  pixel.style.left = Math.random() * 100 + 'vw'; 
  pixel.style.top = Math.random() * 100 + 'vh'; 
  pixel.style.animationDelay = Math.random() * 2 + 's';
  
  backgroundAnimation.appendChild(pixel);
}
