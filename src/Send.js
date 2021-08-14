import React, { useState } from "react";
import { InputLabel, TextField, Button, FormControl } from "@material-ui/core";
import axios from "axios";

function Send() {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const sendData = async () => {
    console.log("hi", phone);
    console.log("hello", message);
    const headers = {
      "Content-Type": "application/json; charset=utf-8",
      Accept: "application/json",
      "Cache-Control": "no-cache",
      Pragma: "no-cache",
      phone_number: phone,
      message: message,
    };
    const res = await axios
      .post("https://z3jyo4iky4.execute-api.us-east-1.amazonaws.com/send", {
        headers,
      })
      .then(
        (response) => {
          return response;
        },
        (error) => {
          return error;
        }
      );
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
    console.log(phone);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
    console.log(message);
  };

  return (
    <div>
      <form onSubmit={() => sendData()}>
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
        <Button type="submit" variant="contained" color="primary">
          Send Message
        </Button>
      </form>
    </div>
  );
}

export default Send;
