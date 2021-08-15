// import React from "react";
import axios from "axios";
// import deviceStorage from "/Services/DataService";

/**
 * Method exported to be used by any component that wants to make an Api connection
 * @param methodType
 * @param url
 * @param body
 * @returns {Promise<string|AxiosResponse<any>>}
 */
export let apiConnect = async (methodType, url, body) => {
  let axiosBuild = {
    method: methodType,
    url: url,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Accept: "application/json",
      "Cache-Control": "no-cache",
      Pragma: "no-cache",
    },
  };

  //   if (url !== "/user/open/login") {
  //     let userToken = await deviceStorage.retrieveData("userToken");
  //     let orgId = await deviceStorage.retrieveData("organisationId");
  //     axiosBuild.headers.authorization = `Bearer ${userToken}`;
  //     axiosBuild.headers["Organisation-Id"] = orgId;
  //   }

  //   if (body !== null) {
  //     axiosBuild.data = body;
  //   }

  let response;
  try {
    response = await axios(axiosBuild);
    return response;
  } catch (err) {
    if (err.toString() === "Error: Request failed with status code 401") {
      err = "401";
    }
    if (err.toString() === "Error: Request failed with status code 404") {
      err = "404";
    }
    return err;
  }
};
