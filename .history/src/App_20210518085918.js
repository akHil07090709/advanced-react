import { Container, Header, Statistic } from "semantic-ui-react";
import "./App.css";

function App() {
  return (
    <Container>
      <Header as="h1">Financial Budget Of Telangana State</Header>
      <Statistic size="large">
        {/* A statistic emphasizes the current value of an attribute. 
            A statistic can display a value with a label above or below it.*/}
        <Statistic.Value>1256cr</Statistic.Value>
        <Statistic.Label>State Budget : </Statistic.Label>
      </Statistic>
    </Container>
  );
}

export default App;
