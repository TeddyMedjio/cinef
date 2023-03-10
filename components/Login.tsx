import React from "react";
import Image from "next/image";
import logo from "../public/img/logo.svg";
import Link from "next/link";

const Login = () => {
  return (
    <div className="flex flex-col px-7 pt-20 md:p-16 bg-black rounded-sm md:bg-opacity-70 w-full h-screen md:h-auto md:max-w-[450px]">
      <Link href="/" className="mb-10 md:hidden">
        <Image src={logo} alt="logo cinef" className="w-28 md:w-auto h-auto" />
      </Link>
      <h1 className="text-3xl font-bold text-white mb-7">Se connecter</h1>
      {/* formulaire email et mot de passe */}
      <form className="flex flex-col mb-5">
        <input
          required
          type="email"
          placeholder="Votre email"
          className="bg-gray p-3 placeholder-[#8c8c8c] text-white rounded-[4px] text-base outline-none mb-5"
        />
        <input
          required
          type="password"
          placeholder="Mot de passe"
          className="bg-gray p-3 placeholder-[#8c8c8c] text-white rounded-[4px] text-base outline-none "
        />
        <input
          type="submit"
          value="Se connecter"
          className="bg-green p-3 rounded-[4px] text-base text-white font-semibold mt-10 cursor-pointer"
        />
      </form>
      {/* checkbox */}
      <div className="flex items-center justify-between">
        <label className="flex items-center text-lightGray text-xs font-semibold">
          <input
            type="checkbox"
            name="Se souvenir de moi"
            className="mr-3 form-check-input appearance-none h-4 w-4 border border-green rounded-sm bg-[#acacac] checked:bg-green checked:border-green focus:outline-none transition duration-300 cursor-pointer"
          />
          Se souvenir de moi
        </label>
        <Link
          href="#"
          className="text-lightGray text-xs font-semibold hover:underline"
        >
          Besoin d'aide?
        </Link>
      </div>
      <p className="text-[#acacac] text-base mt-20">
        Nouveau sur Cinef?{" "}
        <Link href="/">
          <span className="md:ml-1 text-white font-medium hover:underline">
            Inscrivez-vous
          </span>
          .
        </Link>
      </p>
    </div>
  );
};

export default Login;
