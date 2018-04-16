import React, { Component } from 'react';
import './App.css';
import Box from './box';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      commentOpen: false
    };
  }

  boxes = [];

  _onMouseMove = (e) => this.setState({ x: e.clientX, y: e.clientY });

  _newBox = (e) => {
    //check is there comment open or not
    if (this.state.commentOpen) {
      this.setState({commentOpen: false});
      this.boxes.forEach((item, index) => this.boxes[index].show = false);
      return
    }

    // check is this position empty or not
    let x = this.state
    const box = this.boxes.find(
      box => {
        // this.state.x+50 <= box.left+50 && this.state.x-50 >= box.left
        if((box.left - 50 <= this.state.x && this.state.x <= box.left + 50) && (box.top - 50 <= this.state.y && this.state.y <= box.top + 50)){
          return true;
        }
      }
    );
    if (box) {
      let index = this.boxes.indexOf(box);
      console.log(index);
      this.boxes[index].show = !this.boxes[index].show
      console.log(this.boxes);
      return
    }
    console.log(box);
    this.boxes.push({
    left: this.state.x,
    top: this.state.y,
    show: true,
    content: {}
  })
  this.setState({commentOpen: true});
}

  render() {
    return (
      <div className="App" onMouseMove={this._onMouseMove} onClick={this._newBox}>
          <h1 className="App-title">Welcome to React</h1>
          {/* <a className="Click" >New Box</a> */}
          {this.boxes.map((item, index) => { return <Box left={item.left} top={item.top} comment={item.show} key={index}></Box>})}
          {/* <Box left={this.state.x} top={this.state.y} /> */}
          <p>Mouse X: {this.state.x} Mouse Y: {this.state.y} </p>
      </div>
    );
  }
}

export default App;
