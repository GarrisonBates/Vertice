import ReactApexChart from "react-apexcharts";
import { useSelectedContext } from "./ChartWithLabel";

type PropTypes = {
  data: Data | null;
};

export const PyramidChart = ({ data: rawData }: PropTypes) => {
  // Selected metric, e.g. "Levels"
  const { selected } = useSelectedContext();
  const selectedDataset = rawData?.[selected as DatasetType];

  // Sort data in ascending order
  const data = selectedDataset?.YData.map((value, i) => ({
    XData: selectedDataset.XData[i],
    YData: value,
  })).sort((a, b) => a.YData - b.YData);

  const series = [
    {
      name: "",
      data: data?.map((value) => value.YData) || [],
    },
  ];

  return (
    <div className="bg-white w-full rounded-b">
      <ReactApexChart
        options={{
          chart: {
            type: "bar",
            height: 350,
            toolbar: {
              show: false,
            },
          },
          plotOptions: {
            bar: {
              borderRadius: 0,
              horizontal: true,
              distributed: true,
              barHeight: "80%",
              isFunnel: true,
            },
          },
          dataLabels: {
            enabled: true,
            formatter: function (_, opt) {
              return opt.w.globals.labels[opt.dataPointIndex];
            },
            dropShadow: {
              enabled: true,
            },
          },
          xaxis: {
            categories: data?.map((label) => label.XData),
          },
          legend: {
            show: false,
          },
        }}
        series={series}
        type="bar"
        height={350}
      />
    </div>
  );
};
