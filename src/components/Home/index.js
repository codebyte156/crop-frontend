import { useEffect, useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimateLetters';
import './index.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  const nameArray = ['A', 'P', 'P', ' ', 'N', 'A', 'M', 'E'];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);


  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
        </h1>
        
        <Link to="/crops" className="button button-crop">
          
        </Link>
        <Link to="/crops" className="button button-fertilizer">
          
        </Link>
        <Link to="/crops" className="button button-disease">
          
        </Link>

        <div className="heading">
        <h2 className='x1'>
          CROP RECOMMENDATION
        </h2>
        <h2 className='x2'>
          FERTILIZER RECOMMENDATION
        </h2>
        <h2 className='x3'>
          DISEASE RECOMMENDATION
        </h2>

        </div>
      </div>
    </div>
  );
};

export default Home;
