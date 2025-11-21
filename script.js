// === Alterar aqui para destacar outro dia ===
const dataAtual = "2025-11-25"; // formato YYYY-MM-DD

// --- Lista somente com jogos onde aparece "CEBN" (campo local incluído) ---
const jogos = [
  // 25/11/2025 - Ginásio de Esportes
  {
    data: "2025-11-25",
    hora: "17:00",
    jogo: "CEBN X CONVENIADA",
    modalidade: "Handebol Feminino Sub 15",
    ordem: "jogo 1",
    local: "Ginásio de Esportes",
  },

  // 26/11/2025 - vários locais
  {
    data: "2025-11-26",
    hora: "10:40",
    jogo: "CETI X CEBN",
    modalidade: "Vôlei Masculino Sub 17",
    ordem: "jogo 48",
    local: "CEJA",
  },
  {
    data: "2025-11-26",
    hora: "12:00",
    jogo: "CONVENIADA X CEBN",
    modalidade: "Handebol Feminino Sub 15",
    ordem: "jogo 50",
    local: "CEJA",
  },
  {
    data: "2025-11-26",
    hora: "12:00",
    jogo: "CEBN X CONVENIADA",
    modalidade: "Baleado Feminino Sub 13",
    ordem: "jogo 71",
    local: "CEBN",
  },
  {
    data: "2025-11-26",
    hora: "12:40",
    jogo: "CEBN X CONVENIADA",
    modalidade: "Baleado Masculino Sub 15",
    ordem: "jogo 72",
    local: "CEBN",
  },
  {
    data: "2025-11-26",
    hora: "13:20",
    jogo: "CEBC X CEBN",
    modalidade: "Baleado Masculino Sub 13",
    ordem: "jogo 73",
    local: "CEBN",
  },
  {
    data: "2025-11-26",
    hora: "14:00",
    jogo: "CEBN X CEBC",
    modalidade: "Handebol Masculino Sub 13",
    ordem: "jogo 74",
    local: "CEBN",
  },
  {
    data: "2025-11-26",
    hora: "14:40",
    jogo: "CEJA X CEBN",
    modalidade: "Futsal Masculino Sub 13",
    ordem: "jogo 75",
    local: "CEBN",
  },
  {
    data: "2025-11-26",
    hora: "15:20",
    jogo: "CEBN X CEBC",
    modalidade: "Futsal Masculino Sub 15",
    ordem: "jogo 76",
    local: "CEBN",
  },
  {
    data: "2025-11-26",
    hora: "14:40",
    jogo: "CEBN X CEJA",
    modalidade: "Futsal Feminino Sub 13",
    ordem: "jogo 40",
    local: "Maria da Glória",
  },

  // 27/11/2025
  {
    data: "2025-11-27",
    hora: "16:00",
    jogo: "CEBC X CEBN",
    modalidade: "Vôlei Masculino Sub 17",
    ordem: "jogo 112",
    local: "Adelieta Ramalho",
  },
  {
    data: "2025-11-27",
    hora: "08:40",
    jogo: "CEBN X CEBC",
    modalidade: "Baleado Feminino Sub 15",
    ordem: "jogo 115",
    local: "Maria da Glória",
  },
  {
    data: "2025-11-27",
    hora: "10:40",
    jogo: "CEJA X CEBN",
    modalidade: "Handebol Masculino Sub 13",
    ordem: "jogo 118",
    local: "Maria da Glória",
  },
  {
    data: "2025-11-27",
    hora: "12:40",
    jogo: "CEBN X CEJA",
    modalidade: "Futsal Feminino Sub 15",
    ordem: "jogo 135",
    local: "CEJA",
  },
  {
    data: "2025-11-27",
    hora: "14:40",
    jogo: "CONVENIADA X CEBN",
    modalidade: "Baleado Feminino Sub 15",
    ordem: "jogo 138",
    local: "CEJA",
  },
  {
    data: "2025-11-27",
    hora: "15:20",
    jogo: "CEBN X JOSÉ DIAS",
    modalidade: "Futsal Feminino Sub 13",
    ordem: "jogo 125",
    local: "Maria da Glória",
  },
  {
    data: "2025-11-27",
    hora: "16:00",
    jogo: "EMILIANO ZAPATA X CEBN",
    modalidade: "Futsal Masculino Sub 13",
    ordem: "jogo 126",
    local: "Maria da Glória",
  },
  {
    data: "2025-11-27",
    hora: "13:20",
    jogo: "CEBN X CEJA",
    modalidade: "Baleado Masculino Sub 13",
    ordem: "jogo 192",
    local: "Adelieta Ramalho",
  },

  // 28/11/2025
  {
    data: "2025-11-28",
    hora: "11:20",
    jogo: "CONVENIADA X CEBN",
    modalidade: "Handebol Masculino Sub 13",
    ordem: "jogo 168",
    local: "Ginásio de Esportes",
  },
  {
    data: "2025-11-28",
    hora: "14:00",
    jogo: "CEBN X LUCIA ROCHA",
    modalidade: "Vôlei Misto Aberto",
    ordem: "jogo 171",
    local: "Ginásio de Esportes",
  },
  {
    data: "2025-11-28",
    hora: "14:00",
    jogo: "CEBN X CEJA",
    modalidade: "Baleado Feminino Sub 13",
    ordem: "jogo 207",
    local: "Maria da Glória",
  },
  {
    data: "2025-11-28",
    hora: "11:20",
    jogo: "CEBN X JOSENILDO LEITE",
    modalidade: "Futsal Masculino Sub 13",
    ordem: "jogo 203",
    local: "Maria da Glória",
  },
  {
    data: "2025-11-28",
    hora: "08:40",
    jogo: "EMILIANO ZAPATA X CEBN",
    modalidade: "Futsal Masculino Sub 15",
    ordem: "jogo 213",
    local: "CEJA",
  },
  {
    data: "2025-11-28",
    hora: "12:00",
    jogo: "CEBN X CONVENIADA",
    modalidade: "Futsal Feminino Sub 13",
    ordem: "jogo 218",
    local: "CEJA",
  },
  {
    data: "2025-11-28",
    hora: "13:20",
    jogo: "JOSÉ DIAS X CEBN",
    modalidade: "Futsal Feminino Sub 15",
    ordem: "jogo 220",
    local: "CEJA",
  },
  {
    data: "2025-11-28",
    hora: "14:40",
    jogo: "CEBN X CONVENIADA",
    modalidade: "Futsal Masculino Sub 15",
    ordem: "jogo 222",
    local: "CEJA",
  },
];

