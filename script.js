document.addEventListener("DOMContentLoaded", () => {
  const botoes = document.querySelectorAll(".btn-saiba");

  botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
      const historia = botao.nextElementSibling;

      document.querySelectorAll(".historia.ativo").forEach((outra) => {
        if (outra !== historia) {
          outra.classList.remove("ativo");
          outra.previousElementSibling.textContent = "Saiba Mais";
        }
      });

      historia.classList.toggle("ativo");

      if (historia.classList.contains("ativo")) {
        botao.textContent = "Fechar";
      } else {
        botao.textContent = "Saiba Mais";
      }
    });
  });
});
