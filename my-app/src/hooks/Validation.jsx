import React from "react";

export default function useFormValidaion() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setisValid] = React.useState(true);

  function handleChange(e) {
    const { name, value } = e.target;

    if (e.target.validity.valueMissing === true) {
      setErrors({ ...errors, [name]: "Тута нужно ввести что-нибудь" });
    } else if (e.target.validity.tooShort === true) {
      setErrors({
        ...errors,
        [name]: "Коротковато, давай подключим фантазию",
      });
    } else if (e.target.validity.typeMismatch === true) {
      setErrors({
        ...errors,
        [name]: "Ну вообще-то тут должно быть мыло, а не вот это вот=)",
      });
    } else {
      setErrors({ ...errors, [name]: e.target.validationMessage });
    }
    console.log(e.target.validity);
    setValues({ ...values, [name]: value });
    setisValid(e.target.closest("form").checkValidity());
  }

  const resetForm = React.useCallback(
    (newValues = {}, newErrors = {}, isValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setisValid(isValid);
    },
    [setValues, setErrors, setisValid]
  );

  return {
    resetForm,
    values,
    errors,
    isValid,
    handleChange,
    setValues,
  };
}
