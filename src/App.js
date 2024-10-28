import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from './component/About';
import Home from './pages/Home'; 
import Experience from './component/Experience';
import ProjectCard from './pages/projects';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/ProjectCard" element={<ProjectCard/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
