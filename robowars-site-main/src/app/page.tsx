import Hero from "@/components/sections/Hero";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";
import NavBar from "@/components/ui/NavBar";
import Collaborators from "@/components/sections/Collaborators";
import FAQ from "@/components/sections/FAQ";
import RegisterForm from "@/components/sections/RegisterForm";

export default function Home() {
  return (
    <main className="bg-black text-white font-space-mono">
      <NavBar />
      <Hero />
      <Gallery />
      <Collaborators />
      <FAQ />
      <RegisterForm />
      <Contact />
    </main>
  );
}
