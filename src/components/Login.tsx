import useForm from "../hooks/useForm";
import Input from "./Input";
import React from "react";

const Login = () => {
  const [
    username,
    isUsernameValidate,
    isUsernameFocus,
    userNameChangeHandler,
    userNameFocusHandler,
    usernameValidation,
    setIsUsernameFocus,
  ] = useForm({ validation: { required: true } });

  const [
    password,
    isPasswordValidate,
    isPasswordFocus,
    passwordChangeHandler,
    passwordFocusHandler,
    passwordValidation,
    setIsPasswordFocus,
  ] = useForm({ validation: { required: true } });

  const canSubmit = isUsernameValidate && isPasswordValidate;

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!canSubmit) {
      setIsPasswordFocus(true);
      setIsUsernameFocus(true);
      return;
    }
  };

  return (
    <form
      className="w-1/4 bg-white rounded-lg py-7 px-36 flex flex-col justify-center gap-16"
      onSubmit={submitHandler}
    >
      <h1 className="self-center font-bold text-4xl">Login</h1>
      <div className="flex flex-col gap-10">
        <Input
          label="username"
          placeholder="please type your username"
          value={username}
          changeHandler={userNameChangeHandler}
          focusHandler={userNameFocusHandler}
          validate={isUsernameValidate}
          validation={usernameValidation}
          isFocus={isUsernameFocus}
        />
        <Input
          label="password"
          placeholder="please type your password"
          type="password"
          value={password}
          changeHandler={passwordChangeHandler}
          focusHandler={passwordFocusHandler}
          validate={isPasswordValidate}
          validation={passwordValidation}
          isFocus={isPasswordFocus}
        />
      </div>
      <button
        type="submit"
        className={`bg-purple-600 text-white rounded-lg py-3 hover:bg-purple-900 transition-all ${
          !canSubmit && "cursor-not-allowed bg-slate-500 hover:bg-slate-500"
        } `}
      >
        Login
      </button>
    </form>
  );
};

export default Login;
