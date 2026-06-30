import Navbar from './components/Navbar'
import Accueil from './components/Accueil'
import Services from './components/Services'
import Realisations from './components/Realisations'
import APropos from './components/APropos'
import Avis from './components/Avis'
import Zone from './components/Zone'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Accueil />
        <Services />
        <Realisations />
        <APropos />
        <Avis />
        <Zone />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
