/*
  This file is used to display the components to get the input from the user.
  
  InputLabel, TextField, Button and FormControl of Material UI has been used.

  https://8leafevc72.execute-api.us-east-1.amazonaws.com/send is the POST API
  that is used to send the data to AWS to perform the sms sending.
*/

import React, { useState } from "react";
import { InputLabel, TextField, Button, FormControl } from "@material-ui/core";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  root: {
    padding: "50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Send = (props) => {
  const classes = useStyle();
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const sendData = async () => {
    await axios
      .post(
        "https://8leafevc72.execute-api.us-east-1.amazonaws.com/send?",
        {
          headers: { "Content-Type": "application/json" },
        },
        {
          params: {
            phone: phone,
            message: message,
          },
        }
      )
      .then(
        (response) => {
          response.data === "SUCCESSFUL"
            ? alert("Message sent successfully.!")
            : alert("Mesage failed to send.!");
        },
        (error) => {
          alert("Error at the backend in sending the sms. Try again.!");
        }
      );
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className={classes.root}>
      <br />
      <InputLabel>Phone Number :</InputLabel>
      <br />
      <FormControl>
        <TextField error variant="outlined" onChange={handlePhoneChange} />
      </FormControl>

      <br />
      <br />
      <InputLabel>Message :</InputLabel>
      <br />
      <FormControl>
        <TextField error variant="outlined" onChange={handleMessageChange} />
      </FormControl>

      <br />
      <br />
      <Button onClick={() => sendData()} variant="contained" color="primary">
        Send Message
      </Button>
    </div>
  );
};

export default Send;
