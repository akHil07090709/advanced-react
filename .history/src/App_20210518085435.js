import { Container, Header, Statistic } from "semantic-ui-react";
import "./App.css";

function App() {
  return (
    <Container>
      <Header as="h1">Financial Budget Of Telangana State</Header>
      <Statistic size="small">
        <Statistic.Label>State Budget : </Statistic.Label>
        <Statistic.Value>1256cr</Statistic.Value>
      </Statistic>
    </Container>
  );
}

export default App;
