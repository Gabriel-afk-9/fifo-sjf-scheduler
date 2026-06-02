'use client';

import { useScheduler } from '@/application/hooks/useScheduler';
import { SelectorAlgorithm } from '@/presentation/components/SelectorAlgorithm';
import { QuantityProcesses } from '@/presentation/components/QuantityProcesses';
import { BurstEntry } from '@/presentation/components/BurstEntry';
import { ProcessList } from '@/presentation/components/ProcessList';
import { ResultsPanel } from '@/presentation/components/ResultsPanel';

export default function Home() {

  const esc = useScheduler();

  return (
    <main>

      <SelectorAlgorithm
        value={esc.algorithm}
        onChange={esc.setAlgorithm}
      />

      <QuantityProcesses />

      <BurstEntry />

      <ProcessList
        processes={esc.process}
      />

      <ResultsPanel
        result={esc.result}
      />

    </main>
  );
}