import React, { Component } from 'react';
import Header from './Header';
import Form from './Form';
import './App.scss';
import Card from './Card';
import {BrowserRouter as Router, Route} from 'react-router-dom';




class App extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        userNameInput     : '',
        userSurnameInput  : '',
        userCompanyInput  : '',
        userEmailInput    : '',
        userPhoneInput    : '',
        userCountryInput  : '',
        userCityInput     : '',
        userPostCodeInput : '',
        userAddressInput  : ''
      }
      this.changeFormValue = this.changeFormValue.bind(this);
      this.handleClick = this.handleClick.bind(this);
  }

  changeFormValue(e) {
    const {name, value}=e.target
    e.preventDefault();
    this.setState({ [name]: value })
  }




  render() {
    
    return (
      <Router>
        <div className="App">
        <Header />
        <div className="pf-container">
          <Route exact path="/" render={ () => <Form handleClick={this.state}  changeFormValue={this.changeFormValue} />}/>
          <Route exact path="/Card" render={ () => <Card handleClick={this.state} /> }/>
        </div>
      </div>
      </Router>
    );
  }

  handleClick (){ this.setState(this.state)}

  // componentDidUpdate() {
  //   console.log(this.state)
  // }
}


export default App;
