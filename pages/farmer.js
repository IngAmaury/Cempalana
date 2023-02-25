import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

export default function Farmer() {
  const [seedName, setSeedName] = useState("");
  const [seedOrigin, setSeedOrigin] = useState("");
  const [name, setName] = useState("");
  const [farmName, setFarmName] = useState("");
  const [farmAddress, setFarmAddress] = useState("");

  useEffect(() => {
    const onLoad = async () => {
      Cookies.set("userType", "farmer");
    };

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
      return () => window.removeEventListener("load", onLoad);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen m-0 p-0 bg-gradient-to-r from-indigo-500 to-indigo-700">
      <div className="w-1/2 p-6 bg-white round-lg">
        <h1 className="text-center text-4xl mb-4">Registro de producto</h1>
        <form onSubmit={handleSubmit}>
          <h4 className="text-xl mb-4">Datos de la semilla</h4>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="seed-name"
            >
              Nombre de la semilla
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="seed-name"
              type="text"
              placeholder="Nombre de la semilla"
              onChange={(e) => setSeedName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="seed-origin"
            >
              Origen de la semilla
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="seed-origin"
              type="text"
              placeholder="Origen de la semilla"
              onChange={(e) => setSeedOrigin(e.target.value)}
            />
          </div>
          <h4 className="text-xl mb-4">Datos del agricultor</h4>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Nombre
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Nombre"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="farm-name"
            >
              Nombre de la granja
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="farm-name"
              type="text"
              placeholder="Nombre de la granja"
              onChange={(e) => setFarmName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="farm-address"
            >
              Dirección de la granja
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="farm-address"
              type="text"
              placeholder="Dirección de la granja"
              onChange={(e) => setFarmAddress(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Registrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
