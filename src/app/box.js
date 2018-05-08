import React, { Component } from 'react';

class Box extends Component {
  constructor(props) {
    super();
    this.state = {
      commentText: '',
    }
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
    e.stopPropagation();
  }
  handleChange = (e) => {
    this.setState({commentText: e.target.value})
  }
  render () {
    return (
      <div className="comment-box">
        <textarea rows="4" cols="50" onClick={this.clickHandler} onChange={this.handleChange}>
        </textarea>
        <buttton onClick={console.log('clicked')}>Submit</buttton>
      </div>
    )
  }
}

export default Box;