import React from 'react';

const BaseBadge: React.FC<{ title: string; value: number; isIcon: boolean }> = ({ title, value, isIcon }) => {
  return (
    <button type="button" className="btn btn-primary position-relative ms-2">
      {!isIcon ? title : <img src="https://cdn3.iconfinder.com/data/icons/email-51/48/53-512.png" width={25} height={25} className="img-fluid rounded-start" alt="..." />}

      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{value}+</span>
    </button>
  );
};
export default BaseBadge;
