'use client';

import { useScheduler } from '@/application/hooks/useScheduler';
import { SelectorAlgorithm } from '@/presentation/components/SelectorAlgorithm';
import { QuantityProcesses } from '@/presentation/components/QuantityProcesses';
import { BurstEntry } from '@/presentation/components/BurstEntry';
import { ProcessList } from '@/presentation/components/ProcessList';
import { ActionButtons } from '@/presentation/components/ActionButtons';
import { ResultsPanel } from '@/presentation/components/ResultsPanel';

export default function Home() {
  const esc = useScheduler();

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      </div>

      <div className="relative z-10">
        <header className="border-b border-white border-opacity-10 backdrop-blur-md bg-black bg-opacity-20 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-3xl font-black text-white">Escalonador</h1>
                  <p className="text-xs text-gray-300">Simulador de Processos</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-6xl mx-auto px-4 py-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 border border-white border-opacity-20 shadow-xl">
                  <SelectorAlgorithm
                    value={esc.algorithm}
                    onChange={esc.setAlgorithm}
                  />
                </div>

                <div className="bg-white bg-opacity-5 backdrop-blur-md rounded-xl border border-white border-opacity-10">
                  <QuantityProcesses 
                    total={esc.total}
                    setTotal={esc.setTotal}
                    onConfirm={esc.confirmQuantity}
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              {esc.showInput && (
                <div className="bg-white bg-opacity-5 backdrop-blur-md rounded-xl border border-white border-opacity-10 p-6">
                  <BurstEntry 
                    showInput={esc.showInput}
                    current={esc.current}
                    total={esc.total}
                    burstInput={esc.burstInput}
                    setBurstInput={esc.setBurstInput}
                    toAddBurst={esc.toAddBurst}
                  />
                </div>
              )}

              {esc.process.length > 0 && (
                <div className="bg-white bg-opacity-5 backdrop-blur-md rounded-xl border border-white border-opacity-10 p-6">
                  <ProcessList
                    processes={esc.process}
                  />
                </div>
              )}

              {esc.process.length > 0 && (
                <ActionButtons 
                  calculate={esc.calculate}
                  reset={esc.reset}
                />
              )}

              {esc.result && (
                <div className="bg-white bg-opacity-5 backdrop-blur-md rounded-xl border border-white border-opacity-10 overflow-hidden">
                  <ResultsPanel
                    result={esc.result}
                    algorithm={esc.algorithm}
                  />
                </div>
              )}

              {esc.process.length === 0 && !esc.showInput && (
                <div className="bg-white bg-opacity-5 backdrop-blur-md rounded-xl border border-white border-opacity-10 p-12 text-center">
                  <div className="inline-block bg-gradient-to-br from-purple-500 to-blue-500 rounded-full p-4 mb-4">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Comece a Simulação</h3>
                  <p className="text-gray-300">
                    Selecione um algoritmo e defina a quantidade de processos para começar
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <footer className="border-t border-white border-opacity-10 backdrop-blur-md bg-black bg-opacity-20 mt-12">
          <div className="max-w-6xl mx-auto px-4 py-6 text-center text-gray-400 text-sm">
            <p>© 2024 Escalonador de Processos • Simulador de Algoritmos de Escalonamento</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
