import { Container, Grid, Icon, Segment } from "semantic-ui-react";
import "./App.css";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLine from "./components/EntryLine";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";

function App() {
  return (
    <Container>
      <MainHeader title="Financial Budget Of Telangana State" />
      <DisplayBalance title="State Budget : " value="1256cr" size="small" />
      <DisplayBalances />
      <MainHeader title="History" type="h3" />
      <EntryLine description="Income" value="$123.45" />
      <EntryLine description="Expenditure" value="$423.45" isExpense />
      <EntryLine description="Liquor Business" value="$423.45" />
      <EntryLine description="Education" value="$423.45" isExpense />
      <MainHeader title="Add New Transaction" type="h3" />
      <NewEntryForm />
    </Container>
  );
}

export default App;
