export default function RegisterForm() {
    return (
      <section id="register" className="relative bg-black text-white py-16 text-center">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gray-800 bg-cover bg-center opacity-30" />
  
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-8 text-orange-500">Register Your Interest</h2>
          <p className="mb-6 text-lg">
            Be part of the ultimate robotics battle. Fill out the form below to register your interest!
          </p>
          <div className="flex justify-center">
            {/* Embedded Form */}
            <iframe
              src="https://tally.so/embed/woVqoN"
              width="100%"
              height="600"
              frameBorder="0"
              title="Register Interest Form"
              className="rounded-lg shadow-lg max-w-3xl w-full"
            ></iframe>
          </div>
          <p className="mt-6 text-sm">
            Having trouble with the form?{" "}
            <a
              href="https://tally.so/r/woVqoN"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 underline hover:text-orange-600 transition-colors"
            >
              Click here to open it in a new tab.
            </a>
          </p>
        </div>
      </section>
    );
  }
  