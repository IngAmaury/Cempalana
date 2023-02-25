import React, { useState } from "react";

export default function Client() {
  const [productID] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="w-screen h-screen m-0 p-0" id="cover">
      <div className="flex justify-center items-center w-50 h-full">
        <div className="p-8 border-4 border-black text-white text-bold text-center backdrop-blur-lg">
          <form onSubmit={handleSubmit}>
            <h1 className="text-7xl mb-6">Cempalana</h1>
            <label
              className="text-white text-bold text-3xl"
              htmlFor="product-id"
            >
              Ingresa la clave del producto que compraste
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 mt-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Escribe la clave de producto que compraste"
            ></input>
            <div className="flex items-center justify-center pt-6">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white text-2xl font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Registrar producto
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
