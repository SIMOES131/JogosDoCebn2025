import { jogos } from "./jogos.js";

// Variáveis de Elementos DOM
const container = document.getElementById("jogos-container");
const subtitle = document.getElementById("subtitle-text");
const btnAll = document.getElementById("btn-all");
const btnCebn = document.getElementById("btn-cebn");
const selectEscola = document.getElementById("select-escola");
const filterButtons = document.querySelectorAll(".filter-btn");

// Lista de jogos filtrada (Apenas CEBN)
const jogosCEBN = jogos.filter((jogo) =>
  jogo.jogo.toUpperCase().includes("CEBN")
);

// Estado atual do filtro
let filtroAtual = "all";

// Mapa de correção de nomes de escolas
const correcoesEscolas = {
  ADELIETA: "ADELIETA RAMALHO",
  "ADELIETA X": "ADELIETA RAMALHO",
  "ADELIETA RTAMALHO": "ADELIETA RAMALHO",
  "JOSE DIAS": "JOSÉ DIAS",
  "JOSÉ DIAS": "JOSÉ DIAS",
  "EMILIANOI ZAPATA": "EMILIANO ZAPATA",
  "EMILIANO ZAPATA": "EMILIANO ZAPATA",
  CEBC: "CEBC",
  "CEBC CETI": "CEBC",
};

// Extrai todas as escolas únicas dos jogos com nomes corrigidos
function extrairEscolas() {
  const escolas = new Set();

  jogos.forEach((jogo) => {
    const separadores = [" X ", " x ", " × "];
    let escolasEncontradas = [];

    for (const separador of separadores) {
      if (jogo.jogo.includes(separador)) {
        escolasEncontradas = jogo.jogo
          .split(separador)
          .map((escola) => escola.trim());
        break;
      }
    }

    if (escolasEncontradas.length === 0) {
      escolasEncontradas = [jogo.jogo.trim()];
    }

    escolasEncontradas.forEach((escola) => {
      if (escola && escola.length > 2) {
        const escolaCorrigida = correcoesEscolas[escola] || escola;
        escolas.add(escolaCorrigida);
      }
    });
  });

  const escolasUnicas = Array.from(escolas).sort((a, b) => a.localeCompare(b));

  const escolasPrincipais = [
    "ADELIETA RAMALHO",
    "EMILIANO ZAPATA",
    "JOSÉ DIAS",
    "CEBC",
    "CEBN",
    "CEJA",
    "CETI",
    "CONVENIADA",
    "LUCIA ROCHA",
    "VITORIA LIMA",
    "MANOEL RAMOS",
    "MARIA DA GLORIA",
    "FRANCISCO AMORIM",
    "MARLENE SANTANA",
    "PORTAL DO SABER",
    "TEODULO LEITE",
    "ACM",
    "JOSENILDO LEITE",
  ];

  return escolasUnicas.filter((escola) => escolasPrincipais.includes(escola));
}

// Preenche o select com as escolas
function preencherSelectEscolas() {
  const escolas = extrairEscolas();
  const select = document.getElementById("select-escola");

  while (select.options.length > 1) {
    select.remove(1);
  }

  escolas.forEach((escola) => {
    const option = document.createElement("option");
    option.value = escola;
    option.textContent = escola;
    select.appendChild(option);
  });
}

// Filtra jogos por escola
function filtrarPorEscola(escola) {
  if (escola === "all") {
    return jogos;
  }

  return jogos.filter((jogo) => jogo.jogo.includes(escola));
}

// Agrupa a lista de jogos por data
function agruparPorDia(listaDeJogos) {
  const jogosPorDia = {};
  listaDeJogos.forEach((j) => {
    if (!jogosPorDia[j.data]) jogosPorDia[j.data] = [];
    jogosPorDia[j.data].push(j);
  });
  return jogosPorDia;
}

// FUNÇÃO RENDERJOGOS QUE ESTAVA FALTANDO
function renderJogos(listaDeJogos, tipoFiltro, escolaNome = "") {
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
  } else if (tipoFiltro === "escola") {
    subtitle.innerHTML = `Exibindo ${totalJogos} jogo(s) da escola <strong>${escolaNome}</strong>.`;
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

        // Aplica o destaque
        if (tipoFiltro === "cebn" || tipoFiltro === "escola") {
          card.classList.add("destaque");
        } else if (
          tipoFiltro === "all" &&
          jogo.jogo.toUpperCase().includes("CEBN")
        ) {
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

  // Reseta o select para "Todas as escolas"
  selectEscola.value = "all";

  // Determina qual lista renderizar
  if (targetId === "btn-all") {
    filtroAtual = "all";
    renderJogos(jogos, "all");
  } else if (targetId === "btn-cebn") {
    filtroAtual = "cebn";
    renderJogos(jogosCEBN, "cebn");
  }
}

// Função para manipular a seleção de escola
function handleEscolaChange(event) {
  const escola = event.target.value;

  // Remove o active dos botões quando seleciona uma escola
  filterButtons.forEach((btn) => btn.classList.remove("active"));

  if (escola === "all") {
    // Se selecionar "Todas as escolas", volta para o filtro padrão
    btnAll.classList.add("active");
    renderJogos(jogos, "all");
  } else {
    // Filtra APENAS pelos jogos que envolvem a escola selecionada
    const jogosFiltrados = filtrarPorEscola(escola);
    renderJogos(jogosFiltrados, "escola", escola);
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

// 1. Preenche o select com as escolas
preencherSelectEscolas();

// 2. Atualiza os textos dos botões com a contagem real
btnAll.textContent = `Todos os Jogos (${jogos.length})`;
btnCebn.textContent = `Apenas CEBN (${jogosCEBN.length})`;

// 3. Adiciona os event listeners
btnAll.addEventListener("click", handleFilterClick);
btnCebn.addEventListener("click", handleFilterClick);
selectEscola.addEventListener("change", handleEscolaChange);

// 4. Renderiza o estado inicial (Todos os Jogos)
renderJogos(jogos, "all");
