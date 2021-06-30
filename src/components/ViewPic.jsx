import React from 'react';
import '../styles/viewPic.scss';
import { motion } from 'framer-motion';

const ViewPic = ({ selectedImg, setSelectedImg }) => {
  const handleClick = e => {
    if(e.target.classList.contains('backdrop')){
      setSelectedImg('');
    }
  }

  return (
    <motion.div className="backdrop" onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img src={selectedImg} alt="viewing pic"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
    </motion.div>
  )
}

export default ViewPic;
