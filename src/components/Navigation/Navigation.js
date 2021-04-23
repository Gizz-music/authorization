import { AppBar, Grid, Toolbar } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../../utils/const";
import './Navigation.css';
import { useContext } from "react";
import { Context } from "../../index";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase";

const Navigation = () => {
  const { auth } = useContext(Context);
  const [ user ] = useAuthState(auth);

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
    console.log(user)
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "rgba(0,118,0,0.66)" }}>
      <Toolbar>
        <Grid container justify="flex-end">
          {user ?
            <button onClick={() => auth.signOut()} className="button">Log Out</button>
            :
            <NavLink to={ LOGIN_ROUTE }>
              <button onClick={login} className="button">Login</button>
            </NavLink>
          }
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;