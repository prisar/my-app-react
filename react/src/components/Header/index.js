import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import withRouter from "../../utils/withRouter";

import "./index.css";

async function logJSONData() {
  const response = await fetch("https://reqres.in/api/users?page=1");
  const jsonData = await response.json();
  console.log(jsonData);
  return jsonData;
}

function Header() {
  const [users, setUsers] = React.useState([]);

  useEffect(() => {

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users]);

  return (
    <div>
      <nav className="app-header">
        <div className="brandname">prisar</div>
        <div onClick={() => { const users = logJSONData(); }} className="navbar-button">
          <div>Get Users</div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Header);
