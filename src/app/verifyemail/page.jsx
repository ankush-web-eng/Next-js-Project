"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import axios from "axios";

export default function verifyEmailPage() {
  const [token, setToken] = React.useState("");
  const [isVerified, setIsverified] = React.useState(false);
  const [error, setError] = React.useState(false);

  const getUserVerification = async () => {
    try {
      await axios.post("/api/users/verifyemail", { token });
      setIsverified(true);
    } catch (error) {
      setError(true);
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken);
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      getUserVerification();
    }
  }, [token]);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-2xl pb-4">Verify Email</h1>
      <h2 className="bg-yellow-400 text-2xl py-3 rounded-lg text-black">{token ? token : "No Token"}</h2>
      {isVerified && (
        <div>
          <h1 className="text-4xl py-3">Verify Email</h1>
          <h2 className="bg-blue-400 text-4xl py-3 rounded-lg text-white">
            <Link href="/login">Login Here</Link>
          </h2>
        </div>
      )}

      {error && (
        <div>
          <h1 className="text-4xl py-3">Error Occured</h1>
        </div>
      )}
    </div>
  );
}
