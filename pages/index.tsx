import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import logo from "../public/img/logo.svg";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-hero-tablette lg:bg-hero-home bg-no-repeat bg-cover bg-center">
      <Head>
        <title>Cinef Cameroun-Regarder vos Séries et Filmes en ligne</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" mx-auto lg:mx-0 w-10/12 lg:w-8/12 pt-12 lg:pl-32 h-full lg:bg-gradient-to-r  from-black ">
        <div className="flex flex-row items-center justify-between">
          <Link href="/">
            <Image
              src={logo}
              alt="logo cinef"
              className="w-28 md:w-[176px] h-auto"
            />
          </Link>
          <Link
            href="/login"
            className="hidden md:block text-base uppercase font-semibold text-green lg:pr-20"
          >
            Connexion
          </Link>
          <Link
            href="#"
            className="md:hidden text-xs font-semibold text-white lg:pr-20"
          >
            Confidentialité
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center md:block mt-[50%] md:mt-[20%]">
          <h1 className="text-center text-4xl md:text-6xl lg:text-left lg:text-7xl font-bold text-white mb-8">
            Films, séries TV <br /> et bien plus en illimité.
          </h1>
          <p className="text-center text-lg lg:text-left md:text-3xl text-white font-semibold">
            Regardez n'importe où. Annulez à tout moment.
          </p>

          <Link
            href="/login"
            className="md:hidden uppercase text-base text-white bg-green py-3 px-20 rounded-sm mt-28"
          >
            connexion
          </Link>
        </div>
        <div className="hidden md:flex flex-row items-center">
          <div className="mt-20 mr-20">
            <p className="text-center lg:text-left text-3xl text-white font-semibold mb-2">
              8,99€{" "}
              <span className="text-lightGray text-base font-medium">
                par mois
              </span>
            </p>
            <p className="text-center lg:text-left text-base text-lightGray font-medium mb-16">
              Sans engagement*. Voir conditions <br /> d'abonnement
            </p>
            <Link
              href="#"
              className="uppercase text-base text-white bg-green py-3 px-20 rounded-sm"
            >
              S'inscrire
            </Link>
          </div>

          <div className="mt-20">
            <p className="text-center lg:text-left text-3xl text-white font-semibold mb-2">
              89,90{" "}
              <span className="text-lightGray text-base font-medium">
                par mois
              </span>
            </p>
            <p className="text-center lg:text-left text-base text-lightGray font-medium mb-16">
              Economisez plus de 15%*. Voir <br /> conditions d'abonnement
            </p>
            <Link
              href="#"
              className="uppercase text-base text-white bg-green py-3 px-10 rounded-sm"
            >
              economisez sur 12 mois
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
