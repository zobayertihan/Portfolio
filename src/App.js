import About from './About';
import './App.css';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Projects from './Components/Projects';
import Resume from './Components/Resume';
import Skills from './Components/Skills';

function App() {
  return (
    <div className='w-full h-screen flex flex-col'>
      <Header></Header>
      <div className='w-max-[1000px] mx-auto flex flex-col gap-16 mt-36'>
        <Resume></Resume>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
