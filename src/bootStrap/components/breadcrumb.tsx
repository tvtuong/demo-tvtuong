import React from 'react';

const BaseBreadCrumb: React.FC<{ tab: string; tab2: string }> = ({ tab, tab2 }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="#">{tab}</a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          {tab2}
        </li>
      </ol>
    </nav>
  );
};
export default BaseBreadCrumb;
