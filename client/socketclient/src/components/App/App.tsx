import { Fragment, lazy, Suspense } from 'react';
import './App.css';

const NoSsr = lazy(() => import("@mui/material/NoSsr"));

const Switch = lazy(() =>
  import("react-router-dom").then((module) => ({
    default: module.Switch,
  }))
);

const Route = lazy(() =>
  import("react-router-dom").then((module) => ({
    default: module.Route,
  }))
);

const Redirect = lazy(() =>
  import("react-router-dom").then((module) => ({
    default: module.Redirect,
  }))
);

const comms = lazy(() => import("../Comms/comms")) as any;
const notfound = lazy(() => import("../Notfound/notfound")) as any;

const App = () => {
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
      <Switch>
            <Route path="/" exact component={comms} />
            <Route path="/NotFound" component={notfound} />
            <Redirect to="/NotFound" />
      </Switch>
    </NoSsr>
      </Suspense>
    </Fragment>
  );
}

export default App;
