import { Algorithm } from '@/domain/types/Algorithm';

interface Props {
  value: string;
  onChange: (value: Algorithm) => void; // 1. Mude string para Algorithm aqui
}

export function SelectorAlgorithm({
  value,
  onChange
}: Props) {

  return (
    <select
      value={value}
      onChange={(e) =>
        onChange(e.target.value as Algorithm) // 2. Faça o casting (as) do evento nativo
      }
    >
      <option value="FCFS">
        FIFO
      </option>

      <option value="SJF">
        SJF
      </option>
    </select>
  );
}