// ./client/src/containers/Todo.js

import React from 'react';
import { Navbar,Nav,NavItem,MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
// import './App.css';
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.toggleAddTodo = this.toggleAddTodo.bind(this);
  }
toggleAddTodo(e){
    e.preventDefault();
     this.props.mappedToggleAddTodo();
  }
render(){
    return(
      <div>
      <Navbar inverse  collapseOnSelect className="customNav">
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/#">Mern Stack Todo App</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to={{ pathname: '/', query: {  } }}>
           <NavItem eventKey={1}>Home</NavItem>
        </LinkContainer>
      </Nav>
      <Nav pullRight>
      <LinkContainer to={{ pathname: '/', query: {  } }} onClick={this.toggleAddTodo}>
         <NavItem eventKey={1}>Add Todo</NavItem>
      </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  <div className="container">
  { /* Each Smaller Components */}
   {this.props.children}
  </div>
 </div>
    );
  }
}