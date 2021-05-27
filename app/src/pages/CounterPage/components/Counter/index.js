import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../routes/routeNames";

import styles from "./styles.module.scss";

const Counter = ({
  countValue,
  parityType,
  handleIncrement,
  handleDecrement,
  handleReset,
  handletIsEven,
}) => {
  return (
    <div>
      <Link to={ROUTES.HOME_PAGE}>
        <button> backToHomePage</button>
      </Link>

      <h1 className={styles.header}>Counter</h1>
      <div
        className={`${styles.wrapper} ${
          parityType === "even" ? styles.evenBack : styles.oddBack
        }`}
      >
        <div className={styles.screen}>{countValue}</div>
        <div className={styles.isEven}>
          {parityType === "null" ? (
            <div>Reset</div>
          ) : parityType === "even" ? (
            <div>Введено четное число</div>
          ) : (
            <div>Введено нечетное число</div>
          )}
        </div>
        <div className={styles.controlArea}>
          <button className={styles.controlButton} onClick={handleDecrement}>
            -
          </button>
          <button className={styles.controlButton} onClick={handleReset}>
            Reset
          </button>
          <button className={styles.controlButton} onClick={handleIncrement}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

Counter.propTypes = {
  countValue: PropTypes.number.isRequired,
  parityType: PropTypes.string.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
};

export default Counter;
