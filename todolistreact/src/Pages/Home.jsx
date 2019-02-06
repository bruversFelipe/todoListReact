import React from "react";
import Header from "../Components/Header";
import { Card } from "reactstrap";
import TodoContainer from "../Containers/TodoContainer";

const styleCard = { margin: "24px", padding: "24px" };

const Home = () => (
  <React.Fragment>
    <Header />
    <br />
    <Card style={styleCard}>
      <TodoContainer />
    </Card>
  </React.Fragment>
);

export default Home;
