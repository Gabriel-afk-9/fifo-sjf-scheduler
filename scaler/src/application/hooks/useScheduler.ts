'use client';

import { useState } from 'react';
import { Process } from '@/domain/entities/Process';
import { Algorithm } from '@/domain/types/Algorithm';
import { scalingProcesses } from '../useCases/ScalingProcesses';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export function useScheduler() {

  const [total, setTotal] = useState(0);
  const [current, setCurrent] = useState(0);
  const [burstInput, setBurstInput] = useState('');
  const [process, setProcess] = useState<Process[]>([]);

  const [algorithm, setAlgorithm] =
    useState<Algorithm>('FCFS');

  const [result, setResult] = useState<any>(null);

  const [showInput, setShowInput] =
    useState(false);

  const toAddBurst = () => {
    const value = Number(burstInput);

    if (!value) return;

    const process: Process = {
      id: current,
      name: letters[current],
      burst: value
    };

    setProcess(prev => [...prev, process]);
    setCurrent(prev => prev + 1);
    setBurstInput('');

    if (current + 1 >= total)
      setShowInput(false);
  };

  const calculate = () => {
    setResult(
      scalingProcesses(
        process,
        algorithm
      )
    );
  };

  const reset = () => {

    setTotal(0);
    setCurrent(0);
    setProcess([]);
    setResult(null);
    setShowInput(false);
    setBurstInput('');
  };

  return {
    total,
    setTotal,
    current,
    burstInput,
    setBurstInput,
    process,
    algorithm,
    setAlgorithm,
    result,
    showInput,
    setShowInput,
    toAddBurst,
    calculate,
    reset
  };
}