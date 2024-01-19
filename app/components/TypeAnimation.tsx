"use client"

import { TypeAnimation } from 'react-type-animation';

 const Typeanimation = () => {
  return (
    <TypeAnimation
      sequence={[
        'I am a Full Stack Web developer.',
        2000,
        'I am a Next.js & React Specialist.',
        2000,
        'I am a Python Enthusiast.',
        2000,
        "FREE Consultation Available for All.",
        2000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};

export default Typeanimation;