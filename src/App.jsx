
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
      <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HeroSection />
              <HIWSection />
              <ContestFormatsSection />
              <WinnrXBotSection />
              <WaitListSection />
              <FAQSection />
            </Layout>
          }
        />
       
        
        <Route path="/how-it-works" element={<HIWSection />} />
        <Route path="/contest-formats" element={<ContestFormatsSection />} />
        
      </Routes>
    </Router>
    </>
  )
}

export default App
