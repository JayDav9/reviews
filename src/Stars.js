import React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export const Stars = ({ setReview }) => {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    setReview(value);
  });

  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
        width: "100%",
        height: "100%",
      }}
    >
      <Typography component="legend">Review us</Typography>
      <Rating
        sx={{}}
        name="simple-controlled"
        size="large"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        // onClick={handleClick}
      />
    </Box>
  );
};
