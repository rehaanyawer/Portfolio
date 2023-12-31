import { useRef } from 'react';
import './portfolio.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const items = [
  {
    id: 1,
    title: 'Drum Kit',
    img: '/drumkit.png',
    desc: 'Turn your browser into a virtual drum set with our JavaScript Drum Kit! Hit keys on your keyboard to play different drum sounds in real-time. It&ados;s easy, fun, and you create your beats on the fly. Immerse yourself in the joy of making music right from your browser with this dynamic and entertaining drumming experience! 🥁🎶',
    url: 'https://drum-kit-omega-six.vercel.app/',
  },
  {
    id: 2,
    title: 'Tin Dog',
    img: 'tin.png',
    desc: 'Welcome to TinDog, where you can meet new and interesting dogs nearby. Our easy-to-use app is designed for you and your furry friend to find the perfect match. TinDog ensures that every dog has a plan tailored to their needs. From the free Chihuahua plan to the premium Mastiff plan, its time to meet the hottest dogs in town! 🐾📱💕',
    url: 'https://tin-dog-lovat.vercel.app/',
  },
  {
    id: 3,
    title: 'Simon Game',
    img: '/simon.png',
    desc: 'Dive into the nostalgia of the Simon game, brought to life with JavaScript! This interactive web application tests your memory as you strive to repeat a sequence of colors. The game begins with a randomly generated color pattern, and your task is to replicate it by clicking on the corresponding colors.',
    url: 'https://simon-game-challenge-five.vercel.app/',
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section id='latest'>
      <div className='container'>
        <div className='wrapper'>
          <div className='imageContainer' ref={ref}>
            <img src={item.img} alt='' />
          </div>
          <motion.div className='textContainer' style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>
              <a href={item.url}>See Demo</a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className='portfolio' ref={ref}>
      <div className='progress'>
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className='progressBar'></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};
export default Portfolio;
