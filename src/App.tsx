import "./App.css";
import { Button } from "./components/Button";
import Tabs from "./components/Tabs";

function App() {
  const allIngredients = [
    { icon: "🍅", label: "TTTT" },
    { icon: "🥬", label: "Lettuce" },
    { icon: "🧀", label: "Cheese" },
  ];

  const [tomato, lettuce, cheese] = allIngredients;
  const tabs = [tomato, lettuce, cheese];

  return (
    <div className="flex h-screen items-center justify-center">
      {/*<div className="flex gap-[1px]">
        <Button icon="i-tabler:align-box-top-left-filled">Click</Button>
        <Button icon="i-tabler:antenna">Click</Button>
        <Button variant="secondary">Click</Button>
        <Button variant="secondary" icon="i-tabler:antenna">
          Submit
        </Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="outline">Ghost</Button>
      </div>*/}

      <Tabs tabs={tabs} />
    </div>
  );
}

export default App;
