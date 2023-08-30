import { AboutMe } from './AboutMe'
import { Projects } from './Projects'
import './styles.css'
import Fade from "react-reveal/Fade";
import { ContactUs } from './ContactMe';
import intro from "./images/portrait.jpg"
import linkedin from "./images/linkedin.png"
import github from "./images/github-mark.svg"
import resumeicon from "./images/resume.png"


function App(){
  return(
    <>
      <Fade left>
      <div className='header-row'>

        <h1>Cameron C's Portfolio Website</h1>
        <div className="header-right-column">
          <ul>
            <li><a href="#id1">Home</a></li>
            <li><a href="#id2">About Me</a></li>
            <li><a href="#id3">Projects</a></li>
            <li><a href="#id4">Contact</a></li>
          </ul>
        </div>
      </div>
      
        <div className="intro-box">
          <div className="left-column"> 
            <h1><span>Hello,</span> my name is <span>Cameron Cebula</span></h1> 
            <p>Junior computer engineering student at <span>University of Massachusetts-Amherst</span></p>
            <div className='row-links'>
                <div className="linkedin"><a href='https://www.linkedin.com/in/cameron-cebula-437028215/'>
                  <img src={linkedin} alt="LinkedIn" height="50"/>
                  </a>
                </div>
                <div className="github"><a href='https://github.com/CamCeb'>
                  <img src={github} alt="GitHub" height="50"/>
                  </a>
                </div>
                <div className="resume"><a href="./downloads/CameronCebula_Resume.pdf" download>
                  <img src={resumeicon} alt="Resume" height="50"/>
                  </a>
                </div>
            </div>
          </div>
          <div className="right-column">
            <img src={intro} alt= "Intro" height="400"/>
          </div>     
        </div>

        <div class="seperations">
          <section id="id2">
            <AboutMe/>
          </section>
          <section id="id3">
            <Projects/>
          </section>
          <section id="id4">
          <ContactUs/>
          </section>
        </div>
      </Fade>
    </>
  );
}

export default App;