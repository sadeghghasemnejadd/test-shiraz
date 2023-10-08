import React, { useState } from "react";

interface IUseForm {
  validation: { required?: boolean };
}
type IUseFormOutput = [
  value: string,
  isInputValidate: boolean,
  isInputFocus: boolean,
  inputChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
  inputFocusHandler: () => void,
  validation: { required?: boolean },
  setIsInputFocus: React.Dispatch<React.SetStateAction<boolean>>
];

const useForm = ({ validation }: IUseForm): IUseFormOutput => {
  const [value, setValue] = useState<string>("");

  const [isInputValidate, setIsInputValidate] = useState<boolean>(false);

  const [isInputFocus, setIsInputFocus] = useState<boolean>(false);

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (validation.required) {
      if (e.target.value) {
        setIsInputValidate(true);
      } else {
        setIsInputValidate(false);
      }
    }
  };

  const inputFocusHandler = () => {
    setIsInputFocus(true);
  };

  return [
    value,
    isInputValidate,
    isInputFocus,
    inputChangeHandler,
    inputFocusHandler,
    validation,
    setIsInputFocus,
  ];
};

export default useForm;
