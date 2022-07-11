import React from 'react';
import { Field, Fields, reduxForm } from 'redux-form';
import submit from './submit';
import { FieldProps } from './SyncValidation';

interface Props {
  error: string;
  handleSubmit: any;
  pristine: any;
  reset: any;
  submitting: any;
}

const renderField = ({ input, label, type, meta: { touched, error } }: FieldProps) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

const SubmitValidationForm: React.FC<Props> = (props) => {
  const { error, handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit(submit)}>
      <Field name="username" type="text" component={renderField} label="Username" />
      <Field name="password" type="password" component={renderField} label="Password" />
      {error && <strong>{error}</strong>}
      <div>
        <button type="submit" disabled={submitting}>
          Log In
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'submitValidation',
})(SubmitValidationForm);
