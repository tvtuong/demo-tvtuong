import { useState } from 'react';
import { UserProps } from './interfaces';

const defaultFormData = {
  username: '',
  password: '',
};

export default function Form() {
  const [formData, setFormData] = useState(defaultFormData);
  const { username, password } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    setFormData(defaultFormData);
  };
  return (
    <div>
      <h1>Form Login</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="username">Username:</label>
        <br />
        <input type="text" id="username" value={username} onChange={onChange} />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input type="password" id="password" value={password} onChange={onChange} />
        <br />
        <button type="submit" className="btn btn-danger">
          Login
        </button>
      </form>
    </div>
  );
}
