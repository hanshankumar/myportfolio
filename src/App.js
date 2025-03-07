import React from 'react'
import Topcontainer from './Components/Topcontainer/Topcontainer'
import Header from './Components/Header/Header'
import Topcontent from './Components/Topcontent/Topcontent'
import Skillcontainer from './Components/Skillcontainer/Skillcontainer'
import Projectcontainer from './Components/Projectcontainer/Projectcontainer'
import "./App.css";
import Experiencecontainer from './Components/Experiencecontainer/Experiencecontainer'
import Contact from './Components/Contact/Contact'

function App() {
  return (
    <div>
      <Header/>
      <Topcontent/> 
      <Topcontainer/> 
      <Skillcontainer/>
      <Projectcontainer/>
      <Experiencecontainer/>
      <Contact/>
     

    </div>
  )
}

export default App