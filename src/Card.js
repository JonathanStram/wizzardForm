import React from 'react';
import './Card.scss';
import Payplan from './Payplan'
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
            showModal : false,
            term      : '',
            active    : false,
            plan      : ''
        }


        this.handleTermChange             = this.handleTermChange.bind(this);
        // this.toggleClass                  = this.toggleClass.bind(this);
        this.handleShow                   = this.handleShow.bind(this);
        this.handleHide                   = this.handleHide.bind(this);
        this.formIsSubmited               = this.formIsSubmited.bind(this)
        this.getValueFromCardNumberInputs = this.getValueFromCardNumberInputs.bind(this)
        this.cardNumberInputsRef1         = React.createRef();
        this.cardNumberInputsRef2         = React.createRef();
        this.cardNumberInputsRef3         = React.createRef();
        this.cardNumberInputsRef4         = React.createRef();

    }
    

    handleShow() {
        this.setState({showModal: true});
    }
    
    handleHide() {
        this.setState({showModal: false});
    }

    formIsSubmited(e){
        e.preventDefault()
        console.log(this.props.handleClick);
        this.setState({showModal: true});
    }

    handleTermChange(e) {
        this.setState({term: e.target.value});
    }

    getValueFromCardNumberInputs(){
        let valueBacket = '';
        valueBacket = this.cardNumberInputsRef1.current.value + ' '
                    + this.cardNumberInputsRef2.current.value + ' '
                    + this.cardNumberInputsRef3.current.value + ' '
                    + this.cardNumberInputsRef4.current.value + ' '
        this.props.handleClick.cardNumber = valueBacket
    }


    render(){

          const modal = this.state.showModal && <Thankyou>
              <div className="modal">
                <div id="modal-container">
                    <div className="modal-inner">
                        Thank you, 
                        {this.props.handleClick.userNameInput + ' '} 
                        for your interest, we will be in touch shortly !                  
                    </div>
                </div>
                <button className="close-modal" onClick={this.handleHide}>
                    x
                    
                </button>
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
                                <div className="card-wrapper">
                                    <Payplan />
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
                                                        <input  
                                                            ref={this.cardNumberInputsRef1} type="text" name="cardNumber" 
                                                            value={this.props.cardNumber} 
                                                            onChange={ this.getValueFromCardNumberInputs} 
                                                            maxLength="4" 
                                                            inputMode='numeric' 
                                                            className="form-control contact-input inputs"
                                                        />
                                                        <input  
                                                            ref={this.cardNumberInputsRef2} type="text" name="cardNumber" 
                                                            value={this.props.cardNumber} 
                                                            onChange={ this.getValueFromCardNumberInputs} 
                                                            maxLength="4"
                                                            inputMode='numeric' 
                                                            className="form-control contact-input inputs"
                                                        />
                                                        <input  
                                                            ref={this.cardNumberInputsRef3} type="text" name="cardNumber" 
                                                            value={this.props.cardNumber}
                                                            onChange={this.getValueFromCardNumberInputs} 
                                                            maxLength="4" 
                                                            inputMode='numeric' 
                                                            className="form-control contact-input inputs"
                                                        />
                                                        <input  
                                                            ref={this.cardNumberInputsRef4} type="text" name="cardNumber" 
                                                            value={this.props.cardNumber}
                                                            onChange={ this.getValueFromCardNumberInputs}
                                                            maxLength="4" 
                                                            inputMode='numeric' 
                                                            className="form-control contact-input inputs"
                                                        />
                                                            {/* {numberInputs} */}
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