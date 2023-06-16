import styled from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import HomePage from "../HomePage";
import Header from "../../components/Header";


const AppWrapper = styled.div`
  // max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 1px;
  flex-direction: column;
`;
export function App() {
  return (
    <AppWrapper>
      <Router>
        <Header />
        <HomePage />
      </Router>
    </AppWrapper>
  );
}

export default App;
