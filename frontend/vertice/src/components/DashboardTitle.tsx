import { useData } from "../charts/Charts";

export const DashboardTitle = () => {
  const data = useData();

  const totalProductCount = data?.CurrentProducts.YData.length;
  const totalMemberCount = data?.Levels.YData.reduce((a, b) => a + b, 0);

  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
      <h2 className=" text-theme font-bold text-4xl m-0">
        Analytics Dashboard
      </h2>
      <div className="flex justify-between max-w-[320px] w-full">
        <p className="font-bold">Total Products: {totalProductCount}</p>
        <p className="font-bold">Total Members: {totalMemberCount}</p>
      </div>
    </div>
  );
};
