import { useContext } from 'react';
import firebase from "firebase";
import './Login.css';
import { Box, Container, Grid } from "@material-ui/core";
import { Context } from "../../index";

const Login = () => {
  const {auth} = useContext(Context);

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
    console.log(user)
  };

  return (
    <Container>
      <Grid className="container">
         <h1 className="title">Please Log in</h1>
      </Grid>
      <Grid>
        <Box>
          <button onClick={login}>Sign in with google</button>
        </Box>
      </Grid>
    </Container>
  );
};

export default Login;