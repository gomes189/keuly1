const btn = document.getElementById("btnFesta");
const confetes = document.getElementById("confetes");
const som = document.getElementById("somFesta");

btn.addEventListener("click", () => {
  som.play();
  for (let i = 0; i < 150; i++) {
    const confete = document.createElement("div");
    confete.classList.add("confete");
    confete.style.left = Math.random() * 100 + "vw";
    confete.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 60%)`;
    confete.style.animationDuration = (2 + Math.random() * 3) + "s";
    confetes.appendChild(confete);
    setTimeout(() => confete.remove(), 5000);
  }
});

// Estilo dos confetes
const style = document.createElement('style');
style.textContent = `
  .confete {
    position: absolute;
    top: -10px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    opacity: 0.9;
    animation: cair linear forwards;
  }

  @keyframes cair {
    to {
      transform: translateY(100vh) rotate(720deg);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
