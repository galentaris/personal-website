import { ThemeProvider } from './components/theme-provider'
import Layout from './pages/Layout'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'

function App() {
  return (
    <ThemeProvider defaultTheme="system" enableSystem>
      <Layout>
        {({ homeRef, aboutRef, projectsRef, experienceRef, scrollToSection }) => (
          <>
            <Hero ref={homeRef} scrollToSection={scrollToSection} />
            <About ref={aboutRef} />
            <Projects ref={projectsRef} />
            <Experience ref={experienceRef} />
          </>
        )}
      </Layout>
    </ThemeProvider>
  )
}

export default App
