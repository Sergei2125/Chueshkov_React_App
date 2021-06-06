import FormLayout from "../components/FormLayout";
import { useState, useCallback } from "react";
import useForm from "../../../../src/hooks/useForm";

const FormPageContainer = () => {
  const [formValues, handleChange, handleReset] = useForm({
    name: "",
    password: "",
    isChecked: false,
  });

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      console.log(formValues);
      handleReset();
    },
    [formValues]
  );

  return (
    <FormLayout
      formValues={formValues}
      handleInputChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};

export default FormPageContainer;
