export default function Gallery() {
  return (
    <section className="relative bg-black text-white py-16">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gray-800 bg-cover bg-center opacity-30"></div>

      {/* Content Wrapper */}
      <div className="relative z-10">
        {/* Section 1: Last Year's Winners */}
        <div className="flex flex-col lg:flex-row items-center py-20 lg:py-24">
          <div className="lg:w-1/2 px-6 lg:px-16 text-center lg:text-left">
            <h2 className="text-6xl font-extrabold mb-6 text-orange-500">
              Last Years Winners
            </h2>
            <p className="text-2xl leading-relaxed">
              They’ve built, battled, and conquered. Do you have what it takes
              to outsmart them in the arena?
            </p>
          </div>
          <div className="lg:w-1/2 px-6 lg:px-16 flex justify-center">
            <img
              src="/images/winning.jpg"
              alt="Last Year's Winners"
              className="w-4/5 lg:w-3/5 rounded-lg shadow-xl border-4 border-orange-500 transform hover:scale-105 hover:brightness-125 transition-all duration-300"
            />
          </div>
        </div>

        {/* Section 2: Building */}
        <div className="flex flex-col lg:flex-row-reverse items-center py-20 lg:py-24">
          <div className="lg:w-1/2 px-6 lg:px-16 text-center lg:text-left">
            <h2 className="text-5xl font-bold mb-6 text-orange-400">
              Building
            </h2>
            <p className="text-xl leading-relaxed">
              Innovate, design, and create the ultimate robot. This is where it
              all begins.
            </p>
          </div>
          <div className="lg:w-1/2 px-6 lg:px-16 flex justify-center">
            <img
              src="/images/building.jpg"
              alt="Building"
              className="w-4/5 lg:w-3/5 rounded-lg shadow-xl border-4 border-orange-500 transform hover:scale-105 hover:brightness-125 transition-all duration-300"
            />
          </div>
        </div>

        {/* Section 3: Breaking */}
        <div className="flex flex-col lg:flex-row items-center py-20 lg:py-24">
          <div className="ml-60 lg:w-1/2 px-6 lg:px-16 text-center lg:text-left">
            <h2 className="text-5xl font-bold mb-6 text-orange-400">
              Breaking...
            </h2>
            <p className="text-xl leading-relaxed">
              Test the limits. Break barriers. Fail fast, and rebuild stronger.
            </p>
          </div>
          <div className="lg:w-1/2 px-6 lg:px-16 flex justify-center">
            <img
              src="/images/breaking.jpg"
              alt="Breaking"
              className="w-4/5 lg:w-3/5 rounded-lg shadow-xl border-4 border-orange-500 transform hover:scale-105 hover:brightness-125 transition-all duration-300"
            />
          </div>
        </div>

        {/* Section 4: Battling */}
        <div className="flex flex-col lg:flex-row-reverse items-center py-20 lg:py-24">
          <div className="lg:w-1/2 px-6 lg:px-16 text-center lg:text-left">
            {/* "And Most Importantly..." */}
            <h2 className="text-5xl font-bold mb-4 text-orange-400">
              And Most Importantly...
            </h2>
            {/* "Battling" with Emphasis */}
            <h1 className="text-7xl font-extrabold text-red-500 animate-pulse">
              Battling
            </h1>
            <p className="text-xl leading-relaxed mt-4">
              The ultimate test of power, resilience, and strategy. Show the
              world what your bot is made of.
            </p>
          </div>
          <div className="lg:w-1/2 px-6 lg:px-16 flex justify-center">
            <img
              src="/images/battling.jpg"
              alt="Battling"
              className="w-4/5 lg:w-3/5 rounded-lg shadow-xl border-4 border-orange-500 transform hover:scale-110 hover:brightness-150 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
