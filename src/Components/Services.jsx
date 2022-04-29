import React from 'react';

import Title from './Title/Title.js'
import Canvas from './Canvas/Canvas.js'
import Instructions from './Instructions/Instructions.js'

function Services() {
  return (
    <div style={{marginLeft:'50px'}} className="my-5">
      <Title />
      <Instructions />
      <Canvas/>
    </div>
  );
}

export default Services;