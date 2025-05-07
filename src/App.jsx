
import './App.css'
import ContestFormatsSection from './components/ContestFormatsSection'
import FAQSection from './components/FAQSection'
import HeroSection from './components/HeroSection'
import HIWSection from './components/HIWSection'
import Layout from './components/layout/Layout'
import WaitListSection from './components/WaitListSection'
import WinnrXBotSection from './components/WinnrXBotSection'

function App() {

  return (
    <>
     
            <Layout>
              <HeroSection />
              {/* <HIWSection /> */}
              <ContestFormatsSection />
              <WinnrXBotSection />
              <WaitListSection />
              <FAQSection />
            </Layout>
        
    </>
  )
}

export default App
