import React, { useState, useEffect } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import axios from "axios";

// const useStyles = makeStyles((theme) => ({
//   seeMore: {
//     marginTop: theme.spacing(3),
//   },
// }));

function History() {
  const [history, getHistory] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    // await axios
    //   .get("https://ue1um90kg3.execute-api.us-east-1.amazonaws.com/getHistory")
    //   .then(
    //     (response) => {
    //       getHistory(response.data.Items);
    //     },
    //     (error) => {
    //       return error;
    //     }
    //   );
    await axios
      .post(
        "https://8leafevc72.execute-api.us-east-1.amazonaws.com/send",
        null,
        {
          params: {
            phone: "+61460542611",
            message: "ioeos",
          },
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

  return (
    <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Phone Number</TableCell>
            <TableCell>Message</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Delivery Status</TableCell>
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
}

export default History;
