import './app.scss';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
const App = () => {
  return (
    <div>
      <section id='Homepage'>
        <a href=''>
          <Navbar />
        </a>
        <Hero />
      </section>
      <section id='Services'>Parallax</section>
      <section>Services</section>
      <section id='Portfolio'>Parallax</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id='Contact'>Contact</section>
      {/* <Test /> */}
    </div>
  );
};

export default App;
