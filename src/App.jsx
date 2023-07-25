import { AboutMe } from './AboutMe'
import { Projects } from './Projects'
import './styles.css'
import Fade from "react-reveal/Fade";
import { ContactUs } from './ContactMe';

function App(){
  return(
    <>
      <Fade left>
      <div className='header-row'>

        <h1>Cameron C's Portfolio Website</h1>
        <div className="header-right-column">
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About Me</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>
      </div>
      
        <div className="intro-box">
          <div className="left-column"> 
            <h1><span>Hello,</span> my name is <span>Cameron Cebula</span></h1> 
            <p>Junior computer engineering student at <span>University of Massachusetts-Amherst</span></p>
          </div>
          <div className="right-column">
            <img src="./portfolio/portrait.jpg" height="400"/>
          </div>     
        </div>


        <AboutMe/>
        <Projects/>
        <ContactUs/>
      </Fade>
    </>
  );
}

export default App;