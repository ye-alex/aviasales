import React, { useState } from 'react';
import { validateFields } from '../../helpers/validator';
import ErrorMessage from './ErrorMessage';

export const EMAIL = 'email';
export const PHONE = 'phone';
export const PASSPORT = 'passport';
export const FIRSTNAME = 'firstname';
export const SECONDNAME = 'secondname';

const initialFields = {
  passport: '',
  email: '',
  phone: '',
  firstname: '',
  secondname: '',
};

const initialErrorFields = {
  passport: [],
  email: [],
  phone: [],
  firstname: [],
  secondname: [],
};

const FormComponent = ({ setShowSuccess, closeModal }) => {
  const [inputFields, setInputFields] = useState(initialFields);
  const [errorFields, setErrorFields] = useState(initialErrorFields);
  const [disabled, setDisabled] = useState(true);

  const onSubmit = event => {
    event.preventDefault();
    const isErrors = Object.values(errorFields).filter(item => item.length);

    isErrors.length ? setDisabled(true) : setShowSuccess(true);
  };

  const onChange = (name, event) => {
    const value = event.target.value;
    const isErrors = Object.values(errorFields).filter(item => item.length);
    const isValues = Object.values(inputFields).filter(item => !item.length);

    setErrorFields({ ...errorFields, [name]: [] });
    setInputFields({ ...inputFields, [name]: value });
    !isValues.length && isErrors && setDisabled(false);
  };

  const onClear = event => {
    event.preventDefault();
    setInputFields(initialFields);
    setErrorFields(initialErrorFields);
  };

  const onBlur = name => {
    setErrorFields(validateFields(errorFields, name, inputFields[name]));
  };

  return (
    <div className='form-container'>
      <form action='' onSubmit={onSubmit}>
        <div className='close-btn' onClick={closeModal}>X</div>
        <fieldset>
          <label htmlFor={EMAIL}>{EMAIL}</label>
          <div className='input-wrapper'>
            <input
              type='text'
              id={EMAIL}
              value={inputFields.email}
              onChange={event => onChange(EMAIL, event)}
              onBlur={() => onBlur(EMAIL)}
              className={errorFields.email.length ? 'error' : ''}
            />
            <ErrorMessage error={errorFields.email} />
          </div>
        </fieldset>
        <fieldset>
          <label htmlFor={PHONE}>{PHONE}</label>
          <div className='input-wrapper'>
            <input
              type='tel'
              id={PHONE}
              value={inputFields.phone}
              onChange={event => onChange(PHONE, event)}
              onBlur={() => onBlur(PHONE)}
              className={errorFields.phone.length ? 'error' : ''}
            />
            <ErrorMessage error={errorFields.phone} />
          </div>
        </fieldset>
        <fieldset>
          <label htmlFor={PASSPORT}>{PASSPORT}</label>
          <div className='input-wrapper'>
            <input
              type='text'
              id={PASSPORT}
              value={inputFields.passport}
              onChange={event => onChange(PASSPORT, event)}
              onBlur={() => onBlur(PASSPORT)}
              className={errorFields.passport.length ? 'error' : ''}
            />
            <ErrorMessage error={errorFields.passport} />
          </div>
        </fieldset>
        <fieldset>
          <label htmlFor={FIRSTNAME}>first name</label>
          <div className='input-wrapper'>
            <input
              type='text'
              id={FIRSTNAME}
              value={inputFields.firstname}
              onChange={event => onChange(FIRSTNAME, event)}
              onBlur={() => onBlur(FIRSTNAME)}
              className={errorFields.firstname.length ? 'error' : ''}
            />
            <ErrorMessage error={errorFields.firstname} />
          </div>
        </fieldset>
        <fieldset>
          <label htmlFor={SECONDNAME}>second name</label>
          <div className='input-wrapper'>
            <input
              type='text'
              id={SECONDNAME}
              value={inputFields.secondname}
              onChange={event => onChange(SECONDNAME, event)}
              onBlur={() => onBlur(SECONDNAME)}
              className={errorFields.secondname.length ? 'error' : ''}
            />
            <ErrorMessage error={errorFields.secondname} />
          </div>
        </fieldset>
        <div className='form-buttons'>
          <button disabled={disabled}>Отправить</button>
          <button onClick={onClear}>Очистить</button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
