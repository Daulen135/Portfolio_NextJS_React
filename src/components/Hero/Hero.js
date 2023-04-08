import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        Proficient in MERN stack development (MongoDB, Express, React, Node.js) and a background in the oil and gas sector. Possess strong skills in project & product management that help with accomplishing robust projects. Passionate about coaching, leadership and team-building.


        </SectionText>
        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
        <Button onClick={()=>window.location='https://pmcoaching.solutions'} > Learn More</Button>

      </LeftSection>
    </Section>
  </>
);

export default Hero;