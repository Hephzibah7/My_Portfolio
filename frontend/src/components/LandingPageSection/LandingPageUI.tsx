import React from 'react'

import HomeComponent from '../Home/HomeComponent'
import EducationSectionComponent from '../EducationSection/EducationSectionComponent'
import ProjectComponent from '../ProjectSection/ProjectComponent'
import CPComponent from '../CPSection/CPComponent'
import MessageComponent from '../Message/MessageComponent'
import ContactComponent from '../Contact/ContactComponent'

function LandingPageUI() {
  return (
    <div>
        <div>
            <HomeComponent/>
        </div>
      <div>
        <EducationSectionComponent/>
      </div>
      <div>
        <ProjectComponent/>
      </div>
      <div>
        <CPComponent/>
      </div>
      <div>
        <MessageComponent/>
      </div>
      <div>
        <ContactComponent/>
      </div>
    </div>
  )
}

export default LandingPageUI
