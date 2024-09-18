import { BarChart as BC } from "@mui/x-charts";
import { useSelectedContext } from "./ChartWithLabel";

type PropTypes = {
  data: Data | null;
};

export const BarChart = ({ data }: PropTypes) => {
  const { selected } = useSelectedContext();
  console.log("SELECTED: ", selected);
  return (
    <BC
      className="w-full max-h-[300px] h-1/2 bg-white rounded-b"
      series={[
        {
          data: data?.[selected as DatasetType].YData,
          color: "#093594",
        },
      ]}
      xAxis={[
        { data: data?.[selected as DatasetType].XData, scaleType: "band" },
      ]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
      colors={["blue"]}
    />
  );
};
