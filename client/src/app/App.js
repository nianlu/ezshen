import React, { useState } from 'react';

import M from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'

import Nav from './Nav'
import Body from './Body'

function App() {

  const [active, setActive] = useState('home')

  return (
    <div>
      <Nav active={active} onActive={setActive} />
      <Body active={active} />
    </div>
  );
}

export default App;
