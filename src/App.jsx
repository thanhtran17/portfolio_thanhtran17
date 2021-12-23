import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Menu from './components/menu/Menu';
import About from './components/about/About';
import Works from './components/works/Works';
import Rewards from './components/rewards/Rewards';
import Contact from './components/contact/Contact';
import './app.scss';
import 'antd/dist/antd.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div className="sections">
        <Intro />
        <About />
        <Works />
        <Rewards />
        <Contact />
      </div>
    </div>
  );
}

export default App;
