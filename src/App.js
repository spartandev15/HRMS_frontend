import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./navigation/index"
import Toast from "./component/Toast";
import Loader from "./component/Loader";

function App() {
  return (
    <div className="App">
      <Loader/>
      <Toast/>
      <BrowserRouter>
        <Navigation/>
      </BrowserRouter>
    </div>
  );
}

export default App;
