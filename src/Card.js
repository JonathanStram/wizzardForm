import React from 'react';
import './Card.scss';
import './Thankyou';
import { Link } from 'react-router-dom';
import american_expres from './img/american_express_color.svg';
import mastercard from './img/mastercard_color.svg'
import visa from './img/visa_color.svg';
import discover from './img/discover_color.png';
import pay_pal from './img/paypal_color.png';
import amazon_pay from './img/amazon_pay_color.png';
import Thankyou from './Thankyou';

class Card extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title     : 'Shipping & billing details',
            subtitle  : 'You can change the shipping method',
            showModal : false
        }
        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);
        this.formIsSubmited = this.formIsSubmited.bind(this)
        this.cardNumberInputs = this.cardNumberInputs.bind(this)
    }


    handleShow() {
        this.setState({showModal: true});
    }
    
    handleHide() {
        this.setState({showModal: false});
    }


    formIsSubmited(){
        console.log('hello',this.props.handleClick, this.props.handleClick.cardNumber);
        this.setState({showModal: true});
    }

    
    cardNumberInputs(){
        console.log('hello');


    }


    render(){
        let payPlan = {
            'Stamdant' : '5$ in 10 days',
            'Express'  : '25$ in 5 days',
            'Premium'  : '50$ for tomorrow'
          }


          const modal = this.state.showModal && <Thankyou>
              <div className="modal">
                <div>
                    With a portal, we can render content into a different
                    part of the DOM, as if it were any other React child.
                </div>
                This is being rendered inside the #modal-container div.
                <button onClick={this.handleHide}>Hide modal</button>
            </div>
          </Thankyou>

        




        function nextTab(){
            let inputCollections = document.querySelectorAll('.inputs');
            let onCVVSwitcherFlag = true;
            let onFocusInputs = true;
            
            for(let i = 0; i<inputCollections.length; i++){
                if((inputCollections[i]).value.length === 4){
                    if(i === 3 && onCVVSwitcherFlag && onFocusInputs){
                        document.querySelector("#date").focus()
                        onFocusInputs = false
                        onCVVSwitcherFlag = false
                        break
                    }
                    if(i < 4 && onFocusInputs){
                        inputCollections[i+1].focus()
                    }  
                    if(i === 5){
                        document.querySelector("#cvv").focus()
                    }
                    
                }
                
            }
            console.log(document.querySelectorAll('.inputs'))
        }

        let dateInput = React.createRef();
        let maskFlag = true;
        function dateMask (){
            if (dateInput.current.value.length === 5){
                document.querySelector("#cvv").focus()
            }
            if (dateInput.current.value.length === 2 && maskFlag){
                dateInput.current.value = dateInput.current.value + '/';
                maskFlag = false;
                console.log('2',maskFlag)
              }
            console.log(dateInput)
        }

        let numberInputs =[]
        for (let i = 0; i < 4; i++){
            numberInputs.push(<input key={[i]} type="text" name="cardNumber" value={this.props.cardNumber } 
            onChange={this.props.changeFormValue} maxLength="4" inputMode='numeric' className="form-control contact-input inputs"/> )
            
        }        
        
        return (
            <div className="Card">

                <div className="pf-container">
                    <div className="pf-main">
                        <div className="card-section">
                            <form >
                            {/* onSubmit={this.formIsSubmited}  */}
                                <h2>{this.state.title}</h2>
                                <p>{this.state.subtitle}</p>
                                <div className="card-wrapper df">
                                    <div className="input-column">
                                        {Object.keys(payPlan).map(el => {
                                            return (
                                                <div className="plan" key={el}>
                                                    <h4 className="black">{el}</h4>
                                                    <h6 className="black">{payPlan[el]}</h6>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <div className="card-column">
                                        <div className="mess-bar df">
                                            <div className="payment-sys">
                                                <h6>Payment method</h6>
                                                <div className="input-row df">
                                                    <div className="pay-sys">
                                                        <img src={american_expres} alt="american-express"/>
                                                    </div>
                                                    <div className="pay-sys">
                                                        <img src={mastercard} alt="mastercard"/>
                                                    </div>
                                                    <div className="pay-sys">
                                                        <img src={visa} alt="visa"/>
                                                    </div>
                                                    <div className="pay-sys">
                                                        <img src={discover} alt="discover"/>
                                                    </div>
                                                </div>
                                                <div className="input-column">
                                                    <div className="pay-sys">
                                                        <img src={pay_pal} alt="pay-pal"/>
                                                    </div>
                                                    <div className="pay-sys">
                                                        <img src={amazon_pay} alt="amazon-pay"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-wrap">
                                                <h6>Card detail</h6>
                                                <div className="card">
                                                    
                                                
                                                    <div className="card-number" onInput={nextTab} >
                                                        <label className="inputLabel" aria-label="Phone">Card number</label>
                                                            {numberInputs}
                                                    </div>
                                                    <div className="card-data">
                                                        <div className="expiration-date">
                                                            <label className="inputLabel" aria-label="Phone">Expiration date</label>
                                                            <input type="text" name="cardExpireDate" value={this.props.cardExpireDate} onChange={this.props.changeFormValue} maxLength="5" title="title" className="form-control contact-input" id="date"  ref={dateInput} onInput={dateMask}/>
                                                        </div>
                                                        <div className="card-cvv">
                                                            <div></div>
                                                            <label className="inputLabel" inputMode='numeric' aria-label="Phone">CVC/CVV</label>
                                                            <input type="text" name="cardCVV" value={this.props.cardCVV} onChange={this.props.changeFormValue} maxLength="3" inputMode='numeric' className="form-control contact-input" id="cvv"/>
                                                        </div>
                                                    </div> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="df btn-group">
                                    <div className="submit-wrapper df">
                                        <Link to={`/`}><button type='button' className="back-button btn" >back</button></Link>
                                    </div>
                                    <div className="submit-wrapper df">
                                        <button type="button"  onClick={this.formIsSubmited} className="submit btn" >submit</button>
                                        {modal}
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>

            </div>
            
        );
    }
}

export default Card;