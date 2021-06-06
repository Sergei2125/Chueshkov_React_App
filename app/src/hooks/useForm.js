import { useState, useCallback } from "react";

export default (InitialValues) => {
  const [formValues, setFormValues] = useState(InitialValues);

  const handleFormChange = useCallback(
    (event) => {
      const { value, name, type } = event.target;

      if (type === "checkbox") {
        console.log(event.target.checked);
        setFormValues({ ...formValues, [name]: event.target.checked });
        return;
      }
      setFormValues({ ...formValues, [name]: value });
    },
    [formValues]
  );

  const handleReset = useCallback(() => {
    setFormValues(InitialValues);
  }, []);

  return [formValues, handleFormChange, handleReset];
};
