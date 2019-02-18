import React, { Component } from 'react';
import Detail from './detail.js'
import Task from './task.js'
class Index extends Component {
    constructor(props){
        super(props)
        this.state={
            content:'给子组件元素',
            sendDetail:''
        }
    }
    change=(content)=>{
       this.setState({
           content
       })
    }
    gettask=(data)=>{
        this.setState({
           sendDetail:data
        })
    }
  render() {
      let {
          content,
          sendDetail
      } =this.state
    return (
      <div>
       index页面
       <Detail sendDetail={sendDetail} content={content} change={this.change}/>
       <Task gettask={this.gettask}/>
      </div>
    );
  }
}

export default Index;
