"use client";

import { userService } from "@/apis/User/user.service";
import { BaseTextField } from "@/components/Input";
import { UpdateButton } from "@/components/UpdateButton";
import { useState } from "react";

export default function Login() {
  const [{ username, password }, setState] = useState({
    username: "",
    password: "",
  });

  return (
    <form
      className="flex flex-col items-center justify-center space-y-4 h-screen p-24"
      onSubmit={async (e) => {
        e.preventDefault();

        const user = await userService.login(username, password);

        console.log(user);
      }}
    >
      <BaseTextField
        label="Username"
        value={username}
        onChange={(value) => {
          setState((prev) => ({ ...prev, username: value }));
        }}
      />

      <BaseTextField
        label="Password"
        value={password}
        type="password"
        onChange={(value) => {
          setState((prev) => ({ ...prev, password: value }));
        }}
      />

      <UpdateButton
        type="submit"
        label="Login"
        onClick={() => {
          console.log("Clicked");
        }}
      />
    </form>
  );
}
