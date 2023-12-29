import './app.scss';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Parallax from './components/Parallax/parallax';
import Services from './components/Services/services';
import Portfolio from './components/Portfolio/Portfolio';

const App = () => {
  return (
    <div>
      <section id='Homepage'>
        <a href=''>
          <Navbar />
        </a>
        <Hero />
      </section>
      <section id='Services'>
        <Parallax type='services' />
      </section>
      <section>
        <Services />
      </section>
      <section id='Portfolio'>
        <Parallax type='portfolio' />
      </section>
      <Portfolio />
      <section id='Contact'>Contact</section>
      {/* <Test /> */}
    </div>
  );
};

export default App;
