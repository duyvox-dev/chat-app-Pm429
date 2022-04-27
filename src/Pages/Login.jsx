import React from "react";
import { FaPaperPlane, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { auth, db, fbProvider } from "../firebase/config";
// import { signInWithPopup } from "firebase/auth";
export default function Login() {
    const handleFbLogin = () => {
        // signInWithPopup(auth, fbProvider);
    };
    // auth.onAuthStateChanged((user) => console.log(user));
    return (
        <div className=" bg-dark-200 flex justify-center items-center w-screen min-h-screen">
            <div className="w-full px-2 py-2 md:w-[400px]">
                <h1 className="text-3xl text-center">
                    <FaPaperPlane className=" text-dark-50 inline-block mr-5" />
                    <span class="text-gray-200 font-semibold">Pm429</span>
                </h1>
                <h2 className="text-2xl my-5 text-center text-slate-300 font-light">
                    Login to Your Account!
                </h2>
                <div className="bg-dark-100 rounded-md box-border px-5 py-8 mt-8 shadow-sm shadow-slate-900 ">
                    <label className="block">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block font-medium text-gray-300 text-lg">
                            Email
                        </span>
                        <input
                            type="email"
                            className="block w-full rounded-md bg-darkestBlue borde bg-dark-300 outline-0	px-3 py-1.5  mt-2 focus:border-slate-900 text-gray-300 text-lg placeholder:text-gray-400"
                            placeholder="email@email.com"
                        />
                    </label>
                    <label className="block mt-3">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block  font-medium text-gray-300 text-lg">
                            Password
                        </span>
                        <input
                            type="password"
                            className="block w-full rounded-md bg-darkestBlue borde bg-dark-300 outline-0	px-3 py-1.5  mt-2 focus:border-slate-900 text-gray-300 text-lg placeholder:text-gray-400"
                            placeholder="*******"
                        />
                    </label>
                    <div className="mt-8">
                        <button className="block w-full bg-slate-200 hover:bg-slate-300  rounded-md px-10 py-1.5 ease-in-out duration-300 font-semibold text-lg">
                            <span>Login </span>
                        </button>
                        <div className="flex items-center my-4 gap-2">
                            <div className="flex-1 border-[1px] border-gray-500"></div>
                            <p className="text-gray-300">OR</p>
                            <div className="flex-1 border-[1px] border-gray-500"></div>
                        </div>
                        <button
                            className="block w-full bg-dark-50 hover:bg-sky-600 text-white rounded-md  py-1.5  ease-in-out duration-300"
                            onClick={handleFbLogin}
                        >
                            <FaFacebookF className="inline-block mr-2 " />
                            <span className="font-semibold text-lg">
                                Continue with Facebook
                            </span>
                        </button>
                    </div>
                    <div className="login-option flex justify-between mt-5">
                        <Link
                            to="/forgot-password"
                            className="text-gray-300 font-semibold hover:text-sky-400"
                        >
                            Forgot Password?
                        </Link>
                        <Link
                            to="/signup"
                            className="text-gray-300 hover:text-sky-400 font-semibold"
                        >
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
