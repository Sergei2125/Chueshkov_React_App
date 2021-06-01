import { Switch, Route } from "react-router-dom";

import { ROUTES } from "./routeNames";
import HomePageContainer from "../pages/HomePage/containers/HomePageContainer";
import CounterPageContainer from "../pages/CounterPage/containers/CounterPageContainer";
import LifecyclePageContainers from "../pages/LifecyclePage/containers/LifecyclePageContainers";
import HookCounterContainer from "../pages/HookCounter/containers/HookCounterContainer";
import AddCounterPagecontainers from "../pages/AddCounterPage/containers/AddCounterPagecontainers";

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
        path={ROUTES.HOOK_COUNTER_PAGE}
        component={HookCounterContainer}
      />
      <Route
        exact
        path={ROUTES.ADD_COUNTER_PAGE}
        component={AddCounterPagecontainers}
      />
    </Switch>
  );
};

export default Routes;
