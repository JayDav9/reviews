import React from "react";
import { TextField, Button, Typography  } from "@mui/material";
import "./BadReview.css"


export const BadReview = () => {
  const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // add code here to handle form submission
    }

    return (
      <div className = "FormContainer">
         <Typography variant="body1" align="center" gutterBottom>
                We strive for 100% customer satisfaction. If we fell short, please let us know so we can address your concerns.
            </Typography>
        <form onSubmit={handleSubmit}>
            <TextField
                label="Name"
                value={name}
                onChange={e => setName(e.target.value)}
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <TextField
                label="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <TextField
                label="Message"
                value={message}
                onChange={e => setMessage(e.target.value)}
                variant="outlined"
                fullWidth
                margin="normal"
                multiline
                rows={4}
            />
            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
        </form>
        </div>
    )
}