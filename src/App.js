import { useState } from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import EntryLines from "./components/EntryLines";

function App() {
  const [entries, setEntries] = useState(initialEntries);
  const deleteEntry = (id) => {
    const result = entries.filter((entry) => entry.id !== id);
    setEntries(result);
  };
  return (
    <Container>
      <MainHeader title="Financial Budget Of Telangana State" />
      <DisplayBalance title="State Budget : " value="1256cr" size="small" />
      <DisplayBalances />
      <MainHeader title="History" type="h3" />
      <EntryLines entries={entries} deleteEntry={deleteEntry} />
      <MainHeader title="Add New Transaction" type="h3" />
      <NewEntryForm />
    </Container>
  );
}

export default App;

let initialEntries = [
  {
    id: 1,
    description: "Income",
    value: "$10000.00",
    isExpense: false,
  },
  {
    id: 2,
    description: "Education",
    value: "$1000",
    isExpense: true,
  },
  {
    id: 3,
    description: "Travel",
    value: "$500",
    isExpense: true,
  },
  {
    id: 4,
    description: "Stocks",
    value: "$1000.00",
    isExpense: false,
  },
  {
    id: 5,
    description: "Rent",
    value: "$100.00",
    isExpense: true,
  },
];
