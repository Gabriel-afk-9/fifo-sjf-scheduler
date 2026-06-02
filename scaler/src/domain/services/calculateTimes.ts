import { Process } from '../entities/Process';
import { SchedulerResult } from '../types/SchedulerResult';

export function calculateTimes(
  processes: Process[]
): SchedulerResult {

  let currentTime = 0;

  const waitingTime = Array(processes.length).fill(0);
  const timesTurnaround = Array(processes.length).fill(0);

  for (const process of processes) {

    waitingTime[process.id] = currentTime;

    currentTime += process.burst;

    timesTurnaround[process.id] = currentTime;
  }

  return {
    processes,
    waitingTime,
    timesTurnaround,
    mediaWait:
      waitingTime.reduce((a, b) => a + b, 0) /
      processes.length,

    mediaTurn:
      timesTurnaround.reduce((a, b) => a + b, 0) /
      processes.length,
  };
}