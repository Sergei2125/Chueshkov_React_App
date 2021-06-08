import React from "react";

const FormLayout = ({ formValues, handleInputChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <label>
        <p>Name</p>
        <input
          name="name"
          value={formValues.name}
          type="text"
          onChange={(event) => handleInputChange(event)}
        />
      </label>
      <label>
        <p>Password</p>
        <input
          name="password"
          value={formValues.password}
          type="text"
          onChange={handleInputChange}
        />
      </label>
      <label>
        <p>Checkbox</p>
        <input
          value={formValues.isChecked}
          checked={formValues.isChecked}
          name="isChecked"
          type="checkbox"
          onChange={handleInputChange}
        />
      </label>
      <div>
        <button>Show Values</button>
      </div>
    </form>
  );
};

export default FormLayout;
