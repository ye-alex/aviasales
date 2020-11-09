import React from 'react';

const ErrorMessage = ({ error }) => {
  return error.length ? (
    <div className='error-message'>
      <span>{error}</span>
    </div>
  ) : null;
};

export default ErrorMessage;
