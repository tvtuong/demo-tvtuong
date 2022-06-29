import React from 'react';

export default class RefComponent extends React.Component {
  private myRef: React.RefObject<HTMLInputElement>;
  constructor(props:any) {
    super(props);
    this.myRef = React.createRef();
  }
  handleClick = () => {
    this.myRef.current?.focus();
  }
  render() {
    return (
      <div>
        <input name='email' ref={this.myRef} type="text" />
        <button onClick={this.handleClick} >Focus Input</button>
      </div>
    )
  }
}