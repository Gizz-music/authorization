import './App.css';
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
          <Navbar />
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
