import React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export const Stars = ({ setReview }) => {
  const [value, setValue] = React.useState(0);

//   const handleClick = function (e) {
//     // if (value < 4) {
//     //   setReview("Bad");
//     // } else if (value >= 4) {
//     //   setReview("Good");
//     // }
//     setReview(value)
//   };

  React.useEffect(() => { setReview(value)    });

  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Typography component="legend">Review us</Typography>
      <Rating
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
