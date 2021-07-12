import React from "react";
import EntryLine from "./EntryLine";
import { Container } from "semantic-ui-react";

function EntryLines({ entries, deleteEntry }) {
  return (
    <Container>
      {entries?.map((item) => (
        <EntryLine key={item.id} {...item} deleteEntry={deleteEntry} />
      ))}
    </Container>
  );
}

export default EntryLines;
