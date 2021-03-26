import React, { useEffect } from 'react';

const Alert = ({ type, msg, removeAlert }) => {
  // Set timeout and cleaning the alert when the component is rendered
  // Calling show alert function to remove becuase on default it's {show: false, name: ''}
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 1000);
    return () => clearTimeout(timeout);
  }, [removeAlert]);

  return (
    <div className={`alert `}>
      <h1 className={`alert alert-${type}`}>{msg}</h1>
    </div>
  );
};

export default Alert;
