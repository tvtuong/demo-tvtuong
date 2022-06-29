import React from 'react';
import ReactDOM from 'react-dom';

class FindDomNode extends React.Component {
  changeColor(e: React.FormEvent) {
    let elm = document.getElementById('title')?.style.color;
    elm = 'red';
    console.log(e, elm, 'elm');
  }
  render() {
    return (
      <div>
        <div className="d-flex mt-2">
          <div className="d-flex">
            <p id="title">Find Dom Node</p>
            <button type="button" className="btn btn-danger position-relative ms-2" onClick={(e) => this.changeColor(e)}>
              Change Color
            </button>
          </div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default FindDomNode;
