import { Process } from '@/domain/entities/Process';

interface Props {
  processes: Process[];
}

export function ProcessList({
  processes
}: Props) {

  return (
    <ul>
      {processes.map((p) => (
        <li key={p.id}>
          Processo {p.name}: {p.burst}ms
        </li>
      ))}
    </ul>
  );
}