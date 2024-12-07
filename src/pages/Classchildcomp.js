import React , { Component } from 'react';

class Classchildcomp extends Component {
  constructor(props) {
    super(props); // Call to the parent class's constructor

    this.state = {
        count : this.props.data + 10,
        product: null
    }

    console.log("im inside constructor");
  }

  static getDerivedStateFromProps(props,state){
    console.log("im inside getDerivedStateFromProps");
    // return {
    //     count : props.data + 10 
    // }
     
    return {
        ...state,count:props.data +10
    }
  }

  shouldComponentUpdate(){
    return true //defalt it is true;
    // return false
  }

  getSnapshotBeforeUpdate(){
    console.log('inside get snapshot');
    return null
  }

  componentDidUpdate(){ // it is simmilar like componentdidmount 
    console.log("inside comp update")
  }

  componentDidMount(){
    console.log('did mount');
    fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=> {
                console.log(json);
                this.setState({...this.state,product:json.title})
       })
  }

  componentWillUnmount(){
console.log('inside unmount');
  }

  render() {
    console.log('render');
    return (
        <>
          <h1>Hello, I'm a child class Component</h1>
          <h4>props : {this.props.data}</h4>
          <h4>count : {this.state.count}</h4>
          <h4>product name : {this.state.product}</h4>
        </>
    );
  }
}

export default Classchildcomp;
