import React, { useState } from "react";
import { InputLabel, TextField, Button, FormControl } from "@material-ui/core";
import axios from "axios";

function Send() {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const sendData = async () => {
    // const headers = {
    //   phone_number: phone,
    //   message: message,
    // };
    await axios
      .post(
        "https://8leafevc72.execute-api.us-east-1.amazonaws.com/send",
        // null,
        {
          //   headers: {
          "Access-Control-Allow-Origin": "*",
          phone: "+61460542611",
          message: "ioeos",
          //   },
        }
      )
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
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
