import React from 'react';

const SuccessModal = ({ closeModal }) => {
  return (
    <div className='success-modal'>
      <span>Поздравляем с покупкой</span>
      <button onClick={closeModal}>Закрыть</button>
    </div>
  );
};

export default SuccessModal;
