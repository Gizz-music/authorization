import './App.css';
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";
import Navigation from "../components/Navigation/Navigation";
import {useContext} from "react";
import { Context } from "../index";
import { useAuthState } from "react-firebase-hooks/auth";
import Loader from "../components/Loader/Loader";

const App = () => {
  const { auth } = useContext(Context);
  const [ user, loading, error ] = useAuthState(auth);

  if (loading) {
    return <Loader />
  }

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