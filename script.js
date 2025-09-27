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
      if (filtro === "todos") card.style.display = "block";
      else if (card.classList.contains(filtro)) card.style.display = "block";
      else card.style.display = "none";
    });
  });
});
