import React from 'react';

class LifeCycle extends React.Component<{}, { date: any; clickedStatus: boolean; list: [] }> {
  // Initialization
  constructor(props: any) {
    super(props);
    this.state = {
      date: new Date(),
      clickedStatus: false,
      list: [],
    };
  }
  //Mounting
  componentWillMount() {
    console.log('Component will mount!');
  }
  componentDidMount() {
    console.log('Component did mount!');
    this.getList();
  }
  getList = () => {
    /*** Gọi API, update state,vv...***/
  };
  //Updating
  shouldComponentUpdate(nextProps: any, nextState: any) {
    return this.state.list !== nextState.list;
  }
  componentWillUpdate(nextProps: any, nextState: any) {
    console.log('Component will update!');
  }
  componentDidUpdate(prevProps: any, prevState: any) {
    console.log('Component did update!');
  }
  //Unmounting
  componentWillUnmount() {
    console.log('component will unmount');
  }

  render() {
    return (
      <div>
        <p>Component LifeCycle</p>
      </div>
    );
  }
}

export default LifeCycle;
