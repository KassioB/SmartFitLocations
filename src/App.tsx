import { useEffect, useState } from "react";
import { Details } from "./components/Details";
import { Filter } from "./components/Filter";
import { Informations } from "./components/Informations";

type Schedule = {
  weekdays: string;
  hour: string;
};

export type Location = {
  id: number;
  title: string;
  content: string;
  opened: boolean;
  mask: string;
  towel: string;
  fountain: string;
  locker_room: string;
  schedules: Schedule[];
};

function parseHour(str: string) {
  return parseInt(str.replace("h", ""), 10);
}

function App() {
  const [locations, setLocations] = useState<Location[]>([]);
  const [filteredLocations, setFilteredLocations] = useState<Location[]>([]);
  const [statusFilter, setStatusFilter] = useState<"opened" | "closed" | null>(null);
  const [timeRange, setTimeRange] = useState<{ from: string; to: string }>({ from: "", to: "" });
  const [searchTriggered, setSearchTriggered] = useState(false);

  useEffect(() => {
    fetch("/locations.json")
      .then((res) => res.json())
      .then((data) => {
        setLocations(data.locations);
        setFilteredLocations(data.locations);
      });
  }, []);

  const handleFilter = () => {
    let results = [...locations];

    if (statusFilter === null) {
      results = results.filter((loc) => loc.opened);
    } else if (statusFilter === "closed") {
      results = results.filter((loc) => !loc.opened);
    }

    const { from, to } = timeRange;
    if (from && to) {
      const rangeStart = parseHour(from);
      const rangeEnd = parseHour(to);

      results = results.filter((loc) =>
        loc.schedules.some((schedule) => {
          const horario = schedule.hour.toLowerCase();

          if (horario.includes("fechada")) return false;

          const [startStr, endStr] = horario.split(" às ");
          const start = parseHour(startStr);
          const end = parseHour(endStr);

          return start < rangeEnd && end > rangeStart;
        })
      );
    }

    setFilteredLocations(results);
    setSearchTriggered(true);
  };

  const handleClear = () => {
    setStatusFilter(null);
    setTimeRange({ from: "", to: "" });
    setFilteredLocations(locations);
    setSearchTriggered(false);
  };

  return (
    <div className="text-gray-800 px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl mb-4">
          REABERTURA <br /> SMART FIT
        </h1>
        <hr className="my-6 w-25 border-t-10 border-gray-1000" />
        <h2 className="text-sm mb-6">
          O horário de funcionamento das nossas unidades está seguindo os decretos de cada município. Por isso, confira aqui se a sua unidade está aberta e as medidas de segurança que estamos seguindo.
        </h2>

        <Filter
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          timeRange={timeRange}
          setTimeRange={setTimeRange}
          totalResults={filteredLocations.length}
          onFilterClick={handleFilter}
          onClearClick={handleClear}
        />

        <Informations />

        <Details locations={filteredLocations} show={searchTriggered} />
      </div>
    </div>
  );
}

export default App;
