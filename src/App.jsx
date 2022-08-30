import React from 'react';
import './App.scss';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Nabvar/Navbar';
import Home from './pages/Home/Home';
import CreativeDesign from './pages/CreativeDesign/CreativeDesign';
import DigitalMarketing from './pages/DigitalMarketing/DigitalMarketing';
import VideoAndImages from './pages/Video&Images/VideoAndImages';
import SocialMedia from './pages/SocialMedia/SocialMedia';
import WritingAndTranslation from './pages/Writing&Translation/WritingAndTranslation';
import Working from './pages/Home/Working/Working';
import Working1 from './Components/first-work/Working1';

const App=()=>{
  return (
    <>
      {/* <Navbar/>
      <Home/>
      <CreativeDesign/>
      <DigitalMarketing/>
      <VideoAndImages/>
      <SocialMedia/>
      <WritingAndTranslation/> */}
      <Footer/>
      <Working1/>

    
    </>
  );
}

export default App;
