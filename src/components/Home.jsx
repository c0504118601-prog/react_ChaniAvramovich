import React from 'react';
// import homeImage from '../images/FIL_6464773_637484603333827674.jpg';
import homeImage from '../images/img2.png'
const Home = () => {
  const backgroundStyle = {
    backgroundImage: `url(${homeImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '91vh',
    width: '100%'
  };

  return (
    <div style={backgroundStyle}>
      
    </div>
  );
};

export default Home;
