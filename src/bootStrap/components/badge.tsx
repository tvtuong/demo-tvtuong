import React from 'react';
declare interface Props {
  title: string;
  value: number;
  isIcon?: boolean;
  onClick?: () => void;
}
const BaseBadge: React.FC<Props> = (props) => {
  return (
    <button type="button" className="btn btn-primary position-relative ms-2" onClick={props.onClick}>
      {!props.isIcon ? props.title : <img src="https://cdn3.iconfinder.com/data/icons/email-51/48/53-512.png" width={25} height={25} className="img-fluid rounded-start" alt="..." />}
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{props.value}+</span>
    </button>
  );
};
export default BaseBadge;
