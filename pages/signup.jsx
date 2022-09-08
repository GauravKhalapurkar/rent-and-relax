import Head from "next/head";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

const signup = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");

  const handleRadioChange = (e) => {
    setUserType(e);
    console.log(userType);
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100 ">
      <Head>
        <title>Sign Up - Rent & Relax</title>
      </Head>

      <main className="flex items-center justify-center w-full text-center">
        <div className="bg-white rounded-2xl shadow-xl flex w-2/3 max-w-4xl">
          {/** LOGIN SECTION **/}
          <div className="flex w-3/5 p-5 rounded-tl-xl rounded-bl-xl">
            <div className="my-auto mx-auto">
              <div className="inline-block">
                <img src="/logo.png" width={100} />
              </div>
              <h2 className="text-2xl text-blue font-bold mb-4">Sign Up</h2>
              <div className="h-1 w-16  bg-blue mb-4 mx-auto"></div>
              <form
                action=""
                method="post"
                className="flex flex-col items-center"
              >
                <div className="bg-gray-100 m-1 w-80  p-2 flex items-center rounded-md">
                  <FaRegEnvelope className="text-gray-400 m-2" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    required
                    className="bg-gray-100 text-sm flex-1 outline-none"
                  />
                </div>
                <div className="bg-gray-100 m-1 w-80 p-2 flex items-center rounded-md">
                  <MdLockOutline className="text-gray-400 m-2" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password *"
                    required
                    minLength="5"
                    className="bg-gray-100 text-sm flex-1 outline-none"
                  />
                </div>
                <div className="text-left mb-8 bg-gray-100 m-1 w-80 p-2 flex items-center rounded-md">
                  <label className="m-2 text-gray-400">Sign up as *</label>
                  <div className="">
                    <input
                      type="radio"
                      name="userType"
                      id="renter"
                      value="renter"
                      className="ml-4 mr-2"
                      onChange={handleRadioChange}
                    />
                    Renter
                    <input
                      type="radio"
                      name="userType"
                      id="rentee"
                      value="rentee"
                      className="ml-4 mr-2"
                      onChange={handleRadioChange}
                    />
                    Rentee
                  </div>
                </div>
                <button
                  type="submit"
                  className="text-yellow border-2 border-yellow rounded-full px-12 py-2 inline-block font-semibold hover:bg-yellow hover:text-white hover:transition-all"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>

          {/** SIGN UP SECTION **/}
          <div className="w-2/5 bg-yellow text-white rounded-tr-xl rounded-br-xl py-36 px-12">
            <h2 className="text-3xl font-bold mb-2">Hello Friend!</h2>
            <div className="h-1 w-20 bg-white mb-2 inline-block"></div>
            <p className="mb-2">Make renting products easier with us.</p>
            <p className="mb-8">Already have an account?</p>
            <button
              onClick={() => router.push("/login")}
              className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-blue hover:transition-all"
            >
              Login
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default signup;
