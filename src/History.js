/*
  This file is used to display the history of all the sms sent along with 
  the statusof the messages.

  Table components of Material UI has been used over here.

  https://ue1um90kg3.execute-api.us-east-1.amazonaws.com/getHistory GET API
  returns the history of all the messages
*/

import React, { useState, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import axios from "axios";

const History = (props) => {
  const [history, getHistory] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await axios
      .get("https://ue1um90kg3.execute-api.us-east-1.amazonaws.com/getHistory")
      .then(
        (response) => {
          getHistory(response.data.Items);
        },
        (error) => {
          return error;
        }
      );
  };

  return (
    <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>
              <h3>Phone Number</h3>
            </TableCell>
            <TableCell>
              <h3>Message</h3>
            </TableCell>
            <TableCell>
              <h3>Date</h3>
            </TableCell>
            <TableCell>
              <h3>Delivery Status</h3>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {history.map((row) => (
            <TableRow>
              <TableCell>{row.phone_number}</TableCell>
              <TableCell>{row.message}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
};

export default History;
