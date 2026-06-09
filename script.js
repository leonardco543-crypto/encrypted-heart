const btn = document.getElementById("decryptBtn");

btn.addEventListener("click", () => {

document.getElementById("terminal").style.display = "none";

const container = document.getElementById("heartContainer");

container.style.display = "block";

const width = window.innerWidth;
const height = window.innerHeight;

for(let t=0; t<Math.PI*2; t+=0.03){

let x = 16 * Math.pow(Math.sin(t),3);

let y =
13 * Math.cos(t)
- 5 * Math.cos(2*t)
- 2 * Math.cos(3*t)
- Math.cos(4*t);

const word = document.createElement("div");

word.className = "word";

word.innerText = "i love you";

word.style.left =
(width/2 + x*25) + "px";

word.style.top =
(height/2 - y*25) + "px";

container.appendChild(word);
}

const msg = document.createElement("div");

msg.className = "centerMessage";

msg.innerHTML = `
I LOVE YOU ❤️
<br>
FOREVER
`;

container.appendChild(msg);

createParticles();

});

// Detect if device is mobile
function isMobileDevice(){
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
         (window.innerWidth <= 768 && window.innerHeight <= 1024);
}

function createParticles(){

const isMobile = isMobileDevice();

// Reduce particle count on mobile for better performance
const particleCount = isMobile ? 40 : 100;

for(let i=0;i<particleCount;i++){

const p = document.createElement("div");

p.innerHTML = "❤️";

p.style.position = "absolute";

p.style.left =
Math.random()*window.innerWidth+"px";

p.style.top =
window.innerHeight+"px";

p.style.opacity = Math.random();

p.style.fontSize =
Math.random()*20+10+"px";

document.body.appendChild(p);

animateParticle(p, isMobile);
}
}

function animateParticle(el, isMobile){

let pos =
window.innerHeight + Math.random()*500;

// Adjust speed for mobile - slower and more controlled
const speed = isMobile ? 
  (0.5 + Math.random()*1.5) :
  (1 + Math.random()*3);

// Add horizontal drift on desktop, minimal on mobile
const driftAmount = isMobile ? 0.2 : 1;
const startX = parseFloat(el.style.left);
let driftX = (Math.random() - 0.5) * driftAmount;

function frame(){

pos -= speed;

// Apply horizontal drift
driftX += (Math.random() - 0.5) * 0.1;
driftX = Math.max(-driftAmount, Math.min(driftAmount, driftX));

el.style.top = pos+"px";
el.style.left = (startX + driftX * 20) + "px";

if(pos < -100){

pos = window.innerHeight + 100;
driftX = (Math.random() - 0.5) * driftAmount;
}

requestAnimationFrame(frame);
}

frame();
}
