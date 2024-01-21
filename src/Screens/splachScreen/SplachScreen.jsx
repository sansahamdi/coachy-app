// SplashScreen.js
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useNavigate } from "react-router-dom";

const SplashScreen = () => {
    const navigate=useNavigate()
  const [showSecondScreen, setShowSecondScreen] = useState(false);

  const firstScreenAnimation = useSpring({
    opacity: showSecondScreen ? 0 : 1,
    transform: showSecondScreen ? 'translateY(-100%)' : 'translateY(0%)',
    height: showSecondScreen ? '0vh' : '100vh',
  });

  const secondScreenAnimation = useSpring({
    opacity: showSecondScreen ? 1 : 0,
    transform: showSecondScreen ? 'translateY(0%)' : 'translateY(100%)',
    height: showSecondScreen ? '100vh' : '0vh',
  });

  const handleClick = () => {
    setShowSecondScreen(true);
  };

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <animated.div style={{ ...firstScreenAnimation, textAlign: 'center' }}>
        {/* First Screen Content */}
        <img src={require('../../assets/logo/logo1.png')} alt="First Logo" style={{marginTop:20,width:"90%" }} />
        <button onClick={handleClick} style={{ background: '#5D54A0', color: '#fff', padding: '15px 30px', fontSize: '18px', borderRadius: '5px', cursor: 'pointer', border: 'none',marginTop:"30%" }}>Get Started</button>
      </animated.div>

      <animated.div style={{ ...secondScreenAnimation, background: '#3F3C3C', textAlign: 'center',display:"flex",flexDirection:"column",alignItems: 'center', justifyContent: 'flex-start' }}>
        {/* Second Screen Content */}
        <img src={require('../../assets/logo/logo2.png')} alt="Second Logo" style={{width:"90%"}} />
        <img src={require('../../assets/logo/imageCoachy.png')} alt="Second Logo" style={{ width:"70%",textAlign:"center" }} />
        <button onClick={()=>{navigate('/SignUp')}} style={{ background: '#5D54A0', color: '#fff', padding: '4% 5%', fontSize: '18px', borderRadius: '5px', cursor: 'pointer', border: 'none',marginTop:"30%" }}>Create Account</button>
      </animated.div>
    </div>
  );
};

export default SplashScreen;
