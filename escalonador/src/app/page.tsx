'use client';

import { useState } from 'react';

interface Processo {
  id: number;
  nome: string;
  burst: number;
}

const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export default function Home() {
  const [total, setTotal] = useState(0);
  const [atual, setAtual] = useState(0);
  const [burstInput, setBurstInput] = useState('');
  const [bursts, setBursts] = useState<Processo[]>([]);
  const [algorithm, setAlgorithm] = useState('FCFS');
  const [resultado, setResultado] = useState<any>(null);
  const [mostrarInput, setMostrarInput] = useState(false);

  const atualizarTitulo = () =>
    `Digite o tempo de execução do processo ${letras[atual]}:`;

  const mostrarProcessos = () =>
    bursts.map((p) => `Processo ${p.nome}: ${p.burst}ms`).join('\n');

  const calcularTempos = (processos: Processo[]) => {
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
      mediaEspera: temposEspera.reduce((a, b) => a + b, 0) / bursts.length,
      mediaTurn: temposTurnaround.reduce((a, b) => a + b, 0) / bursts.length,
    };
  };

  const calcularResultados = () => {
    if (bursts.length === 0) return;

    const resultado =
      algorithm === 'SJF'
        ? calcularTempos([...bursts].sort((a, b) => a.burst - b.burst))
        : calcularTempos([...bursts]);

    setResultado(resultado);
  };

  const adicionarBurst = () => {
    const valor = parseInt(burstInput);
    if (!isNaN(valor) && valor > 0) {
      const nome = letras[atual];
      setBursts((prev) => [...prev, { id: atual, nome, burst: valor }]);
      setAtual((prev) => prev + 1);
      setBurstInput('');
      if (atual + 1 >= total) setMostrarInput(false);
    }
  };

  const resetar = () => {
    setTotal(0);
    setAtual(0);
    setBurstInput('');
    setBursts([]);
    setResultado(null);
    setMostrarInput(false);
  };

  const adicionarMais = () => {
    const extra = prompt('Deseja adicionar quantos processos?');
    const qtd = parseInt(extra || '0');
    if (!isNaN(qtd) && qtd > 0) {
      setTotal((prev) => prev + qtd);
      setMostrarInput(true);
    }
  };

  return (
    <main style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1>Escalonador de Processos</h1>

      <label><strong>Algoritmo:</strong></label>
      <select value={algorithm} onChange={(e) => setAlgorithm(e.target.value)}>
        <option value="FCFS">FIFO</option>
        <option value="SJF">SJF</option>
      </select>

      <h2>Quantos processos deseja adicionar?</h2>
      <input
        type="number"
        min="1"
        value={total === 0 ? '': total}
        onChange={(e) => setTotal(parseInt(e.target.value))}
    
      />
      <button onClick={() => { setAtual(0); setBursts([]); setMostrarInput(true); }}>Confirmar</button>

      {mostrarInput && atual < total && (
        <div>
          <h3>{atualizarTitulo()}</h3>
          <input
            type="number"
            value={burstInput}
            onChange={(e) => setBurstInput(e.target.value)}
          />
          <button onClick={adicionarBurst}>Adicionar Processo</button>
        </div>
      )}

      <div style={{ marginTop: 20 }}>
        <h3>Processos</h3>
        <ul>
          {bursts.map((p) => (
            <li key={p.id}>Processo {p.nome}: {p.burst}ms</li>
          ))}
        </ul>
      </div>

      <button onClick={calcularResultados}>Calcular</button>

      {resultado && (
        <div style={{ marginTop: 20 }}>
          <h3>Resultados ({algorithm === 'SJF' ? 'SJF' : 'FIFO'})</h3>
          {resultado.processos.map((p: Processo) => (
            <div key={p.id}>
              <strong>Processo {p.nome}</strong><br />
              Tempo de Espera: {resultado.temposEspera[p.id]}<br />
              Tempo de Execução: {p.burst}<br />
              Turnaround: {resultado.temposTurnaround[p.id]}<br />
              <em>Processo {p.nome} finalizado</em>
              <hr />
            </div>
          ))}
          <div>
            <strong>Média de Espera:</strong> {resultado.mediaEspera.toFixed(2)}<br />
            <strong>Média de Turnaround:</strong> {resultado.mediaTurn.toFixed(2)}
          </div>
          <button onClick={adicionarMais}>Adicionar</button>
          <button onClick={resetar}>Reiniciar</button>
        </div>
      )}
    </main>
  );
}
