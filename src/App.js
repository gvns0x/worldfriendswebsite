import './App.css';
import Header from './Components/Header/Header.js'
import Feature from './Components/Feature/Feature.js';
import logo from './logo.svg';
import Hero from './Components/Hero/Hero.js';
// Features

import Timezones from './Images/FeatureImages/Property 1=1_Timezones.png'
import Grouping from './Images/FeatureImages/Property 1=2_Grouping.png'
import Drag from './Images/FeatureImages/Property 1=3_Drag.png'
import Reset from './Images/FeatureImages/Property 1=4_Reset.png'
import Availability from './Images/FeatureImages/Property 1=5_Availability.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Hero/>
        <div className='Feature-container'>
          <Feature title="Add people in any timezone" description="All you need is someone’s name and their location. " image={Timezones} />
          <Feature title="Group people who are in the same time" description="To avoid display duplicate times, people in the same time are automatically grouped." image={Grouping} />
          <Feature title="Easily convert timezones by dragging" description="With one finger, drag anyone’s time and see the impact on others’ time in their timezone." image={Drag} />
          <Feature title="Reset to current time by double-tapping anywhere" description="Always go back to the current time by double-tapping anywhere." image={Reset} />
          <Feature title="Define availability windows" description="You can define when people are available. Some people use it for worktimes (8am - 6pm), some use it for when their friends are sleeping (10pm - 8am)." image={Availability} />
        </div>
      </header>
    </div>
  );
}

export default App;
