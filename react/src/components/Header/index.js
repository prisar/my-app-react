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
        <button onClick={() => { alert('hi'); const users = logJSONData(); }} className="navbar-button" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="get users">
          <span className="navbar-button-icon" /><div>Get Users</div>
        </button>
      </nav>
    </div>
  );
}

export default withRouter(Header);
