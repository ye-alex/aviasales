import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setToggleModalAction } from '../../state/actions';
import FormComponent from '../FormComponent/FormComponent';
import SuccessModal from './SuccessModal';

const Modal = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const dispatch = useDispatch();

  const closeModal = () => {
    document.body.classList.remove('open-modal');
    dispatch(setToggleModalAction(false));
  };

  return (
    <div className='modal-overlay'>
      {showSuccess ? (
        <SuccessModal closeModal={closeModal} />
      ) : (
        <FormComponent
          setShowSuccess={setShowSuccess}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default Modal;
