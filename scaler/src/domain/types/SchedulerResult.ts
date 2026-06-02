import { Process } from '@/domain/entities/Process';

export interface SchedulerResult {
  processes: Process[];
  waitingTime: number[];
  timesTurnaround: number[];
  mediaWait: number;
  mediaTurn: number;
}