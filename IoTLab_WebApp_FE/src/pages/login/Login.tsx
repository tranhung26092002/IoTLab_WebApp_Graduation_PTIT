import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

type Props = {};

export const Login: React.FC<Props> = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);

  return (
    <>
      <Header />
      <div className="flex justify-center min-h-screen bg-[#f6f8fa] py-10">
        <div className="relative flex flex-col items-center w-full max-w-[1200px] px-5">
          <div className="absolute left-0 bottom-0 w-1/2 max-w-full h-full">
            <img
              src={require("../../assets/img/login_left.png")}
              alt="logo_left"
            />
          </div>
          <div className="absolute right-0 bottom-0 w-1/2 max-w-full h-full">
            <img
              src={require("../../assets/img/login_right.png")}
              alt="logo_right"
            />
          </div>
          <div className="relative bg-white p-5 rounded-xl shadow-lg z-10 w-full max-w-[400px] mt-[5vh] ring-1 ring-gray-200">
            <div className="flex flex-col items-center w-full">
              <div className="w-40 mb-6">
                <img
                  src={require("../../assets/img/logo120.png")}
                  alt="logo_main"
                  className="w-full h-auto block"
                />
              </div>
              <div className="w-full">
                {!isRegister ? (
                  <LoginForm
                    email={email}
                    password={password}
                    onEmailChange={setEmail}
                    onPasswordChange={setPassword}
                    onToggleRegister={() => setIsRegister(true)}
                  />
                ) : (
                  <RegisterForm
                    username={username}
                    email={email}
                    password={password}
                    confirmPassword={confirmPassword}
                    onUsernameChange={setUserName}
                    onEmailChange={setEmail}
                    onPasswordChange={setPassword}
                    onConfirmPasswordChange={setConfirmPassword}
                    onToggleLogin={() => setIsRegister(false)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
