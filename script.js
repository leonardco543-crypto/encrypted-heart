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

function createParticles(){

for(let i=0;i<100;i++){

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

animateParticle(p);
}
}

function animateParticle(el){

let pos =
window.innerHeight + Math.random()*500;

const speed =
1 + Math.random()*3;

function frame(){

pos -= speed;

el.style.top = pos+"px";

if(pos < -100){

pos = window.innerHeight + 100;
}

requestAnimationFrame(frame);
}

frame();
}
