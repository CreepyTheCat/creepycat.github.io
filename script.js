const titleElement = document.getElementById('glitchy-title');
let glitchInterval;

function glitch() {
  const glitchedText = 'ggg';
  for (let i = 0; i < titleElement.textContent.length; i++) {
    const char = titleElement.textContent[i];
    if (Math.random() < 0.5) {
      glitchedText += String.fromCharCode(char.charCodeAt(0) + Math.floor(Math.random() * 10));
    } else {
      glitchedText += char;
    }
  }
  titleElement.textContent = glitchedText;
  glitchInterval = setTimeout(glitch, 2000); // slow down the glitch effect to 2 seconds
}

glitch();
