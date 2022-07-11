import { SubmissionError } from 'redux-form';

const sleep = (ms: any) => new Promise((resolve) => setTimeout(resolve, ms));

function submit(values: any) {
  return sleep(1000).then(() => {
    if (!['byocao', 'byo', 'byosama', 'bo263'].includes(values.username)) {
      throw new SubmissionError({
        username: 'User does not exist',
        _error: 'Login failed!',
      });
    } else if (values.password !== '12345678x@X') {
      throw new SubmissionError({
        password: 'Wrong password',
        _error: 'Login failed!',
      });
    } else {
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
    }
  });
}

export default submit;
