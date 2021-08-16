import React, { useState } from "react";
import { InputLabel, TextField, Button, FormControl } from "@material-ui/core";
import axios from "axios";

function Send() {
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
          return error;
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
    <div>
      {/* <form onSubmit={() => sendData()}> */}
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
      {/* </form> */}
    </div>
  );
}

export default Send;
