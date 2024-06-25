import React from "react";
import { useState } from "react";
import { Icon } from "@iconify/react";
import TextInput from "../components/shared/TextInput";
import PasswordInput from "../components/shared/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { makeUnauthenticatedPOSTRequest } from "../utils/serverHelpers.js";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  const login = async () => {
    const data = { email, password };
    const response = await makeUnauthenticatedPOSTRequest("/auth/login", data);
    if (response && !response.err) {
      const token = response.token;
      const date = new Date();
      date.setDate(date.getDate() + 30);
      setCookie("token", token, { path: "/", expires: date });
      alert("Success");
      navigate("/");
    } else {
      alert("Failure");
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="p-5 border-b border-solid border-gray-400 w-full flex justify-center">
        <Icon icon="logos:spotify" width="150" />
      </div>
      <div className="w-1/3 py- flex items-center justify-center flex-col">
        <div className="font-bold mb-12">To continue, log in to spotify.</div>
        <TextInput
          label="email id OR username"
          placeholder="email id OR username"
          value={email}
          setValue={setEmail}
        ></TextInput>
        <PasswordInput
          label="Password"
          placeholder="Password"
          value={password}
          setValue={setPassword}
        ></PasswordInput>
        <div className="w-full flex items-center justify-end my-8">
          <button className="bg-green-300 font-semibold p-3 px-10 rounded-full" onClick={(e) => {
                            e.preventDefault();
                            login();
                        }}>
            Log in
          </button>
        </div>
        <div className="w-full border-b border-solid border-gray-400 "></div>
        <div className="my-6 semi-bold text-lg">Don't have an account?</div>
        <div className="border border-gray-400 text-gray-400 w-full flex items-start justify-center py-4 rounded-full font-bold">
          <Link to="/signup">SIGN UP FOR SPOTIFY</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
