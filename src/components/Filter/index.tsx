import Hour from "../../assets/icon-hour.png";

type FilterProps = {
  statusFilter: "opened" | "closed" | null;
  setStatusFilter: (value: "opened" | "closed" | null) => void;
  timeRange: { from: string; to: string };
  setTimeRange: (range: { from: string; to: string }) => void;
  totalResults: number;
  onFilterClick: () => void;
  onClearClick: () => void;
};

export function Filter({
  statusFilter,
  setStatusFilter,
  timeRange,
  setTimeRange,
  totalResults,
  onFilterClick,
  onClearClick,
}: FilterProps) {
  const handlePeriodChange = (period: string) => {
    switch (period) {
      case "manha":
        setTimeRange({ from: "06h", to: "12h" });
        break;
      case "tarde":
        setTimeRange({ from: "12h", to: "18h" });
        break;
      case "noite":
        setTimeRange({ from: "18h", to: "23h" });
        break;
      default:
        setTimeRange({ from: "", to: "" });
    }
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatusFilter(e.target.checked ? "closed" : null);
  };

  return (
    <div className="p-4 border-t-3 border-2 border-b-4 border-gray-200 rounded-lg max-w-2x1 mx-auto">
      <div className="flex items-center gap-2 mb-4">
        <img className="w-7" src={Hour} alt="Relógio" />
        <span className="text-sm">Horário</span>
      </div>

      <p className="text-lg mb-2 mt-6">Qual período quer treinar?</p>
      <hr className="my-2 border-1 border-gray-200" />

      {["manha", "tarde", "noite"].map((period) => (
  <div key={period}>
    <div className="flex justify-between items-center">
      <label className="flex items-center gap-2">
        <input
          type="radio"
          name="periodo"
          value={period}
          className="w-4 h-4"
          onChange={() => handlePeriodChange(period)}
          checked={
            (period === "manha" && timeRange.from === "06h") ||
            (period === "tarde" && timeRange.from === "12h") ||
            (period === "noite" && timeRange.from === "18h")
          }
        />
        <span>
          {period === "manha" && "Manhã"}
          {period === "tarde" && "Tarde"}
          {period === "noite" && "Noite"}
        </span>
      </label>
      <span className="text-sm text-gray-500">
        {period === "manha" && "06:00 às 12:00"}
        {period === "tarde" && "12:00 às 18:00"}
        {period === "noite" && "18:00 às 23:00"}
      </span>
    </div>
    <hr className="my-2 border border-gray-200" />
  </div>
))}

      <div className="mt-10 flex justify-between">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            className="w-4 h-4"
            onChange={handleStatusChange}
            checked={statusFilter === "closed"}
          />
          <span className="text-sm">Exibir unidades fechadas</span>
        </label>
        <p className="text-sm">Resultados encontrados: {totalResults}</p>
      </div>

      <div className="flex justify-center mt-4 gap-4">
        <button
          onClick={onFilterClick}
          className="bg-yellow-500 text-sm px-6 py-2 rounded-sm"
        >
          ENCONTRAR UNIDADE
        </button>
        <button
          onClick={onClearClick}
          className="bg-white text-sm px-20 py-2 rounded-sm border border-gray-300"
        >
          LIMPAR
        </button>
      </div>
    </div>
  );
}
