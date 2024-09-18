import { PieChart as PC } from "@mui/x-charts";
import { useSelectedContext } from "./ChartWithLabel";

type PropTypes = {
  data: Data | null;
};

export const PieChart = ({ data }: PropTypes) => {
  const { selected } = useSelectedContext();
  const currentDataset = data?.[selected as DatasetType];
  const seriesData = currentDataset?.XData.map((label, i) => ({
    id: i,
    value: currentDataset?.YData[i],
    label,
  }));

  return (
    <PC
      className="w-full max-h-[400px] h-1/2 bg-white rounded-b"
      series={[
        {
          data: seriesData || [],
        },
      ]}
    ></PC>
  );
};
