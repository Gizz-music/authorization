import { AppBar, Grid, Toolbar } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../../utils/const";
import './Navigation.css';

const Navigation = () => {

  const user = false;

  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container justify="flex-end">
          {user ?
            <button className="button">Log Out</button>
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