interface Props {
  showInput: boolean;
  current: number;
  total: number;
  burstInput: string;
  setBurstInput: (value: string) => void;
  toAddBurst: () => void;
}

const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export function BurstEntry({
  showInput,
  current,
  total,
  burstInput,
  setBurstInput,
  toAddBurst,
}: Props) {

  if (!showInput || current >= total) return null;

  return (
    <div>
      <h3>Digite o tempo de execução do processo {letras[current]}:</h3>
      
      <input
        type="number"
        value={burstInput}
        onChange={(e) => setBurstInput(e.target.value)}
      />
      
      <button onClick={toAddBurst}>
        Adicionar Processo
      </button>
    </div>
  );
}