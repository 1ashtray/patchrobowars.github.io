export default function Contact() {
    return (
      <section id="contact" className="p-8 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <p className="mt-2">Have questions? Reach out to us!</p>
          <div className="mt-4 space-y-2">
            <a
              href="mailto:your-email@example.com"
              className="text-neon-blue underline"
            >
              your-email@example.com
            </a>
            <br />
            <a
              href="https://instagram.com/your-instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-blue underline"
            >
              Follow us on Instagram
            </a>
          </div>
        </div>
      </section>
    );
  }
  