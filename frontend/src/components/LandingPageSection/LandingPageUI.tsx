

import HomeComponent from '../Home/HomeComponent'
import EducationSectionComponent from '../EducationSection/EducationSectionComponent'
import ProjectComponent from '../ProjectSection/ProjectComponent'
import CPComponent from '../CPSection/CPComponent'

import ContactComponent from '../Contact/ContactComponent'

function LandingPageUI() {
  return (
    <div>
      <div id="home">
        <HomeComponent />
      </div>
      <div id="profile">
        <EducationSectionComponent />
      </div>
      <div id="project">
        <ProjectComponent />
      </div>
      <div id="coding">
        <CPComponent />
      </div>
      {/* <div id="message">
        <MessageComponent />
      </div> */}
      <div id="contact">
        <ContactComponent />
      </div>
    </div>
  )
}

export default LandingPageUI
