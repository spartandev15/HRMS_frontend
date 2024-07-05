import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./navigation/index"

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/Orpect/hrms">
        <Navigation/>
      </BrowserRouter>
    </div>
  );
}

export default App;
