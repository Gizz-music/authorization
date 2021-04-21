import './App.css';
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navigation from "./components/Navigation/Navigation";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;