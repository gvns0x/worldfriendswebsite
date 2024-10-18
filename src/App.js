import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header.js'
import Feature from './Components/Feature/Feature.js';
import Hero from './Components/Hero/Hero.js';
import JustDragIt from './Components/JustDragIt/JustDragIt.js';
import Letter from './Components/Letter/Letter.js'

// Feature images

import Timezones from './Images/FeatureImages/Property 1=1_Timezones.png'
import Grouping from './Images/FeatureImages/Property 1=2_Grouping.png'
// import Drag from './Images/FeatureImages/Property 1=3_Drag.png'
import DragVideo from './Images/FeatureImages/slidevideo.mp4'
import Reset from './Images/FeatureImages/Property 1=4_Reset.png'
import Availability from './Images/FeatureImages/Property 1=5_Availability.png'
import DarkMode from './Images/FeatureImages/DarkModeRows.png'

// Pages
import TermsAndConditions from './Pages/TermsAndConditions/TermsAndConditions';
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy';

function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
    <Route path="/" element={
      <header className="App-header">
        <Header/>
        <Hero/>
        <JustDragIt/>
        <div className='Feature-container'>
          <Feature title="Add people in any timezone" description="All you need is someone’s name and their location. " image={Timezones} />
          <Feature title="Define availability windows" description="You can define when people are available. Some people use it for worktimes (8am - 6pm), some use it for when their friends are sleeping (10pm - 8am)." image={Availability} />
          <Feature title="Automatically group with the same time and availability" description="To avoid display duplicate times, people in the same time are automatically grouped." image={Grouping} />
          <Feature title="Easily convert timezones by dragging" description="With one finger, drag anyone’s time and see the impact on others’ time in their timezone." image={DragVideo} videostyle="500px"/>
          <Feature title="Reset to current time by double-tapping anywhere" description="Always go back to the current time by double-tapping anywhere." image={Reset} />
          <Feature title="Switch to dark mode" description="Dark mode is available based on your iPhone system's preferences." image={DarkMode} titleColor="#ffffff" descriptionColor="rgba(255,255,255,0.55)" bgColor="#000000"/>
        </div>
        <Letter/>
      </header>
    }/>
    <Route path="/tc" element={<TermsAndConditions />} />
    <Route path="/pp" element={<PrivacyPolicy />} />
    </Routes>
    </div>
    </Router>
  );
}

export default App;
