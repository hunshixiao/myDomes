import React, { Component } from 'react';

class Detail extends Component {
    change=()=>{
        let {
            change
        } = this.props
        change('子元素传递的元素')
    }
  render() {
      let {
          content,
          change,
          sendDetail
      } =this.props
    return (
      <div>
       detail页面{sendDetail}
       <button onClick={this.change}>子元素</button>
      </div>
    );
  }
}

export default Detail;
