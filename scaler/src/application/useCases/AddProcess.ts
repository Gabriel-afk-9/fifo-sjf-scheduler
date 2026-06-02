import { Process } from '@/domain/entities/Process';

export function toAddProcess(
  processes: Process[],
  process: Process
) {
  return [...processes, process];
}