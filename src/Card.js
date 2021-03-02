import React from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';
import american_expres from './img/american_express_color.svg';
import mastercard from './img/mastercard_color.svg'
import visa from './img/visa_color.svg';
import discover from './img/discover_color.png';
import pay_pal from './img/paypal_color.png';
import amazon_pay from './img/amazon_pay_color.png';

class Card extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title    : 'Shipping & billing details',
            subtitle : 'You can change the shipping method'
        }
        this.formIsSubmited = this.formIsSubmited.bind(this)
    }

    formIsSubmited(){
        console.log('hello',this.props.handleClick);
        
    }


    render(){
        let payPlan = {
            'Stamdant' : '5$ in 10 days',
            'Express'  : '25$ in 5 days',
            'Premium'  : '50$ for tomorrow'
          }

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
        


        
        


        return (
            <div className="Card">

                <div className="pf-container">
                    <div className="pf-main">
                        <div className="card-section">
                            <form onSubmit={this.formIsSubmited}> 
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
                                                    <div className="card-number" onInput={nextTab}>
                                                        <label className="inputLabel" aria-label="Phone">Card number</label>
                                                        <input type="text" maxLength="4" inputMode='numeric' className="form-control contact-input inputs"/>
                                                        <input type="text" maxLength="4" inputMode='numeric' className="form-control contact-input inputs"/>
                                                        <input type="text" maxLength="4" inputMode='numeric' className="form-control contact-input inputs"/>
                                                        <input type="text" maxLength="4" inputMode='numeric' className="form-control contact-input inputs"/>
                                                    </div>
                                                    <div className="card-data">
                                                        <div className="expiration-date">
                                                            <label className="inputLabel" aria-label="Phone">Expiration date</label>
                                                            <input type="text" maxLength="5" title="title" className="form-control contact-input" id="date"  ref={dateInput} onInput={dateMask}/>
                                                        </div>
                                                        <div className="card-cvv">
                                                            <div></div>
                                                            <label className="inputLabel"  inputMode='numeric' aria-label="Phone">CVC/CVV</label>
                                                            <input type="password"  maxLength="3" inputMode='numeric' className="form-control contact-input" id="cvv"/>
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
                                        <button type="submit" className="submit btn" >submit</button>
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