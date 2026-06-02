import { Process } from '@/domain/entities/Process';
import { Algorithm } from '@/domain/types/Algorithm';

import { orderFCFS } from '@/domain/services/strategies/FCFSStrategy';
import { orderSJF } from '@/domain/services/strategies/SJFStrategy';

import { calculateTimes } from '@/domain/services/calculateTimes';

export function scalingProcesses(
  processes: Process[],
  algorithm: Algorithm
) {

  const orderly =
    algorithm === 'SJF'
      ? orderSJF(processes)
      : orderFCFS(processes);

  return calculateTimes(orderly);
}