import { useState } from 'react';
import { SplitText, ChromaGrid, Panorama } from './animations';
import profilePicture from './assets/profile-picture.svg';
import placeholder from './assets/placeholder.svg';
import './App.css';

function App() {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <>
      <header className="topbar">
        <nav className="nav">
          <a href="#home" className="nav-logo">Profile</a>
          <ul className="nav-links">
            <li><a href="#hero">Main</a></li>
            <li><a href="#about">About me</a></li>
            <li><a href="#studies">Studies</a></li>
            <li><a href="#experience">Professional experience</a></li>
            <li><a href="#hobby">Hobby</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* HERO SECTION */}
        <div id="hero" className="background-image">
          <div className="overlay"></div>
          <div className="profile-container">
            <img src={profilePicture} alt="Profile Picture" className="profile-picture" />
            <div className="introduction">
              <h1 className="intro-title">Welcome to My Profile</h1>
              <SplitText
                text="Hi, thanks for wanting to get to know me better!"
                className="intro-text"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                tag="p"
                onLetterAnimationComplete={handleAnimationComplete}
              />
            </div>
          </div>
        </div>

        {/* ABOUT SECTION */}
        <section id="about" className="page-section">
          <div className="section-inner">
            <SplitText
              text="About me"
              className="section-title"
              tag="h2"
              delay={80}
              duration={0.5}
              ease="power2.out"
              splitType="chars"
              from={{ opacity: 0, y: 20 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-80px"
              textAlign="left"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            <div className="section-content">
              <p>Short bio — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
              <img src={placeholder} alt="About image" className="section-image" />
            </div>
          </div>
        </section>

        {/* STUDIES SECTION */}
        <section id="studies" className="page-section alt">
          <div className="section-inner">
            <SplitText
              text="Studies"
              className="section-title"
              tag="h2"
              delay={80}
              duration={0.5}
              ease="power2.out"
              splitType="chars"
              from={{ opacity: 0, y: 20 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-80px"
              textAlign="left"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            <div className="section-content">
              <p>Education details placeholder — Bachelor of Arts in Visual Culture, 20XX–20YY. Courses: Typography, History of East Asian Art, Web Design.</p>
              <img src={placeholder} alt="Studies image" className="section-image" />
            </div>
          </div>
        </section>

        {/* PROFESSIONAL EXPERIENCE */}
        <section id="experience" className="page-section">
          <div className="section-inner">
            <SplitText
              text="Professional experience"
              className="section-title"
              tag="h2"
              delay={80}
              duration={0.5}
              ease="power2.out"
              splitType="chars"
              from={{ opacity: 0, y: 20 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-80px"
              textAlign="left"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            <div className="section-content">
              <p>Role 1 — Web Designer at Example Co. (20AA–20BB). Worked on layout design and portfolio sites.</p>
              <p>Role 2 — Frontend Developer at Company XYZ. Focused on accessible, responsive UI and lightweight animation.</p>
              <img src={placeholder} alt="Experience image" className="section-image" />
            </div>
          </div>
        </section>

        {/* HOBBY SECTION */}
        <section id="hobby" className="page-section alt">
          <div className="section-inner">
            <SplitText
              text="Hobby"
              className="section-title"
              tag="h2"
              delay={80}
              duration={0.5}
              ease="power2.out"
              splitType="chars"
              from={{ opacity: 0, y: 20 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-80px"
              textAlign="left"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            <p style={{ marginBottom: '24px', color: '#333' }}>
              Hobbies include: photography, calligraphy, tea ceremony, hiking, and exploring traditional crafts.
            </p>
            <div className="panorama-container">
              <Panorama
                items={[
                  'https://i.pravatar.cc/1200?img=11',
                  'https://i.pravatar.cc/1200?img=12',
                  'https://i.pravatar.cc/1200?img=13',
                  'https://i.pravatar.cc/1200?img=14',
                  'https://i.pravatar.cc/1200?img=15',
                  'https://i.pravatar.cc/1200?img=16'
                ]}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
