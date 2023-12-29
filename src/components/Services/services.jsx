import { useRef } from 'react';
import './services.scss';
import { animate, motion, useInView } from 'framer-motion';

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: '-100px' });
  return (
    <motion.div
      className='services'
      variants={variants}
      initial='initial'
      // animate='animate'
      // whileInView='animate'
      ref={ref}
      animate={isInView && 'animate'}
    >
      <motion.div className='textContainer' variants={variants}>
        <p>
          I focus on Helping your organization grow <br /> and move forward
        </p>
        <hr />
      </motion.div>

      <motion.div className='titleContainer' variants={variants}>
        <div className='title'>
          <img src='/people.webp' alt='' />
          <h1>
            <motion.b whileHover={{ color: 'orange' }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className='title'>
          <h1>
            <motion.b whileHover={{ color: 'orange' }}>For Your</motion.b>
            Company.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>

      <motion.div className='listContainer' variants={variants}>
        <motion.div
          className='box'
          whileHover={{ backgroundColor: 'lightgray', color: 'black' }}
        >
          <h2>Branding</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled
          </p>
          <button>Go</button>
        </motion.div>

        <motion.div
          className='box'
          whileHover={{ backgroundColor: 'lightgray', color: 'black' }}
        >
          <h2>Branding</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled
          </p>
          <button>Go</button>
        </motion.div>

        <motion.div
          className='box'
          whileHover={{ backgroundColor: 'lightgray', color: 'black' }}
        >
          <h2>Branding</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled
          </p>
          <button>Go</button>
        </motion.div>

        <motion.div
          className='box'
          whileHover={{ backgroundColor: 'lightgray', color: 'black' }}
        >
          <h2>Branding</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
export default Services;
