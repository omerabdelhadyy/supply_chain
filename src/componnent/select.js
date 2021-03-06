import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectLabels(props) {
  const [type, setType] = React.useState("");

  const handleChange = (event) => {
    setType(event.target.value);
  };

  React.useEffect(() => {
    props.onChange(type);
  }, [type]);

  return (
    <FormControl sx={{ width: "100%" }}>
      <InputLabel id="demo-simple-select-helper-label">type</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={type}
        label="Age"
        onChange={handleChange}
      >
        {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
        <MenuItem value={"supplier"}>supplier</MenuItem>
        <MenuItem value={"producer"}>producer</MenuItem>
        <MenuItem value={"retailer"}>retailer</MenuItem>
        <MenuItem value={"transporter"}>transporter</MenuItem>
      </Select>
      {/* <FormHelperText>With label + helper text</FormHelperText> */}
    </FormControl>
    // <FormControl sx={{ m: 1, minWidth: 120 }}>

    // </FormControl>
  );
}
