import React, { Component } from 'react';

class Task extends Component {
  change=()=>{
      let {
            gettask
        } = this.props
        gettask('task的组件传出来的')
  }
  render() {
    return (
      <div>
         <button onClick={
           this.change
         }>我也要修改</button>
      </div>
    );
  }
}

export default Task;
