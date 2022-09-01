import TimeBlock from "./components/TimeBlock";
import Header from "./components/Header";
import { Divider } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Header />
      <Divider className="divider" />
      <div>
        <TimeBlock time="9AM" index="9" />
        <TimeBlock time="10AM" index="10" />
        <TimeBlock time="11AM" index="11" />
        <TimeBlock time="12PM" index="12" />
        <TimeBlock time="1PM" index="13" />
        <TimeBlock time="2PM" index="14" />
        <TimeBlock time="3PM" index="15" />
        <TimeBlock time="4PM" index="16" />
        <TimeBlock time="5PM" index="17" />
      </div>
    </div>
  );
}

export default App;
