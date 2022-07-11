interface Values {
  username: string;
  password: string;
}

const validate = (values: Values) => {
  const errors = {
    username: '',
    password: '',
  };
  if (!values.username) {
    errors.username = 'Required';
  }
  if (!values.password) {
    errors.password = 'Required';
  }
  return errors;
};

export default validate;
