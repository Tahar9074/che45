import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Intro from './Intro';
import Projectlist from './Projectlist';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  var name="John ben fadhloun"
  return (
    <>
    <Navbar n={name}/>
    <Intro n={name}/>
    <Projectlist/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
