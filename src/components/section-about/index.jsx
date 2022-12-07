import React from 'react';

import Section from '../section';

const classes = {
  about: 'mb-6 text-darkgray font-normal',
};

const SectionAbout = ({ about }) => {
  return (
    <Section title="About Me">
      <div className={classes.about}>
        <p>{about}</p>
      </div>
    </Section>
  );
};

export default SectionAbout;
