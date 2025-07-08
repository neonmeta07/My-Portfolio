import AnimatedBackground from "@/components/animated-background"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import OptimizedSkills from "@/components/optimized-skills"
import OptimizedExperience from "@/components/optimized-experience"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-cream overflow-hidden">
      <AnimatedBackground />
      <Header />
      <Hero />
      <About />
      <OptimizedSkills />
      <OptimizedExperience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
