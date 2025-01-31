import localFont from "next/font/local";
import { useState } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);
  const [totalValue, setTotalValue] = useState(0);
  const [hourValue, setHourValue] = useState(0);

  const handleCalculateHour = (e) => {
    e.preventDefault();
    const totalHours = days * hours;
    const HourValueTemp = totalValue / totalHours;
    setHourValue(HourValueTemp || 0);
  }

  const handleClear = () => {
    setHourValue(0);
    setDays(0);
    setTotalValue(0);
    setHourValue(0);
  }

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} flex flex-col justify-between items-center justify-items-center min-h-screen p-8 pb-16 pt-16 font-[family-name:var(--font-geist-sans)]`}
    >
      <h1 className="text-blue-700 text-xl">CÁLCULO DO VALOR DE HORA</h1>
      <form className="flex flex-col justify-between items-center p-0 m-0" onSubmit={handleCalculateHour}>
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-900 dark:text-white">Horas trabalhadas (Dia)</label>
          <input type="number" value={hours} onChange={(e) => setHours(e.target.value)} id="hours" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-900 dark:text-white">Dias trabalhadas (Mês)</label>
          <input type="number" value={days} onChange={(e) => setDays(e.target.value)} id="days" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-900 dark:text-white">Salário total</label>
          <input type="number" value={totalValue} onChange={(e) => setTotalValue(e.target.value)} id="total_value" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <div className="w-full">
          <button type="submit" className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Calcular
          </button>
          <button onClick={() => handleClear()} className="text-white w-full bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
            Limpar
          </button>
        </div>
      </form>
      <p>Resultado: <text className="text-blue-700 text-2xl">R${hourValue.toFixed(2).replace(".", ",")}</text></p>
    </div>
  );
}
