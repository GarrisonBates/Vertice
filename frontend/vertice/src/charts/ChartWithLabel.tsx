import { createContext, ReactNode, useContext, useState } from "react";
import { Select } from "../components/Select";
import { useData } from "./Charts";

type PropTypes = {
  children: ReactNode;
};

type ContextTypes = {
  selected: DatasetType;
  setSelected: Function;
};

// Tracks which label / category has been selected
const SelectedContext = createContext<ContextTypes>({
  selected: "Levels",
  setSelected: () => {},
});
export const useSelectedContext = () => useContext(SelectedContext);

/**
 *
 * @param children
 * @param label - Chart label
 * @returns
 */
export const ChartWithLabel = ({ children }: PropTypes) => {
  const data = useData();
  const [selected, setSelected] = useState<DatasetType>(
    Object.keys(data || {})[0] as DatasetType
  );
  return (
    <SelectedContext.Provider value={{ selected, setSelected }}>
      <div className="flex flex-col items-center justify-center px-4">
        <div className="w-full bg-white rounded-t flex justify-center">
          <Select options={Object.keys(data || {})} />
        </div>

        {children}
      </div>
    </SelectedContext.Provider>
  );
};
