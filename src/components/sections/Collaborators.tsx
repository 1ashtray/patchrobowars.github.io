export default function Collaborators() {
    return (
      <section className="relative py-16 text-center">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gray-800 bg-cover bg-center opacity-30" />
  
        {/* Content Wrapper */}
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-8 text-white">Run in Collaboration with</h2>
          <div className="flex flex-wrap justify-center items-center gap-10">
            {/* Placeholder Logos */}
            <img
              src="/images/dog-patch-logo.png"
              alt="Dogpatch Labs Logo"
              className="h-24 w-auto grayscale hover:grayscale-0 transition duration-300"
            />
            <img
              src="/images/Patch-logo.png"
              alt="Patch Logo"
              className="h-24 w-auto"
            />
            <img
              src="/images/ISE-logo.png"
              alt="ISE Logo"
              className="h-24 w-auto"
            />
          </div>
        </div>
      </section>
    );
  }
  