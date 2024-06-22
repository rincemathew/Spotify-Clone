import React from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { Icon } from "@iconify/react";
import TextInput from "../components/shared/TextInput";
import PasswordInput from "../components/shared/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import { makeUnauthenticatedPOSTRequest } from "../utils/serverHelpers.js";

function SignUp() {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cookie, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  const signUp = async () => {
    if (email !== confirmEmail) {
      alert("Email and confirm email fields must match. Please check again");
      return;
    }
    const data = { email, password, username, firstName, lastName };
    const response = await makeUnauthenticatedPOSTRequest(
      "/auth/register",
      data
    );
    if (response && !response.err) {
      // const token = response.token;
      // const date = new Date();
      // date.setDate(date.getDate() + 30);
      // setCookie("token", token, {path: "/", expires: date});
      alert("Success");
      // navigate("/home");
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
        <div className="font-bold mb-4 text-2xl">
          Sign up for free to start listening.
        </div>
        <TextInput
          label="email Address"
          placeholder="email Address"
          value={email}
          setValue={setEmail}
        ></TextInput>
        <TextInput
          label="Confirm email Adress"
          placeholder="Confirm email Adress"
          value={confirmEmail}
          setValue={setConfirmEmail}
        ></TextInput>
        <TextInput
          label="Username"
          placeholder="Enter your username"
          className="mb-6"
          value={username}
          setValue={setUsername}
        />
        <PasswordInput
          className="mb-6"
          label="Create Password"
          placeholder="Enter Password"
          value={password}
          setValue={setPassword}
        ></PasswordInput>
        <div className="w-full flex justify-between items-center space-x-8">
          <TextInput
            label="First Name"
            placeholder="Enter Your First Name"
            className="my-6"
            value={firstName}
            setValue={setFirstName}
          />
          <TextInput
            label="Last Name"
            placeholder="Enter Your Last Name"
            className="my-6"
            value={lastName}
            setValue={setLastName}
          />
        </div>
        <div className="w-full flex items-center justify-center my-8">
          <button
            className="bg-green-300 font-semibold p-3 px-10 rounded-full"
            onClick={(e) => {
              e.preventDefault();
              signUp();
            }}
          >
            Sign Up
          </button>
        </div>
        <div className="w-full border-b border-solid border-gray-400 "></div>
        <div className="my-6 semi-bold text-lg">Already have an accout?</div>
        <div className="border border-gray-400 text-gray-400 w-full flex items-start justify-center py-4 rounded-full font-bold">
          <Link to="/login">LOG IN INSTEAD</Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
