import { Container, Grid, Header, Segment, Statistic } from "semantic-ui-react";
import "./App.css";

function App() {
  return (
    <Container>
      <Header as="h1">Financial Budget Of Telangana State</Header>
      <Statistic size="small">
        {/* A statistic can display a value with a label above or below it.*/}
        <Statistic.Label>State Budget : </Statistic.Label>
        <Statistic.Value>1256cr</Statistic.Value>
      </Statistic>
      <Segment textAlign="center">
        <Grid columns={2}>
          <Grid.Row>
            <Grid.column></Grid.column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Container>
  );
}

export default App;
