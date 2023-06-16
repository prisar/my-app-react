import styled from "styled-components";

import "./index.css";
import { useEffect, useState } from "react";

const ContainerBox = styled.div`
  position: relative;
  width: 100%;
  height: 700px;
  left: 0px;
`;

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 700px;
  left: 0px;
  top: 0px;

  background: #f2f2f2;
`;

const PropositionBox = styled.div`
  position: absolute;
  width: 787px;
  height: 224px;
  left: 298px;
  top: 79px;
`;

const FistSentence = styled.div`
  position: absolute;
  width: 787px;
  height: 57px;
  left: calc(50% - 787px / 2 - 28.5px);
  top: 79px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 56px;
  /* identical to box height */
  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
`;

const SecondSentence = styled.div`
  position: absolute;
  width: 506px;
  height: 51px;
  left: calc(50% - 506px / 2 - 28px);
  top: 168px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
`;

const BrowserBox = styled.div`
  position: absolute;
  width: 800px;
  height: 300px;
  left: 320px;
  top: 400px;
`;


export function HomePage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = () => {
    setLoading(true);
    fetch("https://reqres.in/api/users?page=1").then(response => {
      return response.json()
    })
      .then(data => {
        console.log(data.data);
        setUsers(data.data);
        setLoading(false);
      })
      .catch(error => {
        // throw (error);
      })
  };

  useEffect(() => {
  }, []);

  return (
    <div style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <div>
        <nav className="app-header">
          <div className="brandname">prisar</div>
          <div onClick={() => { getUsers(); }} className="navbar-button">
            <div>Get Users</div>
          </div>
        </nav>
      </div>

      {loading && <div id="loading" class="loading">
        Loading&#8230;
      </div>}

      {users.length != 0 ?
        <div class="cards">
          {users.map((user, index) => {
            return (<div key={user.id} class="card">
              <img src={user.avatar} alt="" />
              <h4>{user.first_name}</h4>
              <small>{user.last_name}</small>
              <small>{user.email}</small>
            </div>
            );
          })}
        </div>
        :
        <div>
          <ContainerBox>
            <Container>
              <PropositionBox>
                <FistSentence>Assignment 1: User card grid layout </FistSentence>
                <SecondSentence>Get users data from an api and display them. Add a button in the navbar saying 'Get Users', which makes an API call to get the user data</SecondSentence>
              </PropositionBox>
              <BrowserBox>
                <svg width="800" height="300" viewBox="0 0 800 343" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="799" height="479" rx="3.5" fill="white" stroke="black" />
                  <circle cx="22" cy="22" r="5.5" stroke="black" />
                  <circle cx="46" cy="22" r="5.5" stroke="black" />
                  <circle cx="70" cy="22" r="5.5" stroke="black" />
                </svg>
              </BrowserBox>
            </Container>
          </ContainerBox>
        </div>
      }

    </div>
  );
}

export default HomePage;
