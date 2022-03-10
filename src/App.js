// import logo from './logo.svg';
import './App.css';

import About from './components/About/about.component';
import Projects from './components/Projects/projects.component';
import Skills from './components/Skills/skills.component';
import Navbar from './components/Navbar/navbar.component';
import Contact from './components/Contact/contact.component';

function App() {
  return (

    <main className="min-h-screen text-gray-400 bg-[#FFFFFF] body-font">
      
      <Navbar/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </main>

  );
}

export default App;
