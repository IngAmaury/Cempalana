import React, { useEffect, useState } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export default function WhoAreYou() {
  const [userType] = useState(Cookies.get("userType"));
  const router = useRouter();

  useEffect(() => {
    const onLoad = async () => {
      const type = await verifyUserType();
      Cookies.set("userType", type);
    };

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
      return () => window.removeEventListener("load", onLoad);
    }

    if (userType && userType == "farmer") {
      router.push("/farmer");
    }

    if (userType && userType == "client") {
      router.push("/client");
    }

    if (!userType) {
      router.push("/who-are-you");
    }
  });

  const verifyUserType = async () => {
    const type = Cookies.get("userType");

    return type;
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen m-0 p-0 bg-gradient-to-r from-indigo-500 to-indigo-700">
      <div className="w-1/2 p-6 bg-white round-lg">
        <h1 className="text-center text-4xl mb-4">¿Quién eres?</h1>
        <div className="block">
          <Link href="/farmer">
            <button className="p-5 mt-6 text-3xl text-bold mb-6 bg-green-400 md:w-50 w-full text-white">
              Soy Agricultor
            </button>
          </Link>
          <Link href="/client">
            <button className="p-5 text-3xl tex-bold bg-orange-400 md:w-50 w-full text-white">
              Soy Cliente
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
