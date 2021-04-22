import { AppBar, Grid, Toolbar } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../../utils/const";
import './Navigation.css';
import { useContext } from "react";
import { Context } from "../../index";
import { useAuthState } from "react-firebase-hooks/auth";

const Navigation = () => {
  const { auth } = useContext(Context);
  const [ user ] = useAuthState(auth);

  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container justify="flex-end">
          {user ?
            <button onClick={() => auth.signOut()} className="button">Log Out</button>
            :
            <NavLink to={ LOGIN_ROUTE }>
              <button className="button">Login</button>
            </NavLink>
          }
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;