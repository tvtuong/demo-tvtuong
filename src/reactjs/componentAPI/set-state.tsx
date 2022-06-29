import React from 'react';

class SetState extends React.Component<{}, { index: number }> {
  constructor(props: any) {
    super(props);
    this.state = {
      index: 1,
    };
  }
  countDown() {
    this.setState({
      index: this.state.index - 1,
    });
  }
  countUp() {
    this.setState((prevState, props) => {
      return {
        index: prevState.index + 1,
      };
    });
  }
  render() {
    return (
      <div>
        <div className="d-flex">
          <button type="button" className="btn btn-danger position-relative ms-2" onClick={() => this.countDown()}>
            Down
          </button>
          <button type="button" className="btn btn-primary position-relative ms-2" onClick={() => this.countUp()}>
            Up
          </button>
          <p className="h3 ms-2">Set State: {this.state.index}</p>
        </div>
        {/* <div className='d-flex mt-2'>
          <div className="d-flex">
            <button type="button" className="btn btn-danger position-relative ms-2" onClick={() => this.forceUpdate()}>Reload</button>
            <p className='h3 ms-2'>Force Update: {Math.random()}</p>
          </div>
          <div></div>
        </div> */}
      </div>
    );
  }
}

export default SetState;
