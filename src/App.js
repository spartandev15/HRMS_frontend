import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./navigation/index"
import Toast from "./component/Toast";

function App() {
  return (
    <div className="App">
      <Toast/>
      <BrowserRouter basename="/Orpect/hrms">
        <Navigation/>
      </BrowserRouter>
    </div>
  );
}

export default App;
