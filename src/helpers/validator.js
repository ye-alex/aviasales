import {
  EMAIL,
  FIRSTNAME,
  PASSPORT,
  PHONE,
  SECONDNAME,
} from '../components/FormComponent/FormComponent';

const nonZeroLength = name => `Please, enter your ${name}`;

const getDefaultMessage = name => `Please, enter valid ${name}`;

const validateEmail = value => {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return !regex.test(value) && getDefaultMessage('email');
};

const validatePhone = (name, value) => {
  const regex = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g;

  return !regex.test(value) && getDefaultMessage(name);
};

const validateLength = (name, value, param) => {
  return (
    value.length < param && `Your ${name} must be more than ${param} symbols`
  );
};

const notContainNumbers = (name, value) => {
  const regex = /^([^0-9]*)$/;

  return !regex.test(value) && `Your ${name} cannot contain numbers`;
};

export const validateFields = (errorFields, name, value) => {
  let error;

  if (!value) {
    error = nonZeroLength(name);

    return {
      ...errorFields,
      [name]: error,
    };
  }

  switch (name) {
    case EMAIL:
      error = validateEmail(value) || [];
      break;
    case PHONE:
      error = validatePhone(name, value) || [];
      break;
    case PASSPORT:
      error = validateLength(name, value, 6) || [];
      break;
    case FIRSTNAME:
    case SECONDNAME:
      error = notContainNumbers(name, value) || validateLength(name, value, 3) || [];
      break;
    default:
      return errorFields;
  }

  return {
    ...errorFields,
    [name]: error,
  };
};
