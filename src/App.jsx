import { useEffect } from 'react'
import { LangProvider }    from './context/LangContext'
import { useCursor }       from './hooks/useCursor'
import Cursor          from './components/Cursor'
import Navbar          from './components/Navbar'
import Hero            from './components/Hero'
import TerminalSection from './components/TerminalSection'
import About           from './components/About'
import Projects        from './components/Projects'
import Experience      from './components/Experience'
import Contact         from './components/Contact'
import Footer          from './components/Footer'

function Portfolio() {
  const { curRef, ringRef, hoverOn, hoverOff } = useCursor()

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed') }),
      { threshold: 0.1 }
    )
    const attach = () => document.querySelectorAll('.reveal, .reveal-left, .reveal-scale').forEach(el => obs.observe(el))
    attach()
    const id = setInterval(attach, 400)
    return () => { obs.disconnect(); clearInterval(id) }
  }, [])

  return (
    <>
      <Cursor curRef={curRef} ringRef={ringRef} />
      <Navbar hoverOn={hoverOn} hoverOff={hoverOff} />
      <main>
        <Hero            hoverOn={hoverOn} hoverOff={hoverOff} />
        <TerminalSection hoverOn={hoverOn} hoverOff={hoverOff} />  {}
        <About           hoverOn={hoverOn} hoverOff={hoverOff} />
        <Projects        hoverOn={hoverOn} hoverOff={hoverOff} />
        <Experience      hoverOn={hoverOn} hoverOff={hoverOff} />
        <Contact         hoverOn={hoverOn} hoverOff={hoverOff} />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return <LangProvider><Portfolio /></LangProvider>
}
