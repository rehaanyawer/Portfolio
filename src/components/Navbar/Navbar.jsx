import './navbar.scss';
import { motion } from 'framer-motion';
import Sidebar from '../Sidebar/Sidebar';
const Navbar = () => {
  return (
    <div className='navbar'>
      {/* Sidebar */}
      <Sidebar />
      <div className='wrapper'>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Yawar Mushtaq
        </motion.span>
        <div className='social'>
          <a href='https://github.com/rehaanyawer'>
            <img src='/github.png' alt='' />
          </a>
          <a href='https://www.facebook.com/rehaan.yawer'>
            <img src='/facebook.png' alt='' />
          </a>
          <a href='https://www.linkedin.com/in/yawar-mushtaq-861298230/'>
            <img src='/linkedin.png' alt='' />
          </a>
          <a href='https://twitter.com/RehaanYawer'>
            <img src='/twitter.png' alt='' />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
