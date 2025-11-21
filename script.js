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
    ordem: "1 jogo",
    local: "Ginásio de Esportes",
  },

  // 26/11/2025 - vários locais (mapeado conforme bloco onde apareceu)
  {
    data: "2025-11-26",
    hora: "10:40",
    jogo: "CETI X CEBN",
    modalidade: "Vôlei Masculino Sub 17",
    ordem: "48 jogo",
    local: "CEJA",
  },
  {
    data: "2025-11-26",
    hora: "12:00",
    jogo: "CONVENIADA X CEBN",
    modalidade: "Handebol Feminino Sub 15",
    ordem: "50 jogo",
    local: "CEJA",
  },
  {
    data: "2025-11-26",
    hora: "12:00",
    jogo: "CEBN X CONVENIADA",
    modalidade: "Baleado Feminino Sub 13",
    ordem: "71 jogo",
    local: "CEBN",
  },
  {
    data: "2025-11-26",
    hora: "12:40",
    jogo: "CEBN X CONVENIADA",
    modalidade: "Baleado Masculino Sub 15",
    ordem: "72 jogo",
    local: "CEBN",
  },
  {
    data: "2025-11-26",
    hora: "13:20",
    jogo: "CEBC X CEBN",
    modalidade: "Baleado Masculino Sub 13",
    ordem: "73 jogo",
    local: "CEBN",
  },
  {
    data: "2025-11-26",
    hora: "14:00",
    jogo: "CEBN X CEBC",
    modalidade: "Handebol Masculino Sub 13",
    ordem: "74 jogo",
    local: "CEBN",
  },
  {
    data: "2025-11-26",
    hora: "14:40",
    jogo: "CEJA X CEBN",
    modalidade: "Futsal Masculino Sub 13",
    ordem: "75 jogo",
    local: "CEBN",
  },
  {
    data: "2025-11-26",
    hora: "15:20",
    jogo: "CEBN X CEBC",
    modalidade: "Futsal Masculino Sub 15",
    ordem: "76 jogo",
    local: "CEBN",
  },
  // inclusão do jogo que estava em "outro ginásio" no texto original
  {
    data: "2025-11-26",
    hora: "14:40",
    jogo: "CEBN X CEJA",
    modalidade: "Futsal Feminino Sub 13",
    ordem: "40 jogo",
    local: "Maria da Glória",
  },

  // 27/11/2025
  {
    data: "2025-11-27",
    hora: "16:00",
    jogo: "CEBC X CEBN",
    modalidade: "Vôlei Masculino Sub 17",
    ordem: "112 jogo",
    local: "Adelieta Ramalho",
  },
  {
    data: "2025-11-27",
    hora: "08:40",
    jogo: "CEBN X CEBC",
    modalidade: "Baleado Feminino Sub 15",
    ordem: "115 jogo",
    local: "Maria da Glória",
  },
  {
    data: "2025-11-27",
    hora: "10:40",
    jogo: "CEJA X CEBN",
    modalidade: "Handebol Masculino Sub 13",
    ordem: "118 jogo",
    local: "Maria da Glória",
  },
  {
    data: "2025-11-27",
    hora: "12:40",
    jogo: "CEBN X CEJA",
    modalidade: "Futsal Feminino Sub 15",
    ordem: "135 jogo",
    local: "CEJA",
  },
  {
    data: "2025-11-27",
    hora: "14:40",
    jogo: "CONVENIADA X CEBN",
    modalidade: "Baleado Feminino Sub 15",
    ordem: "138 jogo",
    local: "CEJA",
  },
  {
    data: "2025-11-27",
    hora: "15:20",
    jogo: "CEBN X JOSÉ DIAS",
    modalidade: "Futsal Feminino Sub 13",
    ordem: "125 jogo",
    local: "Maria da Glória",
  },
  {
    data: "2025-11-27",
    hora: "16:00",
    jogo: "EMILIANO ZAPATA X CEBN",
    modalidade: "Futsal Masculino Sub 13",
    ordem: "126 jogo",
    local: "Maria da Glória",
  },
  {
    data: "2025-11-27",
    hora: "13:20",
    jogo: "CEBN X CEJA",
    modalidade: "Baleado Masculino Sub 13",
    ordem: "192 jogo",
    local: "Adelieta Ramalho",
  },

  // 28/11/2025
  {
    data: "2025-11-28",
    hora: "11:20",
    jogo: "CONVENIADA X CEBN",
    modalidade: "Handebol Masculino Sub 13",
    ordem: "168 jogo",
    local: "Ginásio de Esportes",
  },
  {
    data: "2025-11-28",
    hora: "14:00",
    jogo: "CEBN X LUCIA ROCHA",
    modalidade: "Vôlei Misto Aberto",
    ordem: "171 jogo",
    local: "Ginásio de Esportes",
  },
  {
    data: "2025-11-28",
    hora: "14:00",
    jogo: "CEBN X CEJA",
    modalidade: "Baleado Feminino Sub 13",
    ordem: "207 jogo",
    local: "Maria da Glória",
  },
  {
    data: "2025-11-28",
    hora: "11:20",
    jogo: "CEBN X JOSENILDO LEITE",
    modalidade: "Futsal Masculino Sub 13",
    ordem: "203 jogo",
    local: "Maria da Glória",
  },
  {
    data: "2025-11-28",
    hora: "08:40",
    jogo: "EMILIANO ZAPATA X CEBN",
    modalidade: "Futsal Masculino Sub 15",
    ordem: "213 jogo",
    local: "CEJA",
  },
  {
    data: "2025-11-28",
    hora: "12:00",
    jogo: "CEBN X CONVENIADA",
    modalidade: "Futsal Feminino Sub 13",
    ordem: "218 jogo",
    local: "CEJA",
  },
  {
    data: "2025-11-28",
    hora: "13:20",
    jogo: "JOSÉ DIAS X CEBN",
    modalidade: "Futsal Feminino Sub 15",
    ordem: "220 jogo",
    local: "CEJA",
  },
  {
    data: "2025-11-28",
    hora: "14:40",
    jogo: "CEBN X CONVENIADA",
    modalidade: "Futsal Masculino Sub 15",
    ordem: "222 jogo",
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
    // formata data YYYY-MM-DD para DD/MM/YYYY
    const dtParts = data.split("-");
    h2.textContent = `${dtParts[2]}/${dtParts[1]}/${dtParts[0]}`;
    const meta = document.createElement("div");
    meta.className = "meta";
    meta.textContent = `${jogosPorDia[data].length} jogo(s) — mostrar apenas CEBN`;

    header.appendChild(h2);
    header.appendChild(meta);
    bloco.appendChild(header);

    // container de cards
    const cards = document.createElement("div");
    cards.className = "cards";

    jogosPorDia[data].forEach((jogo) => {
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

/* Pequena função de escape para evitar injeção caso dados mudem */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
