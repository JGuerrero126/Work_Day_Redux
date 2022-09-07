import TimeBlock from "./components/TimeBlock";
import Header from "./components/Header";
import { Divider } from "@chakra-ui/react";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Divider className="divider" />
      <TimeBlock time="9 AM" index="9" />
      <TimeBlock time="10 AM" index="10" />
      <TimeBlock time="11 AM" index="11" />
      <TimeBlock time="12 PM" index="12" />
      <TimeBlock time="1 PM" index="13" />
      <TimeBlock time="2 PM" index="14" />
      <TimeBlock time="3 PM" index="15" />
      <TimeBlock time="4 PM" index="16" />
      <TimeBlock time="5 PM" index="17" />
      <Footer />
    </div>
  );
}

export default App;
