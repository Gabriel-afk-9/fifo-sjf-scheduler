import { SchedulerResult } from '@/domain/types/SchedulerResult';
import { Algorithm } from '@/domain/types/Algorithm';

interface Props {
  result: SchedulerResult | null;
  algorithm: Algorithm;
}

export function ResultsPanel({ result, algorithm }: Props) {
  if (!result) return null;

  const algorithmLabel = algorithm === 'FCFS' ? 'FIFO (First In First Out)' : 'SJF (Shortest Job First)';
  const algorithmColor = algorithm === 'FCFS' ? 'from-green-500 to-emerald-600' : 'from-orange-500 to-amber-600';

  return (
    <div className="mt-8 mb-6">
      <div className={`bg-gradient-to-r ${algorithmColor} rounded-t-xl p-6 text-white`}>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-1">Resultados da Simulação</h3>
            <p className="text-sm opacity-90">Algoritmo: {algorithmLabel}</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-3">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-6 border-l-4 border-r-4 border-b-4 border-gray-200">
        <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Detalhes dos Processos
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {result.processes.map((p, index) => (
            <div
              key={p.id}
              className="bg-white rounded-lg p-4 border-2 border-gray-200 hover:border-blue-400 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3 pb-3 border-b-2 border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
                    {p.name}
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Processo {p.name}</p>
                    <p className="text-xs text-gray-500">#{index + 1}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">
                    Finalizado
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Tempo de Execução:</span>
                  <span className="font-semibold text-blue-600">{p.burst}ms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Tempo de Espera:</span>
                  <span className="font-semibold text-orange-600">{result.waitingTime[p.id]}ms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Turnaround:</span>
                  <span className="font-semibold text-purple-600">{result.timesTurnaround[p.id]}ms</span>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-gray-100">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-500">Progresso</span>
                  <span className="text-xs font-semibold text-gray-600">
                    {((p.burst / (result.timesTurnaround[p.id] || 1)) * 100).toFixed(0)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-indigo-600 h-full rounded-full transition-all duration-500"
                    style={{ width: `${(p.burst / (result.timesTurnaround[p.id] || 1)) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-b-xl p-6 text-white">
        <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Resumo Estatístico
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white bg-opacity-10 rounded-lg p-4 border border-white border-opacity-20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-300 mb-1">Média de Espera</p>
                <p className="text-3xl font-bold text-orange-300">
                  {result.mediaWait.toFixed(2)}ms
                </p>
              </div>
              <div className="bg-orange-500 bg-opacity-20 rounded-lg p-3">
                <svg className="w-8 h-8 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 rounded-lg p-4 border border-white border-opacity-20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-300 mb-1">Média de Turnaround</p>
                <p className="text-3xl font-bold text-purple-300">
                  {result.mediaTurn.toFixed(2)}ms
                </p>
              </div>
              <div className="bg-purple-500 bg-opacity-20 rounded-lg p-3">
                <svg className="w-8 h-8 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-blue-500 bg-opacity-20 border border-blue-300 border-opacity-30 rounded-lg p-3">
          <p className="text-sm text-blue-100">
            💡 <strong>Dica:</strong> Quanto menores os valores de espera e turnaround, melhor o desempenho do algoritmo de escalonamento.
          </p>
        </div>
      </div>
    </div>
  );
}
