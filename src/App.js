import React from 'react';
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
        userAddressInput  : '',
        cardNumber        : [],
        cardCVV           : '',
        cardExpireDate    : '',
        userAcceptTerms   : ''
      }
      this.changeFormValue = this.changeFormValue.bind(this);
      this.handleClick = this.handleClick.bind(this);
  }

  changeFormValue(e) {
    const {name, value}=e.target
    e.preventDefault();
    this.setState({ [name]: value })
      if(e.target.name === "cardNumber"){
        this.setState({ cardNumber: [...this.state.cardNumber, value] })
      }
      
  }
  handleClick (){ 
    let i
    this.setState ({cardNumber: [...this.state.cardNumber, i]})
    this.setState(this.state)
  }

  render() {
    
    return (
      <Router>
        <div className="App">
        <Header />
        <div className="pf-container">
          <Route exact path="/" render={ () => <Form handleClick={this.state}  changeFormValue={this.changeFormValue} />}/>
          <Route exact path="/Card" render={ () => <Card handleClick={this.state} changeFormValue={this.changeFormValue}/> }/>
        </div>
      </div>
      </Router>
    );
  }



  // componentDidMount() {
  //   console.log(this.state)
  // }
}


export default App;
