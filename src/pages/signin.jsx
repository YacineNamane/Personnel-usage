import React from "react";
import NavPannel from "../components/Header";
import LoginForm from "../components/Login";
import Footer from "../components/Footer";

function SignIn() {
  const handleSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <div>
      <NavPannel />
      <LoginForm onSubmit={handleSubmit} />
      <Footer />
    </div>
  );
}

export default SignIn;
