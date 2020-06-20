import React from "react";
import Moment from "react-moment";

import { Link, withRouter } from "react-router-dom";

const Bugs = ({ status, heading, remarks, startdate, _id }) => {
  return (
    <tr>
      <td>{heading}</td>
      <td className="text-right">{status}</td>
      <td className="d-none d-xl-table-cell text-right">
        <Moment format="YYYY/MM/DD">{startdate}</Moment>{" "}
      </td>
      <td className="d-none d-xl-table-cell text-right text-success">
        {remarks}
      </td>
    </tr>
  );
};

export default Bugs;
