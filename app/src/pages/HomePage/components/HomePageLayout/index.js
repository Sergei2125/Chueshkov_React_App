import { Link } from "react-router-dom";
import { ROUTES } from "../../../../routes/routeNames";

const HomePageLayout = () => {
  return (
    <div>
      <h1>Home Page!</h1>
      {Object.entries(ROUTES).map(([routeName: string, path: string]) => (
        <Link to={path} key={routeName}>
          <button>{routeName}</button>
        </Link>
      ))}
    </div>
  );
};

export default HomePageLayout;
