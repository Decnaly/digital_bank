import React from 'react';
import Home from "./Home";
import Page from "./Page";
import Down from "./Down";




function App() {

  return (
      <div className='overflow-hidden'>
        <Page/>
        <Home/>
        <Down/>
      </div>
  )
}

export default App;