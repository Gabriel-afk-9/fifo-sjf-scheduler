interface Props {
  total: number;
  setTotal: (value: number) => void;
  onConfirm: () => void;
}

export function QuantityProcesses({
  total,
  setTotal,
  onConfirm
}: Props) {
  
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-8 mb-6 shadow-lg border border-indigo-100">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full p-3 mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3v-6" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Quantos processos deseja adicionar?
          </h2>
          <p className="text-gray-600 text-sm">
            Digite um número entre 1 e 10 processos
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Número de Processos
            </label>
            <input
              type="number"
              min="1"
              max="10"
              value={total === 0 ? '' : total}
              onChange={(e) => setTotal(parseInt(e.target.value) || 0)}
              placeholder="Ex: 5"
              className="w-full px-4 py-4 border-2 border-indigo-200 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 outline-none transition-all duration-200 text-2xl font-bold text-center text-indigo-600"
            />
          </div>

          <button
            onClick={onConfirm}
            disabled={total === 0}
            className={`w-full px-6 py-4 font-semibold rounded-lg shadow-lg transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              total === 0
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-indigo-500 to-blue-600 text-white hover:shadow-xl hover:from-indigo-600 hover:to-blue-700 hover:scale-105 active:scale-95 focus:ring-indigo-400'
            }`}
          >
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Confirmar
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
