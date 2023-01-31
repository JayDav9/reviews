import React from "react";
import { TextField, Button, Typography } from "@mui/material";
import "./BadReview.css";
import axios from "axios";

export const BadReview = () => {
  const [submitted, setSubmitted] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const server = process.env.REACT_APP_SERVER;
  const to = process.env.REACT_APP_TO;
  const from = process.env.REACT_APP_FROM;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    // add code here to handle form submission
    await axios
      .post(server, {
        to: to,
        from: from,
        subject: `${name} from ${email}`,
        text: message,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="FormContainer">
      {!submitted ? (
        <>
          {" "}
          <Typography variant="body1" align="center" gutterBottom>
            We strive for 100% customer satisfaction. If we fell short, please
            let us know so we can address your concerns.
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              variant="outlined"
              fullWidth
              margin="normal"
              multiline
              rows={4}
            />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>{" "}
        </>
      ) : (
        <Typography> Thank you for your feedback </Typography>
      )}
    </div>
  );
};
