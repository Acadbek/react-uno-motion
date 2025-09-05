import "./App.css";
import { motion } from "motion/react";
import { Button } from "./components/Button";

function App() {
  const box = {
    width: 100,
    height: 100,
    backgroundColor: "#ff0088",
    borderRadius: 5,
  };

  return (
    <>
      <motion.div
        style={box}
        animate={{ rotate: 360 }}
        transition={{ duration: 1 }}
      />
      <Button icon="i-tabler:align-box-top-left-filled">Click</Button>
      <Button icon="i-tabler:antenna">Click</Button>
      <Button variant="secondary">Click</Button>
      <Button variant="secondary" icon="i-tabler:antenna">
        Submit
      </Button>

      <a-text-red font="libertinus"> red text </a-text-red>

      <a-flex>
        <div>1</div>
        <h1>1</h1>
      </a-flex>

      <button
        className="font-libertinus"
        p="x-2 py-2"
        bg="blue-500 hover:blue-600"
        border="2 rounded red"
        text="red center"
      >
        Heyy
      </button>
    </>
  );
}

export default App;
