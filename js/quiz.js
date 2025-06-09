document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("verificarTudo");
  const totalQuestoes = 4;

  document.querySelectorAll('input[type="radio"]').forEach(input => {
    input.addEventListener('change', () => {
      const respondidas = new Set();
      document.querySelectorAll('input[type="radio"]:checked').forEach(resposta => {
        respondidas.add(resposta.name);
      });

      if (respondidas.size === totalQuestoes) {
        button.style.display = 'block';
      } else {
        button.style.display = 'none';
      }
    });
  });
});

function verificarTodas() {
  const respostasCorretas = {
    q1: 'd',
    q2: 'c',
    q3: 'a',
    q4: 'a'
  };

  for (let questao in respostasCorretas) {
    const alternativas = document.getElementsByName(questao);
    let usuarioAcertou = false;

    alternativas.forEach(alternativa => {
      const label = alternativa.parentElement;
      label.classList.remove("correta", "errada");

      if (alternativa.checked) {
        if (alternativa.value === respostasCorretas[questao]) {
          label.classList.add("correta");
          usuarioAcertou = true;
        } else {
          label.classList.add("errada");
        }
      }
    });

    // Se o usuário errou, destacamos a alternativa correta
    if (!usuarioAcertou) {
      alternativas.forEach(alternativa => {
        if (alternativa.value === respostasCorretas[questao]) {
          alternativa.parentElement.classList.add("correta");
        }
      });
    }
  }

  // Rolagem para o topo da página
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
