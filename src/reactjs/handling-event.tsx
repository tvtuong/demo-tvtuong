import React from 'react';

class HandlingEvent extends React.Component<{}, { textareaChange: string; buttonClick: string; mouseOver: string }> {
  constructor(props: any) {
    super(props);
    this.state = {
      textareaChange: '',
      buttonClick: '',
      mouseOver: '',
    };
    this.mouseOver = this.mouseOver.bind(this);
  }
  changeText(e: { target: { value: any } }) {
    this.setState({
      textareaChange: e.target.value,
    });
  }
  mouseOver() {
    this.setState({
      mouseOver: this.state.mouseOver + 'moveOver....',
    });
  }
  render() {
    return (
      <div className="m-2">
        <button className="btn btn-primary" onClick={() => this.setState({ buttonClick: this.state.buttonClick + 'onClick...' })} >Click Me..</button>
        <p>button: <code>{this.state.buttonClick} </code></p>
        <hr />
        <textarea onChange={e => this.changeText(e)} placeholder="Enter do something...."></textarea>
        <p>textarea: <code>{this.state.textareaChange}</code></p>
        <hr />
        <h6 onMouseOver={this.mouseOver}>mouse over in here :v</h6>
        <p>mouseOver: <code>{this.state.mouseOver}</code></p>
      </div>
    );
  }
}

export default HandlingEvent;
