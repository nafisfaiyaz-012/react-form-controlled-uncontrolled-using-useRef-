import { useState } from "react";

const useInputField = (defaultValue) => {
  const [filedValue, setFieldValue] = useState(defaultValue);

  const handleOnChange = (e) => {
    return setFieldValue(e.target.value);
  }

  return [filedValue,handleOnChange]
};

export default useInputField;
