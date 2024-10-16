import { useState } from 'react'
import Header from './companent/Header'
import ContactBox from './companent/ContactBox '
import FeaturedBox from './companent/FeaturedBox'
import ProjectsBox from './companent/ProjectsBox'
import AboutBox from './companent/AboutBox'
import Footer from './companent/Footer'
import Typed from 'typed.js';
import { useEffect } from 'react'
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const options = {
      strings: ["Student", "Developer", "Learner"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000,
    };

    const typed = new Typed(".typedText", options);

    return () => {
      // Clean up the typing effect on component unmount
      typed.destroy();
    };
  }, []);
  return (
    <>
       <div className="App">
      <Header />
      <main className="wrapper">
        <FeaturedBox />
        <AboutBox />
        <ProjectsBox />
        <ContactBox />
      </main>
      <Footer />
        </div>

    </>
  )
}

export default App
