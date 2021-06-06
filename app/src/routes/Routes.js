import { Switch, Route } from "react-router-dom";

import { ROUTES } from "./routeNames";
import HomePageContainer from "../pages/HomePage/containers/HomePageContainer";
import CounterPageContainer from "../pages/CounterPage/containers/CounterPageContainer";
import HookCounterContainer from "../pages/HookCounter/containers/HookCounterContainer";
import AddCounterPagecontainers from "../pages/AddCounterPage/containers/AddCounterPagecontainers";
import FormPageContainer from "../pages/FormPage/containers/FormPageContainer";

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
      <Route exact path={ROUTES.FORM_PAGE} component={FormPageContainer} />
    </Switch>
  );
};

export default Routes;
