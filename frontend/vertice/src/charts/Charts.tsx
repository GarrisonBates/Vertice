import { createContext, useContext, useEffect, useState } from "react";
import { DashboardTitle } from "../components/DashboardTitle";
import { BarChart } from "./BarChart";
import { ChartWithLabel } from "./ChartWithLabel";
import { PieChart } from "./PieChart";
import { PyramidChart } from "./PyramidChart";

const ChartContext = createContext<{ data: Data | null }>({ data: null });
export const useData = () => useContext(ChartContext).data;

export const Charts = () => {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3003/getData");
      const json = await res.json();
      setData(json.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return null;

  return (
    <ChartContext.Provider value={{ data }}>
      <div className="grid gap-4 grid-cols-2 max-sm:grid-cols-1 grow w-full py-2">
        <DashboardTitle />
        <ChartWithLabel>
          <BarChart data={data} />
        </ChartWithLabel>
        <ChartWithLabel>
          <PyramidChart data={data} />
        </ChartWithLabel>
        <ChartWithLabel>
          <PieChart data={data} />
        </ChartWithLabel>
      </div>
    </ChartContext.Provider>
  );
};
