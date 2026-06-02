// src/presentation/components/ResultsPanel.tsx
import { SchedulerResult } from '@/domain/types/SchedulerResult';

interface Props {
  result: SchedulerResult | null; // Atualize a tipagem para aceitar null
}

export function ResultsPanel({ result }: Props) {
  // Se não houver resultado, não renderiza nada (ou renderize uma mensagem)
  if (!result) return null; 

  return (
    <>
      {result.processes.map((p) => (
        <div key={p.id}>
          Processo {p.name}
        </div>
      ))}
    </>
  );
}