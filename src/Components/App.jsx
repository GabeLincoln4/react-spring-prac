import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring';


function App() {

  const styles = useSpring({
      config: {friction: 100},
      delay: 1000,
      loop: false,
      from: {opacity: 0},
      to: {opacity: 1}
  });
  
  

  return(
    <animated.div className="text-3xl text-blue-300 w-80 h-80" style={{...styles}}>Hello World</animated.div>
    
      
  );
 
  
}

export default App;
