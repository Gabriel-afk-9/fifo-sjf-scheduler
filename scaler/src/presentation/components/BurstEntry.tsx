import { LETTERS } from "@/constants/letters";

interface Props {
  showInput: boolean;
  current: number;
  total: number;
  burstInput: string;
  setBurstInput: (value: string) => void;
  toAddBurst: () => void;
}

export function BurstEntry({
  showInput,
  current,
  total,
  burstInput,
  setBurstInput,
  toAddBurst,
}: Props) {
  if (!showInput || current >= total) return null;

  const progressPercentage = ((current) / total) * 100;

  return (
    <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 mb-6 shadow-md border border-purple-100">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-bold text-gray-800">
            Processo {LETTERS[current]}
          </h3>
          <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
            {current + 1}/{total}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <div
            className="bg-gradient-to-r from-purple-500 to-blue-500 h-full rounded-full transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      <div className="space-y-4">
        <label className="block">
          <span className="text-sm font-semibold text-gray-700 mb-2 block">
            Digite o tempo de execução (ms):
          </span>
          <input
            type="number"
            value={burstInput}
            onChange={(e) => setBurstInput(e.target.value)}
            placeholder="Ex: 5"
            className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-300 outline-none transition-all duration-200 text-lg font-semibold"
          />
        </label>

        <button
          onClick={toAddBurst}
          className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-purple-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
        >
          <span className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Adicionar Processo {LETTERS[current]}
          </span>
        </button>
      </div>
    </div>
  );
}
