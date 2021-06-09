import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import DisplayBalance from "./DisplayBalance";

function DisplayBalances() {
  return (
    <Segment textAlign="center">
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column>
            <DisplayBalance title="Income:" value="$1623.00" color="green" />
          </Grid.Column>
          <Grid.Column>
            <DisplayBalance title="Expenses:" value="$625.50" color="red" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default DisplayBalances;
