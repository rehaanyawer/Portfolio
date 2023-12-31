import { useRef } from 'react';
import './services.scss';
import { motion, useInView } from 'framer-motion';

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
      animate={'animate'}
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
            <motion.b whileHover={{ color: 'orange' }}> For Your </motion.b>
            Company.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>

      <motion.div className='listContainer' variants={variants}>
        <motion.div
          className='box'
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>Web Scrapping Using Next.js</h2>
          <p>
            I am currently in the process of building a dynamic web scraping
            application using Next.js, a powerful React framework, and Node.js
            for server-side functionality. This application will empower users
            to input a URL, triggering a background process that utilizes
            Node.js to scrape and present pertinent information from the
            provided webpage.
          </p>
        </motion.div>

        <motion.div
          className='box'
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>Interactive Data Dashboard</h2>
          <p>
            I am in the exciting phase of developing an interactive data
            dashboard, seamlessly combining the power of React for the frontend
            and Node.js for the backend. This project aims to deliver a robust
            platform for users to visualize and analyze complex datasets in
            real-time through dynamic charts and graphs.
          </p>
        </motion.div>

        <motion.div
          className='box'
          whileHover={{ backgroundColor: 'lightgray', color: 'black' }}
        >
          <h2>Subscription Box with a Twist</h2>
          <p>
            Create a subscription box service with a unique twist related to
            your industry. For example, if you&apos;re in the beauty industry,
            you could offer a monthly subscription that includes personalized
            skincare products based on individual preferences.
          </p>
        </motion.div>

        {/* <motion.div
          className='box'
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>Branding</h2>
          <p></p>
        </motion.div> */}
      </motion.div>
    </motion.div>
  );
};
export default Services;
