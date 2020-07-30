import React from 'react';
import Header from './components/Header'
import Section from './components/Section'
import Intro from './components/Intro'
import Resume from './components/Resume'
import TechAchvs from './components/TechAchvs'
import AcadAchvs from './components/AcadAchvs'
import PosnOfRes from './components/PosnOfRes'
import ExtraCurr from './components/ExtraCurr'
import Contact from './components/Contact'
// import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import './App.css'

const techachvs = [
  'Selected for final round of Smart India Hackathon 2019-20 and National Hackathon 2019-20.',
  'First position in various coding contests in college',
  'Top performer and active participant in various Hackathons in different colleges'
]
const acadachvs = [
  'Secured a position in the top 5 percent among more than 1,80,000 students who appeared for JEE Advanced2017 with a CRL of 12891'
]
const posnOfRes = [
  'Lead the team of 5 people to the finals of Smart India Hackathon (2019-20)',
  'Lead the team of 4 people to the finals of National Hackathon(2019-20).',
  'Vice President of MMCoders Codechef Society'
]  

const extraCurr  = [
  'Secured 3rd positon in Inter-College Declamation Contest.'
]
const links = {
 LinkedIn: 'https://www.linkedin.com/in/chakshu-jain-b54a0515a/',
 Github: 'https://github.com/chakshujain/',
 Codeforces: 'https://codeforces.com/profile/iamchakshu/',
 Codechef: 'https://www.codechef.com/users/chakshujain/',
 GeeksForGeeks: 'https://auth.geeksforgeeks.org/user/mrck572/',
 Quora: 'https://www.quora.com/profile/Chakshu-Jain-4'
}
const otherinfo = {
  phone:'+91- 7206838191',
  email:'mrck572@gmail.com'
}

function App() {
  return (
    
    <div className="App">
     <Header />
      <Section />
     <Intro />
     <Resume>
     </Resume>
     <TechAchvs techachvs = {techachvs} />
     <AcadAchvs acadachvs = {acadachvs} />
     <PosnOfRes posnOfRes = {posnOfRes} />
     <ExtraCurr extraCurr = {extraCurr} />
     <Contact links = {links} otherinfo = {otherinfo} />
    </div>
    
  );
}

export default App;
