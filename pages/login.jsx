import Head from "next/head";
import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

const Login = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100 ">
      <Head>
        <title>Login - Rent & Relax</title>
      </Head>

      <main className="flex items-center justify-center w-full text-center">
        <div className="bg-white rounded-2xl shadow-xl flex w-2/3 max-w-4xl">
          {/** LOGIN SECTION **/}
          <div className="flex w-3/5 p-5 rounded-tl-xl rounded-bl-xl">
            <div className="my-auto mx-auto">
              <div className="inline-block">
                <img src="/logo.png" width={100} />
              </div>
              <h2 className="text-2xl text-green-500 font-bold mb-4">
                Login to your Account
              </h2>
              <div className="h-1 w-16  bg-green-500 mb-4 mx-auto"></div>
              <div className="flex flex-col items-center mb-8">
                <div className="bg-gray-100 m-1 w-80  p-2 flex items-center rounded-md">
                  <FaRegEnvelope className="text-gray-400 m-2" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-gray-100 text-sm flex-1 outline-none "
                  />
                </div>
                <div className="bg-gray-100 m-1 w-80 p-2 flex items-center rounded-md">
                  <MdLockOutline className="text-gray-400 m-2" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="bg-gray-100 text-sm flex-1 outline-none"
                  />
                </div>
              </div>
              <a
                href=""
                className="text-green-500 border-2 border-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white"
              >
                Login
              </a>
            </div>
          </div>

          {/** SIGN UP SECTION **/}
          <div className="w-2/5 bg-green-500 text-white rounded-tr-xl rounded-br-xl py-36 px-12">
            <h2 className="text-3xl font-bold mb-2">Hello Friend!</h2>
            <div className="h-1 w-20 bg-white mb-2 inline-block"></div>
            <p className="mb-8">Make renting products easier with us.</p>
            <a
              href=""
              className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500"
            >
              Sign Up
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
