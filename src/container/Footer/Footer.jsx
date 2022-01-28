import React from 'react';
import { motion } from 'framer-motion';

import NavigationDots from '../../components/NavigationDots';
import SocialMedia from '../../components/SocialMedia';
import { images } from '../../constants';
import './Footer.scss';

function Footer() {
  return (
    <div className="app__container app__whitebg" id="footer">
      <SocialMedia />
      <motion.div
        animate={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__footer app__flex"
      >
        <div className="app__head-text">
          <h2>Take a coffee & chat with me</h2>
        </div>

        <div className="app__footer-cards">
          <div className="app__footer-card ">
            <img src={images.email} alt="email" />
            <p>hello@micael.com</p>
          </div>
          <div className="app__footer-card">
            <img src={images.mobile} alt="phone" />
            <p>+1 (123) 456-7890</p>
          </div>
        </div>

        <div className="app__footer-form">
          <div>
            <input type="text" placeholder="Your Name" />
          </div>
          <div>
            <input type="email" placeholder="Your Email" />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
            />
          </div>
          <button type="button">Send Message</button>
        </div>
      </motion.div>
      <NavigationDots active="footer" />
    </div>
  );
}

export default Footer;
