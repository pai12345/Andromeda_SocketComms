import { Fragment, lazy, Suspense } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';

const NoSsr = lazy(() => import("@mui/material/NoSsr"));

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

const HideOnScroll = (props: Props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
});
return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const notfound = (props: Props) => {
  return (
    <Fragment>
    <Suspense
      fallback={
        <Fragment>
         Loading ...
        </Fragment>
      }
    >
      <NoSsr>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" component="div">
              Socket Comms 
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Container>
      404 - Not Found
      </Container>
      </NoSsr>
      </Suspense>
    </Fragment>
  );
}

export default notfound;