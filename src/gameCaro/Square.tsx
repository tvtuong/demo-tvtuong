import React from 'react';

interface Props {
  value: string;
  onClick: () => void;
}
export default function Square(props: Props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
