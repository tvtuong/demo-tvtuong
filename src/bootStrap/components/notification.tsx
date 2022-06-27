import React from 'react';

const BaseNotification: React.FC<{ title: string; text: string }> = ({ title, text }) => {
  return (
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>{title}</strong> {text}
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  );
};
export default BaseNotification;
