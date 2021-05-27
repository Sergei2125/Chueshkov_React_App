import { Switch, Route } from "react-router-dom";

import { ROUTES } from "./routeNames";
import HomePageContainer from "../pages/HomePage/containers/HomePageContainer";
import CounterPageContainer from "../pages/CounterPage/containers/CounterPageContainer";
import LifecyclePageContainers from "../pages/LifecyclePage/containers/LifecyclePageContainers";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME_PAGE} component={HomePageContainer} />
      <Route
        exact
        path={ROUTES.COUNTER_PAGE}
        component={CounterPageContainer}
      />
      <Route
        exact
        path={ROUTES.LIFECYCLE_PAGE}
        component={LifecyclePageContainers}
      />
    </Switch>
  );
};

export default Routes;
