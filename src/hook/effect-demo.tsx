import React, { useEffect, useState } from 'react';

const EffectDemo = () => {
  const [fullname, setFullname] = useState({ name: 'name', familyName: 'family' });
  const [title, setTitle] = useState('useEffect() in Hook');

  useEffect(() => {
    setFullname({ name: 'Byo Cáo', familyName: 'Bo' });
    setTitle('Lý lịch của Cu Bo');
  }, []);
  return (
    <>
      <h1>Tittle: {title}</h1>
      <h3>Name: {fullname.name}</h3>
      <h3>Family Name: {fullname.familyName}</h3>
    </>
  );
};

export default EffectDemo;
