import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MUISelect,
} from "@mui/material";
import { useSelectedContext } from "../charts/ChartWithLabel";

type PropTypes = {
  options: string[];
};

export const Select = ({ options }: PropTypes) => {
  const { selected, setSelected } = useSelectedContext();
  const handleChange = (e: any) => {
    setSelected(e.target.value);
  };
  return (
    <FormControl className="w-1/2 bg-white text-center pt-2">
      <InputLabel className="text-theme pt-2" id="selectLabel">
        Metric
      </InputLabel>
      <MUISelect
        className="text-dark font-bold h-10"
        labelId="select"
        id="select"
        value={selected}
        label="Metric"
        onChange={handleChange}
      >
        {options?.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </MUISelect>
    </FormControl>
  );
};
