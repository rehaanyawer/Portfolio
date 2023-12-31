import { useRef } from 'react';
import './portfolio.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const items = [
  {
    id: 1,
    title: 'REact app',
    img: 'https://images.pexels.com/photos/19380634/pexels-photo-19380634/free-photo-of-tabby-cat-yawning.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero hic blanditiis autem, velit, saepe optio eum, nemo deleniti atque fugit minus perspiciatis enim magnam dolorum minima recusandae nesciunt cumque veritatis!',
  },
  {
    id: 2,
    title: 'vanilla app',
    img: 'https://images.pexels.com/photos/19578467/pexels-photo-19578467/free-photo-of-a-bench-is-sitting-on-a-hillside-in-the-sun.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero hic blanditiis autem, velit, saepe optio eum, nemo deleniti atque fugit minus perspiciatis enim magnam dolorum minima recusandae nesciunt cumque veritatis!',
  },
  {
    id: 3,
    title: 'node js',
    img: 'https://images.pexels.com/photos/19526562/pexels-photo-19526562/free-photo-of-two-swans-swimming-in-a-lake-with-reeds-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero hic blanditiis autem, velit, saepe optio eum, nemo deleniti atque fugit minus perspiciatis enim magnam dolorum minima recusandae nesciunt cumque veritatis!',
  },
  {
    id: 4,
    title: 'typescript',
    img: 'https://images.pexels.com/photos/18866331/pexels-photo-18866331/free-photo-of-model-in-black-top-and-jacket.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero hic blanditiis autem, velit, saepe optio eum, nemo deleniti atque fugit minus perspiciatis enim magnam dolorum minima recusandae nesciunt cumque veritatis!',
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
            <button>See Demo</button>
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
