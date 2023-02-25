import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [walletIsDetected, setWalletIsDetected] = useState(false);
  const router = useRouter();
  const checkIfWalletIsConnected = async () => {
    const { solana } = window;

    if (solana) {
      if (solana.isPhantom) {
        console.log("Phantom wallet detected");
        setWalletIsDetected(true);
      } else {
        console.log("No Phantom wallet detected");
        setWalletIsDetected(false);
      }
    }
  };

  useEffect(() => {
    const onLoad = async () => {
      await checkIfWalletIsConnected();
    };

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
      return () => window.removeEventListener("load", onLoad);
    }
  }, []);

  const connectWallet = async () => {
    const { solana } = window;

    if (solana) {
      const response = await solana.connect();
      console.log(`Wallet public key: ${response.publicKey.toString()}`);
      setWalletAddress(response.publicKey.toString());
      router.push("/who-are-you");
    }
  };

  return (
    <div className="w-screen h-screen m-0 p-0" id="cover">
      <div className="flex justify-center items-center w-50 h-full">
        <div className="p-8 border-4 border-black text-white text-bold text-center backdrop-blur-lg">
          <h1 className="text-7xl mb-6">Cempalana</h1>
          <p className="text-white text-bold text-3xl mb-4">
            Conectando identidades con tecnología y el espiritu del cempazuchitl
          </p>
          {walletIsDetected && !walletAddress && (
            <button
              className="p-4 bg-indigo-500 text-white rounded-lg"
              onClick={connectWallet}
            >
              Conectar mi wallet
            </button>
          )}
          {!walletIsDetected && (
            <a href="https://phantom.app/" target="_blank">
              <button className="p-4 bg-indigo-500 text-white rounded-lg">
                Descarga Phantom Wallet
              </button>
            </a>
          )}
          <p className="text-md text-white text-center text-bold mt-3">
            *Esta dApp necesita de Phantom Wallet para funcionar
          </p>
        </div>
      </div>
    </div>
  );
}
