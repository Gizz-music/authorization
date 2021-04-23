import "./Loader.css";
import { Container, Grid } from "@material-ui/core";

const Loader = () => {
  return (
    <Container>
      <Grid container
            style={{height: window.innerHeight -50}}
            alignItems="center"
            justify="center"
      >
        <Grid container
              alignItems="center"
              direction="column"
        >
        <div className="lds-ripple">
          <div className="loaderWaves"/>
          <div className="loaderWaves"/>
        </div>
        </Grid>
      </Grid>
    </Container>
  )
};

export default Loader;