import React from 'react';
import Background from '../../img/bg.jpg';
import { FaSync } from 'react-icons/fa';

const Header = ({ clearList }) => {
  // Show todays date
  const options = { weekday: 'long', month: 'short', day: 'numeric' };
  const today = new Date().toLocaleDateString('en-US', options);

  return (
    <div className='header' style={{ backgroundImage: `url(${Background})` }}>
      <FaSync className='icon-refresh' onClick={clearList} />
      <h1 className='time'>{today}</h1>
    </div>
  );
};

export default Header;
