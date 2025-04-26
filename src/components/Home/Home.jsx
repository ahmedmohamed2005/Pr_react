import React from 'react' ;
import './Home.css' ;
import Heading from './Heading/Heading';
import News from './News/News';
import Featured from './Featured/Featured';

function Home() {
  return (
    <>
      <Heading />
      <Featured />
      <News/>
    </>
  )
}

export default Home
