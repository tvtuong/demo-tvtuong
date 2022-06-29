import React, { Component } from 'react';

const USDtoVND = function (props: any) {
  const convert = function (usd: any) {
    return usd * 23632;
  };
  return (
    <div>
      <span>USD</span>
      <input
        onChange={(e) => {
          const usd = e.target.value;
          const vnd = convert(usd);
          props.onHandleChange({
            usd,
            vnd,
          });
        }}
        value={props.value}
      />
    </div>
  );
};

const VNDtoUSD = function (props: any) {
  const convert = function (vnd: any) {
    return vnd / 23632;
  };
  return (
    <div>
      <span>VND</span>
      <input
        onChange={(e) => {
          const vnd = e.target.value;
          const usd = convert(vnd);
          props.onHandleChange({
            usd,
            vnd,
          });
        }}
        value={props.value}
      />
    </div>
  );
};
export default class Render extends React.Component<{}, { usd: number, vnd: number }> {
  constructor(props: any) {
    super(props);
    this.state = {
      usd: 0,
      vnd: 0,
    };
  }
  handleChange = (data: any) => {
    this.setState(data);
  }
  render() {
    return (
      <div className='m-3'>
        <USDtoVND onHandleChange={this.handleChange} value={this.state.usd} />
        <VNDtoUSD onHandleChange={this.handleChange} value={this.state.vnd} />
      </div>
    )
  }
}
