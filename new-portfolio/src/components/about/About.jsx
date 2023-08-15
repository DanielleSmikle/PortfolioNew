import React from 'react'
import './about.css'

const About = () => {
  return (
    <section id='about'>
      <h5> Get to Know</h5>
      <h2> About Me</h2>

      <div className="container about__container">
        <div className="about__me">
        </div>
        <div className="about__content">
          
           <p>
           Hey, I’m Danielle Smikle - I am a Black woman Software Engineer with a passion for creativity, 
           learning, and evolving. During the pandemic, I entered the education field working with elementary-age children. 
           As an educator, I began to utilize technology to teach them and it was during this time that I 
           developed an interest in software engineering. In this role, I’ve learned that adaptability is one of the 
           greatest tools humans and robots can attain. I then graduated from General Assembly’s Software 
           Engineering Immersive Flex program and delved deeper into using Python to develop a sample website for an e-commerce 
           candle company. In this project, I further enhance my skills in translating 
           technical knowledge to non-technical clients. 
           I hope to be a liaison between clients and computers to better communicate with each other.
           When I’m not debugging my code, I enjoy experimenting in the kitchen for loved ones and 
           co-running the candle company with my mother. You can also see me at group classes at my local gym. 
           Come say hi!

           </p>
           <a href="#contact" className = 'btn btn-primary'>Let's Talk</a>
          </div>
        </div>
    </section>
  )
}

export default About