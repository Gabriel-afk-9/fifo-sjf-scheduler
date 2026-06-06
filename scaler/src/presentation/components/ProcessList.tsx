import { Process } from '@/domain/entities/Process';

interface Props {
  processes: Process[];
}

export function ProcessList({
  processes
}: Props) {

  if (processes.length === 0) {
    return (
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 text-center border border-gray-200 mb-6">
        <svg className="w-12 h-12 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <p className="text-gray-600 font-medium">Nenhum processo adicionado ainda</p>
      </div>
    );
  }

  return (
    <div className="mb-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        Processos Adicionados ({processes.length})
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {processes.map((p, index) => (
          <div
            key={p.id}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-lg p-4 hover:shadow-lg transition-all duration-300 hover:border-blue-400"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                  {p.name}
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Processo {p.name}</p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium text-blue-600">{p.burst}ms</span>
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                  #{index + 1}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
