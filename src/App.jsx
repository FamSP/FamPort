import { useState } from 'react'
import ScrollReveal from 'scrollreveal'
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
    /** Scroll reavel*/
    const sections = document.querySelectorAll("section[id]");
    console.log(sections)
    const scrollActive =() =>{
      const scrollY = window.scrollY;
      sections.forEach((current)=>{
        const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
          sectionId = current.getAttribute("id");

          if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".nav-menu a[href*=" + sectionId +"]")
            .classList.add("active-link");
          } else {
            document
              .querySelector(".nav-menu a[href*=" + sectionId +"]")
              .classList.remove("active-link");
          }
      });
      
    }
    const sr = ScrollReveal({
      origin:"top",
      distance: "80px",
      duration:2000,
      reset: true
    })

    //feature
    sr.reveal(".featured-text-card",{});
    sr.reveal(".featured-name",{delay: 100});
    sr.reveal(".featured-text-info",{delay: 200});
    sr.reveal(".featured-text-btn",{delay: 200});
    sr.reveal(".featured-icons",{delay: 200});
    sr.reveal(".featured-image",{delay: 200});

    //Projec
    sr.reveal(".Project-box",{interval: 200});

    //Heading
    sr.reveal(".top-header",{});

    //left right
    const srLeft = ScrollReveal({
      origin:"left",
      distance: "80px",
      duration : 2000,
      reset: true,
    })

    srLeft.reveal(".about-info",{delay: 200});
    srLeft.reveal(".contact-info",{delay: 200});

    const srRight = ScrollReveal({
      origin:"Right",
      distance: "80px",
      duration : 2000,
      reset: true
    })

    srRight.reveal(".skills-box",{delay: 100});
    srRight.reveal(".form-control",{delay: 100});



    window.addEventListener("scroll", scrollActive);

    //

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
