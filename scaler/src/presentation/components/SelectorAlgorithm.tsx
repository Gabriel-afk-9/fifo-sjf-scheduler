import { Algorithm } from '@/domain/types/Algorithm';

interface Props {
  value: string;
  onChange: (value: Algorithm) => void;
}

export function SelectorAlgorithm({
  value,
  onChange
}: Props) {

  return (
    <div className="mb-6">
      <label className="block text-sm font-semibold text-gray-700 mb-3">
        <div className="flex items-center gap-2 mb-2">
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          Selecione o Algoritmo de Escalonamento
        </div>
      </label>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <label className="relative cursor-pointer">
          <input
            type="radio"
            value="FCFS"
            checked={value === 'FCFS'}
            onChange={(e) => onChange(e.target.value as Algorithm)}
            className="sr-only"
          />
          <div
            className={`p-4 rounded-lg border-2 transition-all duration-300 ${
              value === 'FCFS'
                ? 'border-green-500 bg-green-50 shadow-lg'
                : 'border-gray-200 bg-white hover:border-green-300'
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                  value === 'FCFS'
                    ? 'border-green-500 bg-green-500'
                    : 'border-gray-300'
                }`}
              >
                {value === 'FCFS' && (
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              <div>
                <p className="font-bold text-gray-800">FIFO</p>
                <p className="text-xs text-gray-600">First In First Out</p>
                <p className="text-xs text-gray-500 mt-1">Processa na ordem de chegada</p>
              </div>
            </div>
          </div>
        </label>

        <label className="relative cursor-pointer">
          <input
            type="radio"
            value="SJF"
            checked={value === 'SJF'}
            onChange={(e) => onChange(e.target.value as Algorithm)}
            className="sr-only"
          />
          <div
            className={`p-4 rounded-lg border-2 transition-all duration-300 ${
              value === 'SJF'
                ? 'border-orange-500 bg-orange-50 shadow-lg'
                : 'border-gray-200 bg-white hover:border-orange-300'
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                  value === 'SJF'
                    ? 'border-orange-500 bg-orange-500'
                    : 'border-gray-300'
                }`}
              >
                {value === 'SJF' && (
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              <div>
                <p className="font-bold text-gray-800">SJF</p>
                <p className="text-xs text-gray-600">Shortest Job First</p>
                <p className="text-xs text-gray-500 mt-1">Processa o mais rápido primeiro</p>
              </div>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
}
