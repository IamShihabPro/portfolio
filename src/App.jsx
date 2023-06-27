import React from 'react';
// import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Social from './components/Social/Social';
import About from './components/About/About';
import Skill from './components/Skill/Skill';
import Portfolio from './components/Portfolio/Portfolio';
import ContactForm from './components/Contact/ContactForm';
import Footer from './components/Footer/Footer';
import Navigation from './components/NavBar/Navigation';

const App = () => {
  return (
    <>
      {/* <NavBar></NavBar> */}
      <Navigation></Navigation>
      <div className='pt-10'>
        <Home></Home>
      </div>
      <Social></Social>
      <About></About>
      <Skill></Skill>
      <Portfolio></Portfolio>
      <ContactForm></ContactForm>
      <Footer></Footer>
      
    </>
  );
};

export default App;