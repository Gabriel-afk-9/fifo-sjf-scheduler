interface Props {
  total: number;
  setTotal: (value: number) => void;
  onConfirm: () => void;
}

export function QuantityProcesses({
  total,
  setTotal,
  onConfirm
}: Props) {
  
  return (
    <>
      <h2>Quantos processos deseja adicionar?</h2>
      <input
        type="number"
        min="1"
        value={total === 0 ? '' : total}
        onChange={(e) => setTotal(parseInt(e.target.value) || 0)}
      />
      <button onClick={onConfirm}>
        Confirmar
      </button>
    </>
  );
}