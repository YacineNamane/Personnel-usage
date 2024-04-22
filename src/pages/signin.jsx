import React from "react";
import NavPannel from "../components/Header";
import LoginForm from "../components/Login";
function SignIn() {
  const handleSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <div>
      <NavPannel />
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default SignIn;
