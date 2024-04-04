import React from 'react';
import './AboutUs.css'; // Assuming you have a CSS file for styles

const AboutUs = () => {
  return (
    <section id="aboutSection">
      <header id="headerAboutus">
        <h1 id="nameAboutus">CampusConnect</h1>
      </header>
      <div id="mainAboutus">
        <div id="page1Aboutus">
          <div id="page1tAboutus">
            <div id="logoAboutus">
              <img src="https://media.istockphoto.com/id/945391146/vector/team-group-of-people-speaking-and-debating-with-a-speech-bubble-vector-thin-line-icon-design.jpg?s=612x612&w=0&k=20&c=AtLELkysWwRIKs4tyllMRIPQqBLQjhMO_pA7bBZduNg=" alt="logo" />
            </div>
          </div>
          <div id="navbarAboutus">
            <h1>Welcome to CampusConnect</h1>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about-us">About Us</a></li>
              <li><a href="#login">Login</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
        <div id="page2Aboutus">
          <img src="https://images.pexels.com/photos/2422294/pexels-photo-2422294.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
          <p><b>At CampusConnect</b><br />we understand the importance of fostering a vibrant and engaging college community. That's why we've created a platform where clubs and societies can come together to share their events and activities, connecting students with the experiences that matter most to them.</p>
        </div>
        <div id="page3Aboutus">
          <p><b>Discover a World of Opportunities</b><br />
            Whether you're passionate about environmental activism, competitive sports, cultural exploration, or academic pursuits, CampusConnect has something for everyone. With a diverse array of clubs and societies covering a wide range of interests, there's no shortage of opportunities to get involved and make meaningful connections.</p>
          <img src="https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
        </div>
        <div id="page4Aboutus">
          <img src="https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
          <p><b>Stay Informed</b><br />
            With CampusConnect, you'll never miss out on the latest events and activities happening on campus. Our intuitive platform allows clubs and societies to easily post their upcoming events, complete with details, dates, and locations. Whether it's a weekly meeting, a special workshop, or a campus-wide celebration, you'll find all the information you need to plan your schedule and stay engaged.</p>
        </div>
        <div id="page5Aboutus">
          <p><b>Get Involved</b><br />
            Ready to dive in and explore everything your college community has to offer? CampusConnect makes it easy to get involved. Simply browse our comprehensive list of clubs
            </p>
            <div id="imggalleryAboutus">
            <img src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
            <img src="https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
            <img src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
            <img src="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
            <img src="https://images.pexels.com/photos/17983959/pexels-photo-17983959/free-photo-of-children-in-running-race.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
            <img src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
            </div>
            </div>
            <div id="page6Aboutus">
            <img src="https://images.pexels.com/photos/8092403/pexels-photo-8092403.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
            <p><b>Join the Community</b><br />
            Ready to become a part of something bigger than yourself? Join CampusConnect today and start exploring all that your college community has to offer. Whether you're a club leader looking to promote your events or a student eager to get involved, CampusConnect is your gateway to a world of opportunities, connections, and experiences. Sign up now and start making the most of your college experience!</p>
            </div>
            <footer id="footerAboutus">
            {/* You might want to add footer content here */}
            </footer>
            </div>
            </section>
            );
            };

export default AboutUs;