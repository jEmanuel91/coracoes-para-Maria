// Botão "Saiba Mais"
document.querySelectorAll(".btn-saiba").forEach(btn => {
  btn.addEventListener("click", () => {
    const historia = btn.nextElementSibling;
    historia.classList.toggle("ativo");
    btn.textContent = historia.classList.contains("ativo") ? "Fechar" : "Saiba Mais";
  });
});

// Filtragem de cards
const botoesFiltro = document.querySelectorAll(".menu-lateral button");
const cards = document.querySelectorAll(".card");

botoesFiltro.forEach(btn => {
  btn.addEventListener("click", () => {
    const filtro = btn.getAttribute("data-filtro");
    cards.forEach(card => {
      if (filtro === "todos") {
        card.style.display = "block";
      } else if (card.getAttribute("data-filtro") === filtro || card.classList.contains(filtro)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Inicialmente mostra apenas Apresentação
document.querySelector('.menu-lateral button[data-filtro="apresentacao"]').click();

// Tela de introdução (splash)
window.addEventListener("load", () => {
  const intro = document.getElementById("intro");
  if (intro) {
    setTimeout(() => {
      intro.style.display = "none";
    }, 2000); // some depois de 4 segundos
  }
});
