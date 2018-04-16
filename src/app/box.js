import React, { Component } from 'react';

class Box extends Component {
  constructor(props) {
    super();
  }
  render() {
    let {left, top, comment} = this.props
    return (
      <div className="box" style={{left: (left - 10)+'px', top: (top - 10)+'px'}}>
        {comment ? <Comment /> : ''}
      </div>
    );
  }
}

class Comment extends Component {
  clickHandler = (e) => {
    e.preventDefault();
  }
  render () {
    return (
      <div className="comment-box">
        <textarea rows="4" cols="50" defaultValue="I am Comment" onClick={this.clickHandler.bind(this)}>
        </textarea>
      </div>
    )
  }
}

export default Box;