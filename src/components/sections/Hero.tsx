// "use client";

// import { useState, useEffect } from "react";

// export default function Hero() {
//   // Countdown Timer Logic
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });

//   useEffect(() => {
//     const eventDate = new Date("2024-02-01T00:00:00").getTime();

//     const interval = setInterval(() => {
//       const now = new Date().getTime();
//       const distance = eventDate - now;

//       if (distance > 0) {
//         setTimeLeft({
//           days: Math.floor(distance / (1000 * 60 * 60 * 24)),
//           hours: Math.floor(
//             (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//           ),
//           minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
//           seconds: Math.floor((distance % (1000 * 60)) / 1000),
//         });
//       } else {
//         clearInterval(interval);
//       }
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative h-screen flex flex-col items-center justify-center text-center bg-black text-white">
//         <div className="absolute inset-0 bg-gray-800 bg-cover bg-center opacity-30" />

//       <img
//         src="/images/logo.png"
//         alt="Patch Robowars Logo"
//         className="w-70 h-auto mb-4 hover:scale-105 transition-transform duration-300"
//       />
//       <h1 className="text-4xl font-bold uppercase text-orange-500">
//         The Ultimate Robotics Battle Begins
//       </h1>
//       <p className="mt-2 text-lg">February 1st, 2024 – Dog Patch Labs, Dublin</p>
//       <div className="mt-4 flex space-x-4 text-lg">
//         <div>
//           <span className="block text-3xl font-bold">{timeLeft.days}</span>
//           <span>Days</span>
//         </div>
//         <div>
//           <span className="block text-3xl font-bold">{timeLeft.hours}</span>
//           <span>Hours</span>
//         </div>
//         <div>
//           <span className="block text-3xl font-bold">{timeLeft.minutes}</span>
//           <span>Minutes</span>
//         </div>
//         <div>
//           <span className="block text-3xl font-bold">{timeLeft.seconds}</span>
//           <span>Seconds</span>
//         </div>
//       </div>
//       <button className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
//         Register Now
//       </button>
//     </section>
//   );
// }


"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  // Countdown Timer Logic
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const eventDate = new Date("2024-02-01T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center bg-black text-white">
        <div className="absolute inset-0 bg-gray-800 bg-cover bg-center opacity-30" />
        <img
        src="/images/logo.png"
        alt="Patch Robowars Logo"
        className="w-70 h-auto mb-4 hover:scale-105 transition-transform duration-300 animate-fade-in"
        style={{ animationDelay: "0.5s" }}
        />

      <h1 className="text-4xl font-bold uppercase text-orange-500">
        The Ultimate Robotics Battle Begins
      </h1>
      <p className="mt-2 text-lg">February 1st, 2024 – Dog Patch Labs, Dublin</p>
      <div className="mt-4 flex space-x-4 text-lg">
        <div className="animate-bounce">
            <span className="block text-3xl font-bold">{timeLeft.days}</span>
            <span>Days</span>
        </div>
        <div className="animate-bounce">
            <span className="block text-3xl font-bold">{timeLeft.hours}</span>
            <span>Hours</span>
        </div>
        <div className="animate-bounce">
            <span className="block text-3xl font-bold">{timeLeft.minutes}</span>
            <span>Minutes</span>
        </div>
        <div className="animate-bounce">
            <span className="block text-3xl font-bold">{timeLeft.seconds}</span>
            <span>Seconds</span>
        </div>
        </div>

      <button className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
        Register Now
      </button>
    </section>
  );
}
