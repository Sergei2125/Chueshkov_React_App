import PropTypes from "prop-types";
import React from "react";

import styles from "./styles.module.scss";

const Counter = ({
  countValue,
  handleIncrement,
  handleDecrement,
  handleReset,
  handleCloseCounter,
}) => {
  return (
    <div>
      <h1 className={styles.header}>Counter</h1>
      <div
        className={`${styles.wrapper} ${
          countValue % 2 === 0 ? styles.evenBack : styles.oddBack
        }`}
      >
        <button className={styles.closeButton} onClick={handleCloseCounter}>
          Close
        </button>
        <div className={styles.screen}>{countValue}</div>
        <div className={styles.isEvenStyle}>
          {countValue % 2 === 0 ? (
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
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  handleCloseCounter: PropTypes.func.isRequired,
};

export default React.memo(Counter);
