import React , { Component } from 'react';
import Classchildcomp from './Classchildcomp';

class Classcomp extends Component {
  constructor(props) {
    super(props); // Call to the parent class's constructor
    this.state = {
        x :10,
        show:true
    }
  }

//   static getDerivedStateFrom(props){}

  render() {
    return (
        <>
          <h1>Hello, I'm a class Component</h1>
          <p> { this.state.x }</p>
          <button onClick={() => {
            this.setState({ x : this.state.x + 10})
          }}>Update</button>

          {this.state.show && <Classchildcomp data={this.state.x}></Classchildcomp>  }
          <button onClick={() => {
            this.setState({ show : false})
          }}>hide</button>

          <button onClick={() => {
            this.setState({ show : true})
          }}>SHow</button>
        </>
    );
  }
}

export default Classcomp;
