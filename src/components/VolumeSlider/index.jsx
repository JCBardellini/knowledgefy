import React, { useState } from "react";
import VolumeDown from "@mui/icons-material/VolumeDown";
import { Slider, Stack, Box } from "@mui/material";
import VolumeUp from "@mui/icons-material/VolumeUp";

const VolumeSlider = () => {
  const [value, setValue] = useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: 200 }}>
      <Stack spacing={2} direction="row" alignItems="center">
        <VolumeDown />
        <Slider aria-label="Volume" value={value} onChange={handleChange} />
        <VolumeUp />
      </Stack>
    </Box>
  );
};

export default VolumeSlider;
