import React from "react";
import { Grid, Icon, Segment } from "semantic-ui-react";

function EntryLine({ id, description, value, isExpense = false, deleteEntry }) {
  return (
    <Segment color={isExpense ? "red" : "green"}>
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column width={10}>{description}</Grid.Column>
          <Grid.Column width={3} textAlign="right">
            {value}
          </Grid.Column>
          <Grid.Column width={3}>
            <Icon name="edit" bordered color="red" />
            <Icon name="trash" color="red" onClick={() => deleteEntry(id)} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default EntryLine;
