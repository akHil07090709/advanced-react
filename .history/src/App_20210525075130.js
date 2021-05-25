import {
  Container,
  Grid,
  Header,
  Icon,
  Segment,
  Statistic,
} from "semantic-ui-react";
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
            <Grid.Column>
              <Statistic size="tiny" color="green">
                <Statistic.Label style={{ textAlign: "left" }}>
                  Income:
                </Statistic.Label>
                <Statistic.Value>$1623.00</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
              <Statistic size="tiny" color="red">
                <Statistic.Label style={{ textAlign: "left" }}>
                  Expenses:
                </Statistic.Label>
                <Statistic.Value>$625.50</Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Header as="h3">History</Header>
      <Segment color="red">
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column width={10}>Education</Grid.Column>
            <Grid.Column width={3} textAlign="right">
              $200.00
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color="green">
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column width={10}>Health</Grid.Column>
            <Grid.Column width={3} textAlign="right">
              $500.00
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered color="red" />
              <Icon name="trash" color="red" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color="brown">
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column width={10}>Transport</Grid.Column>
            <Grid.Column width={3} textAlign="right">
              $100.00
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered color="red" />
              <Icon name="trash" color="red" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Container>
  );
}

export default App;
