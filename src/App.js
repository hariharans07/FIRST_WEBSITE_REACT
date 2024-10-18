import logo from './logo.svg';
import './App.css';
import './main.css';
import Home from './home';
import About from './about';
import Service from './service';
import Products from './products';
import Team from './team';
import Gallery from './gallery';
import Contact from './contact';
import Skills from './skills';

function App() {
  return (
    <div className="App">
  <Home />
  <About />
  <Skills />
  <Service />
  <Products />
  <Team />
  <Gallery />
  <Contact />
    </div>
  );
}

export default App;
