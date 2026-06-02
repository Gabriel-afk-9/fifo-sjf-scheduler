import { Process } from '../../entities/Process';

export function orderSJF(processes: Process[]) {
  return [...processes].sort((a, b) => a.burst - b.burst);
}