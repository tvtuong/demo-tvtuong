import { useState } from 'react';
import { UserProps } from './interfaces';

export default function TypeScript() {
  const [data, setUser] = useState<UserProps | null>(null);

  const fetchData = () =>
    setUser({
      name: 'Byo',
      age: 24,
      country: 'Nghia Hanh Quang Ngai',
      address: {
        stress: 'Tay Son st.',
        number: 35,
        zip: '696969',
      },
      admin: false,
    });
  return (
    <>
      <button type="button" className="btn btn-primary" onClick={fetchData}>
        Show Data
      </button>
      {data && (
        <div className="m-4">
          <p> {`Welcome ${data.name}, this is your account:`} </p>
          <p>Name: {data.name}</p>
          <p>Age: {data.age}</p>
          <p>country: {data.country}</p>
          <p>{`Address: ${data.address.number} ${data.address.stress} - ${data.address.zip}`}</p>
          <p>Admin: {data.admin ? 'Yes' : 'No'}</p>
        </div>
      )}
    </>
  );
}
