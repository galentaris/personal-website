import { ThemeProvider } from './components/theme-provider'
import Layout from './components/layout/layout'
import Hero from './components/sections/Hero'
import About from './components/sections/about'
import Projects from './components/sections/projects'
import Experience from './components/sections/experience'

function App() {
  return (
    <ThemeProvider defaultTheme="system" enableSystem>
      <Layout>
        {({ homeRef, aboutRef, projectsRef, experienceRef, scrollToSection }) => (
          <>
            <Hero ref={homeRef} scrollToSection={scrollToSection} aboutRef={aboutRef} />
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
