import React from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'

const AboutMe: React.FC = () => (
  <section id="aboutme" className="my-8 md:my-12">
    <SectionHeading title="// About Me" />
    <p className="my-6">
      <span className="text-5xl">H</span>ello! My name is Mete Civelek. I'm a backend-focused full
      stack developer from Istanbul/Turkey. I recently went through a career change and now I'm
      pursuing a career in web development.
    </p>{' '}
    <p className="my-6">
      During this time I've gone through an extensive Full Stack bootcamp but did not stop there. I
      went the extra mile to improve myself. Started from html and css and moved on to more advanced
      stuff like containerization and orchestration tools. My journey led me to here, to you to be
      exact.
    </p>
    <p className="my-6">
      Now you are reading about me but this is not all. I'm always learning, always improving. Take
      a look at my current work and be on the lookout for more. Shall we?
    </p>
  </section>
)

export default AboutMe
