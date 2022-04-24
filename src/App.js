import './App.css';

import About from './components/About/about.component';
// import Projects from './components/Projects/projects.component';
import Skills from './components/Skills/skills.component';
import Navbar from './components/Navbar/navbar.component';
import Contact from './components/Contact/contact.component';

import ProjectsList from './components/Projects/project-list.component';

function App() {
  return (

    <main className="min-h-screen text-gray-400 bg-[#FFFFFF] body-font">
      
      <Navbar/>
      <About/>
      <ProjectsList/>
      <Skills/>
      <Contact/>
    </main>

  );
}

export default App;
