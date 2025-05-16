interface Processo {
  id: number;
  nome: string;
  burst: number;
}

const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const bursts: Processo[] = [];

let total = 0;
let atual = 0;

// Elementos do DOM
const qtdInput = document.getElementById('qtdInput') as HTMLInputElement;
const confirmBtn = document.getElementById('confirmQtdBtn')!;
const inputArea = document.getElementById('inputArea')!;
const stepTitle = document.getElementById('stepTitle')!;
const burstInput = document.getElementById('burstInput') as HTMLInputElement;
const algorithmSelect = document.getElementById('algorithm') as HTMLSelectElement;
const processList = document.getElementById('processList')!;
const resultDiv = document.getElementById('results')!;
const resetBtn = document.getElementById('resetBtn')!;
const addMoreBtn = document.getElementById('addMoreBtn')!;

// Funções auxiliares
function atualizarTitulo() {
  stepTitle.textContent = `Digite o tempo de execução do processo ${letras[atual]}:`;
}

function mostrarProcessos() {
  processList.innerHTML = bursts.map(p => `Processo ${p.nome}: ${p.burst}ms`).join('<br>');
}

// Funções de cálculo
function calcularFIFO() {
  return calcularTempos([...bursts]); // Mantém ordem original
}

function calcularSJF() {
  const ordenados = [...bursts];
  ordenados.sort((a, b) => a.burst - b.burst); // Ordena por burst time
  return calcularTempos(ordenados);
}

function calcularTempos(processos: Processo[]) {
  let tempoAtual = 0;
  const temposEspera: number[] = Array(bursts.length).fill(0);
  const temposTurnaround: number[] = Array(bursts.length).fill(0);

  for (const p of processos) {
    temposEspera[p.id] = tempoAtual;
    tempoAtual += p.burst;
    temposTurnaround[p.id] = tempoAtual;
  }

  return {
    processos,
    temposEspera,
    temposTurnaround,
    mediaEspera: (temposEspera.reduce((a, b) => a + b, 0) / bursts.length),
    mediaTurn: (temposTurnaround.reduce((a, b) => a + b, 0) / bursts.length)
  };
}

function calcularResultados() {
  if (bursts.length === 0) {
    resultDiv.innerHTML = '<p>Adicione processos para calcular</p>';
    return;
  }

  const algoritmo = algorithmSelect.value;
  const resultado = algoritmo === 'SJF' ? calcularSJF() : calcularFIFO();

  const { processos, temposEspera, temposTurnaround, mediaEspera, mediaTurn } = resultado;

  resultDiv.innerHTML = `
    <h3>Resultados ${algoritmo === 'SJF' ? 'SJF' : 'FIFO'}</h3>
    ${processos.map(p => `
      <div class="process-result">
        <strong>Processo ${p.nome}</strong><br>
        Tempo de Espera: ${temposEspera[p.id]}<br>
        Tempo de Execução: ${p.burst}<br>
        Turnaround: ${temposTurnaround[p.id]}<br>
        <em>Processo ${p.nome} finalizado</em>
      </div>
    `).join('')}
    <hr>
    <div class="averages">
      <strong>Média de Espera:</strong> ${mediaEspera.toFixed(2)}<br>
      <strong>Média de Turnaround:</strong> ${mediaTurn.toFixed(2)}
    </div>
  `;

  resetBtn.style.display = 'inline-block';
  addMoreBtn.style.display = 'inline-block';

}

// Event Listeners
confirmBtn.addEventListener('click', () => {
  total = parseInt(qtdInput.value);
  if (!isNaN(total) && total > 0) {
    atual = 0;
    bursts.length = 0;
    inputArea.style.display = 'block';
    atualizarTitulo();
  }
});

document.getElementById('addBtn')!.addEventListener('click', () => {
  const valor = parseInt(burstInput.value);
  if (!isNaN(valor) && valor > 0) {
    const nome = letras[atual];
    bursts.push({ id: atual, nome, burst: valor });
    burstInput.value = '';
    atual++;
    mostrarProcessos();
    if (atual < total) {
      atualizarTitulo();
    } else {
      inputArea.style.display = 'none';
    }
  }
});

// Removemos o event listener de change do algorithmSelect
document.getElementById('calcBtn')!.addEventListener('click', calcularResultados);

resetBtn.addEventListener('click', () => {
  bursts.length = 0;
  atual = 0;
  total = 0;
  qtdInput.value = '';
  burstInput.value = '';
  processList.innerHTML = '';
  resultDiv.innerHTML = '';
  inputArea.style.display = 'none';
  stepTitle.textContent = '';
  resetBtn.style.display = 'none';
  addMoreBtn.style.display = 'none';
});

addMoreBtn.addEventListener('click', () => {
  const extra = prompt('Deseja adicionar quantos processos?');
  const qtd = parseInt(extra || '0')  ;
  if (!isNaN(qtd) && qtd > 0) {
    total += qtd;
    atualizarTitulo();
    inputArea.style.display = 'block';
  }
});