// ---- Agrupa por dia para renderizar ----
const jogosPorDia = {};
jogos.forEach((j) => {
  if (!jogosPorDia[j.data]) jogosPorDia[j.data] = [];
  jogosPorDia[j.data].push(j);
});

// ---- Renderização ----
const container = document.getElementById("jogos-container");

Object.keys(jogosPorDia)
  .sort()
  .forEach((data) => {
    const bloco = document.createElement("div");
    bloco.className = "dia";

    // cabeçalho do dia
    const header = document.createElement("div");
    header.className = "dia-header";
    const h2 = document.createElement("h2");

    const dtParts = data.split("-");
    h2.textContent = `${dtParts[2]}/${dtParts[1]}/${dtParts[0]}`;

    const meta = document.createElement("div");
    meta.className = "meta";
    meta.textContent = `${jogosPorDia[data].length} jogo(s)`;

    header.appendChild(h2);
    header.appendChild(meta);
    bloco.appendChild(header);

    // container de cards
    const cards = document.createElement("div");
    cards.className = "cards";

    // === ORDENAR PELOS HORÁRIOS ===
    jogosPorDia[data]
      .sort((a, b) => a.hora.localeCompare(b.hora))
      .forEach((jogo) => {
        const card = document.createElement("article");
        card.className = "card";
        if (data === dataAtual) card.classList.add("destaque");

        card.innerHTML = `
          <div class="top-row">
            <div class="time">${jogo.hora}</div>
            <div class="badge-local">${jogo.local}</div>
          </div>

          <div class="teams">${escapeHtml(jogo.jogo)}</div>
          <div class="modalidade">${jogo.modalidade}</div>
          <div class="ordem">Ordem: ${jogo.ordem}</div>
        `;

        cards.appendChild(card);
      });

    bloco.appendChild(cards);
    container.appendChild(bloco);
  });

/* Pequena função de escape para evitar injeção no HTML */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
