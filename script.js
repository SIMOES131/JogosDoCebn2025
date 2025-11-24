import { jogos } from "./jogos.js";

// Variáveis de Elementos DOM
const container = document.getElementById("jogos-container");
const subtitle = document.getElementById("subtitle-text");
const btnAll = document.getElementById("btn-all");
const btnCebn = document.getElementById("btn-cebn");
const filterButtons = document.querySelectorAll(".filter-btn");

// Lista de jogos filtrada (Apenas CEBN)
const jogosCEBN = jogos.filter((jogo) =>
  jogo.jogo.toUpperCase().includes("CEBN")
);

// Agrupa a lista de jogos por data para facilitar a renderização
function agruparPorDia(listaDeJogos) {
  const jogosPorDia = {};
  listaDeJogos.forEach((j) => {
    if (!jogosPorDia[j.data]) jogosPorDia[j.data] = [];
    jogosPorDia[j.data].push(j);
  });
  return jogosPorDia;
}

// Função principal de renderização
function renderJogos(listaDeJogos, tipoFiltro) {
  // 1. Limpa o contêiner atual
  container.innerHTML = "";

  // 2. Agrupa e ordena os jogos
  const jogosPorDia = agruparPorDia(listaDeJogos);
  const datasOrdenadas = Object.keys(jogosPorDia).sort();
  const totalJogos = listaDeJogos.length;

  // 3. Atualiza o subtítulo
  if (tipoFiltro === "all") {
    subtitle.innerHTML = `Todos os ${totalJogos} jogos. Partidas envolvendo <strong>CEBN</strong> em destaque.`;
  } else if (tipoFiltro === "cebn") {
    subtitle.innerHTML = `Exibindo ${totalJogos} jogo(s) do <strong>CEBN</strong>.`;
  }

  // 4. Renderiza os blocos de dia e cards
  datasOrdenadas.forEach((data) => {
    const bloco = document.createElement("div");
    bloco.className = "dia";

    // Cabeçalho do dia
    const header = document.createElement("div");
    header.className = "dia-header";
    const h2 = document.createElement("h2");

    const dtParts = data.split("-");
    const dataFormatada = `${dtParts[2]}/${dtParts[1]}/${dtParts[0]}`;
    h2.textContent = `Dia ${dataFormatada}`;

    const meta = document.createElement("div");
    meta.className = "meta";
    meta.textContent = `${jogosPorDia[data].length} jogo(s)`;

    header.appendChild(h2);
    header.appendChild(meta);
    bloco.appendChild(header);

    // Container de cards
    const cards = document.createElement("div");
    cards.className = "cards";

    // Ordena os jogos do dia por horário
    jogosPorDia[data]
      .sort((a, b) => a.hora.localeCompare(b.hora))
      .forEach((jogo) => {
        const card = document.createElement("article");
        card.className = "card";

        // Aplica o destaque SÓ se o filtro for 'all' (para não destacar o que já está filtrado)
        // E o jogo contiver CEBN
        if (tipoFiltro === "all" && jogo.jogo.toUpperCase().includes("CEBN")) {
          card.classList.add("destaque");
        } else if (tipoFiltro === "cebn") {
          // Se estiver filtrado, todos os cards devem estar em destaque
          card.classList.add("destaque");
        }

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
}

// Função para manipular os cliques nos botões
function handleFilterClick(event) {
  const targetId = event.currentTarget.id;

  // Remove a classe 'active' de todos os botões
  filterButtons.forEach((btn) => btn.classList.remove("active"));
  // Adiciona 'active' ao botão clicado
  event.currentTarget.classList.add("active");

  // Determina qual lista renderizar
  if (targetId === "btn-all") {
    renderJogos(jogos, "all");
  } else if (targetId === "btn-cebn") {
    renderJogos(jogosCEBN, "cebn");
  }
}

/* Pequena função de escape para evitar injeção no HTML */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// ----------------------------------------------------
// Inicialização:
// ----------------------------------------------------

// 1. Atualiza os textos dos botões com a contagem real
btnAll.textContent = `Todos os Jogos (${jogos.length})`;
btnCebn.textContent = `Apenas CEBN (${jogosCEBN.length})`;

// 2. Adiciona os event listeners aos botões
btnAll.addEventListener("click", handleFilterClick);
btnCebn.addEventListener("click", handleFilterClick);

// 3. Renderiza o estado inicial (Todos os Jogos)
renderJogos(jogos, "all");
