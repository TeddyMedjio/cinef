import React from "react";
import Head from "next/head";
import Login from "../components/Login";
import Image from "next/image";
import logo from "../public/img/logo.svg";
import Link from "next/link";

const login = () => {
  return (
    <div className="bg-hero-desktop bg-cover bg-no-repeat bg-center h-screen w-full">
      <Head>
        <title>Cinef</title>
      </Head>
      <div className="mx-auto h-24 hidden md:flex items-center w-11/12 ">
        <Link href="/">
          <Image src={logo} alt="logo cinef" />{" "}
        </Link>
      </div>
      <div className=" flex items-center justify-center md:mt-[20%] lg:mt-[10%]">
        <Login />
      </div>
    </div>
  );
};

export default login;
