import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-black-100 overflow-hidden relative flex flex-col items-center w-full min-h-screen sm:px-10 px-5">
      <div className="w-full max-w-7xl">
        {/* <Hero />
        <About />
        <Projects /> */}
        {/* <Experience /> */}
        <Contact />
      </div>
    </main>
  );
}
