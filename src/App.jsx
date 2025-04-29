
import './App.css'
import ContestFormatSection from './components/ContestFormatSection'
import FAQSection from './components/FAQSection'
import HeroSection from './components/HeroSection'
import HIWSection from './components/HIWSection'
import Layout from './components/layout/Layout'

function App() {

  return (
    <>
      
       <Layout>
        <HeroSection/>
        <HIWSection/>
        <ContestFormatSection/>
        <FAQSection/>

       </Layout>
    </>
  )
}

export default App
