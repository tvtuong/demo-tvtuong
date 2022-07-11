import React from 'react';
import { Field, reduxForm } from 'redux-form';

interface Values {
  username: string;
  email: string;
  age: number;
}
interface Errors {
  username: string;
  email: string;
  age: string;
}
export interface FieldProps {
  input: any;
  label: string;
  type: string;
  meta: {
    touched: string;
    error: string;
    warning: string;
  };
}
interface Props {
  handleSubmit: any;
  pristine: any;
  reset: any;
  submitting: any;
}

// const required = (value: string) => (value ? undefined : 'Required');
// const maxLength = (max: number, value: string) => (value && value.length > max ? `Must be ${max} characters or less` : undefined);
// const number = (value: string) => (value && isNaN(Number(value)) ? 'Must be a number' : undefined);
// const minValue = (min: number, value?: number) => (value && value < min ? `Must be at least ${min}` : undefined);
// const minValue18 = minValue(18);
// const email = (value: string) => (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined);
// const tooOld = (value: number) => (value && value > 65 ? 'You might be too old for this' : undefined);
// const aol = (value: string) => (value && /.+@aol\.com/.test(value) ? 'Really? You still use AOL for your email?' : undefined);
const validate = (values: Values) => {
  const errors: Errors = {
    username: '',
    email: '',
    age: '',
  };
  if (!values.username) {
    errors.username = 'Required';
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.age) {
    errors.age = 'Required';
  } else if (isNaN(Number(values.age))) {
    errors.age = 'Must be a number';
  } else if (Number(values.age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old';
  }
  return errors;
};

const warn = (values: Values) => {
  const warnings = {
    age: '',
  };
  if (values.age < 19) {
    warnings.age = 'Hmm, you seem a bit young...';
  }
  return warnings;
};

const renderField = ({ input, label, type, meta: { touched, error, warning } }: FieldProps) => {
  return (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  );
};

const SyncValidationForm: React.FC<Props> = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name="username" type="text" component={renderField} label="Username" />
      <Field name="email" type="email" component={renderField} label="Email" />
      <Field name="age" type="number" component={renderField} label="Age" />
      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'syncValidation',
  warn,
  validate,
})(SyncValidationForm);
