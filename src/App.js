import "./App.css";
import Izq from "./components/Izq";
import Der from "./components/Der";
import Example1 from "./components/Example1"

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
        display: "flex",
        flexDirection:"row",
        flexWrap:"nowrap"
      }}
    >
      {/* <Izq />
      <Der /> */}
      <Example1/>
    </div>
  );
}

export default App;
