import { useRef, useState } from 'react';
import './Contact.scss';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();

  const formRef = useRef();

  const [error, setError] = useState(false);

  const [success, setSuccess] = useState(false);

  const isInView = useInView(ref, { margin: '-100px' });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_k1crhja',
        'template_5t34kxb',
        formRef.current,
        'f1rXzhqGLtwCEdmjm'
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      ref={ref}
      className='contact'
      variants={variants}
      initial='initial'
      whileInView={'animate'}
    >
      <motion.div className='textContainer' variants={variants}>
        <motion.h1 variants={variants}>Let&apos;s Work Together</motion.h1>

        <motion.div className='item' variants={variants}>
          <h2>Mail</h2>
          <span>Rehaanyawer57@gmail.com</span>
        </motion.div>

        <motion.div className='item' variants={variants}>
          <h2>Address</h2>
          <span>Srinagar, Jammu & Kashmir</span>
        </motion.div>

        <motion.div className='item' variants={variants}>
          <h2>Contact N0.</h2>
          <span>+91 700 6387689</span>
        </motion.div>
      </motion.div>

      <div className='formContainer'>
        <motion.div
          className='phoneSvg'
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <svg
            width='450px'
            height='450px'
            viewBox='0 0 32.666 32.666'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}
              d='M15 3C16.5315 3.17014 17.9097 3.91107 19 5C20.0903 6.08893 20.8279 7.46869 21 9M14.5 6.5C15.2372 6.64382 15.9689 6.96892 16.5 7.5C17.0311 8.03108 17.3562 8.76284 17.5 9.5M8.20049 15.799C1.3025 8.90022 2.28338 5.74115 3.01055 4.72316C3.10396 4.55862 5.40647 1.11188 7.87459 3.13407C14.0008 8.17945 6.5 8 11.3894 12.6113C16.2788 17.2226 15.8214 9.99995 20.8659 16.1249C22.8882 18.594 19.4413 20.8964 19.2778 20.9888C18.2598 21.717 15.0995 22.6978 8.20049 15.799Z'
              stroke='#FFA500'
              stroke-width='0.2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        </motion.div>
        <motion.form
          onSubmit={sendEmail}
          ref={formRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
          <input type='text' required placeholder='Name' name='name' />
          <input type='email' required placeholder='E-Mail' name='email' />
          <textarea rows={8} placeholder='Message' name='message' />
          <button>Submit</button>
          {error && 'Error'}
          {success && 'Success'}
        </motion.form>
      </div>
    </motion.div>
  );
};
export default Contact;
