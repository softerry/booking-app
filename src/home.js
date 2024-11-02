import { useState } from "react";
import ContactForm from "./components/contact";
import NavBar from "./components/navbar";


function Home (){



return(  
<div>
    <header>
        {/* header section */}
        <div className="logo">
            <h1>clinic for all</h1>
        </div>
        {/* nav bar section */}
      <NavBar/>
    </header>
    {/* hero section */}
    <section className="hero" id="home">
        <h2>Your health, Our Priority</h2>
        <p>Providing quality healthcare to families and individual.</p>
        <a href="#booking" className="booking-btn">Booking an appointment</a> 
    </section>
    {/* About section */}
    <section id='about'>
        <h2>About Us</h2>
        <p>We are a clinic dedicated to offering the best medical care with compassion.</p>
    </section>
    {/* Services section */}
    <section id="services">
        <h2>Our services</h2>
        <div className="services-container">
            <div className="service">
                <h3>General Checkup</h3>
                <p>Comprehensive health assessments for patientss of all ages.</p>
            </div>
            <div className="service">
                <h3>Pediatrics</h3>
                <p>Specialized care for infants, children, and adolescents</p>
            </div>
            <div className="service">
                <h3>Dermatology</h3>
                <p>Skin health services including treatment for conditions and cosmetic procedures</p>
            </div>
        </div>
    </section>
    {/* testimonials section */}
    <section id="testimonials">
        <h2>What our patients say</h2>
        <div className="testimonial">
            <p>"The doctors and the staff were very attentive and kinds!"</p>
            <span>- John J. Low</span>
        </div>
        <div className="testimonial">
            <p>"Excellent service, I felt very comfortable during my visit </p>
            <span>- Patt D. Johnson</span>
        </div>
    </section>
    {/* Contact section */}
        <ContactForm/>
        {/* footer section */}
    <footer>    
        <p>&copy; 2024 Clinic for all. All Right Reserved.</p>
  
    </footer>

</div>  
);
}

export default Home;