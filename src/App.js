import './App.css';
import News from './News.js';
import NavBar from './NavBar';
import { Routes, Route, Link } from "react-router-dom";
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
    <NavBar/>
    {/* <News/> */}
    <Routes>
        <Route path="/" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        
      </Routes>
    </div>
  );
}

export default App;
