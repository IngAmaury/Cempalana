import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen m-0 p-0" id="cover">
      <div className="flex justify-center items-center w-50 h-full">
        <div className="p-8 border-4 border-black text-white text-bold text-center backdrop-blur-lg">
          <h1 className="text-7xl mb-6">Cempalana</h1>
          <p className="text-white text-bold text-3xl mb-4">
            Conectando identidades con tecnología y el espiritu del cempazuchitl
          </p>
          <Link href="/who-are-you">
            <button className="p-4 bg-indigo-500 text-white rounded-lg">
              Conectar Wallet
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
