import "./App.css";
import { Button } from "./components/Button";

function App() {
  return (
    <>
      <Button icon="i-tabler:align-box-top-left-filled">Click</Button>
      <Button icon="i-tabler:antenna">Click</Button>
      <Button variant="secondary">Click</Button>
      <Button variant="secondary" icon="i-tabler:antenna">
        Submit
      </Button>
    </>
  );
}

export default App;
