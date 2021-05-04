import React from 'react';
import axios from 'axios';
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
            plan      : '',
            arrowClass: null
        }


        this.handleTermChange             = this.handleTermChange.bind(this);
        this.handleShow                   = this.handleShow.bind(this);
        this.handleHide                   = this.handleHide.bind(this);
        this.formIsSubmited               = this.formIsSubmited.bind(this)
        this.afterArrow                   = this.afterArrow.bind(this)
        this.afterArrowOne                = this.afterArrowOne.bind(this)
        this.afterArrowThree              = this.afterArrowThree.bind(this)
        this.getValueFromCardNumberInputs = this.getValueFromCardNumberInputs.bind(this)
        this.setTimer                     = this.setTimer.bind(this)
        this.setNewClass                  = this.setNewClass.bind(this)
        this.selectPaySystem              = this.selectPaySystem.bind(this)
        this.removeClassPaySystem         = this.removeClassPaySystem.bind(this)
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

    setTimer () {
        setTimeout( () => { this.handleHide() }, 2000 )
    }


    formIsSubmited(e){
        e.preventDefault()
        this.cardNumberInputsRef1.current.value = '';
        this.cardNumberInputsRef2.current.value = '';
        this.cardNumberInputsRef3.current.value = '';
        this.cardNumberInputsRef4.current.value = '';

        axios.post('https://reqres.in/api/articles', this.props.handleClick, this.setTimer())
        .then(function (responce) {
            console.log(responce.data);           
        });
        this.setState({showModal: true});
    }

    handleTermChange(e) {
        this.setState({term: e.target.value});
    }

    afterArrow(){
        this.setState({arrowClass : 0})        
    }
    afterArrowOne(){
        this.setState({arrowClass : 1})        
    }
    afterArrowThree(){
        this.setState({arrowClass : 2});
    }

    setNewClass(){
        if (this.state.arrowClass === 0){
            return "mess-bar-active-1"
        }
        if (this.state.arrowClass === 1){
            return "mess-bar-active-2"
        }
        if (this.state.arrowClass === 2){
            return "mess-bar-active-3"
        }
    }
    selectPaySystem(system){
        let images = document.querySelectorAll('.pay-sys-img')
        for (let i = 0; i < images.length; i++){
            images[system].classList.add('active-pay-sys')
        }
    }

    removeClassPaySystem(system){
        let images = document.querySelectorAll('.pay-sys-img')
        for (let i = 0; i < images.length; i++){
            images[system].classList.remove('active-pay-sys')
        }
    }

    getValueFromCardNumberInputs(){
        let valueBacket = '';
        valueBacket = this.cardNumberInputsRef1.current.value + ' '
                    + this.cardNumberInputsRef2.current.value + ' '
                    + this.cardNumberInputsRef3.current.value + ' '
                    + this.cardNumberInputsRef4.current.value + ' '
        this.props.handleClick.cardNumber = valueBacket

        if (this.cardNumberInputsRef1.current.value >= '2221' && this.cardNumberInputsRef1.current.value <= '2720'){
            this.selectPaySystem(1)
        } else this.removeClassPaySystem(1)
        if (this.cardNumberInputsRef1.current.value === '34' || this.cardNumberInputsRef1.current.value === '37'){
            this.selectPaySystem(0)
        } else this.removeClassPaySystem(0)
        if (this.cardNumberInputsRef1.current.value === '4'){
            this.selectPaySystem(2)
        } else this.removeClassPaySystem(2)
        if (this.cardNumberInputsRef1.current.value === '65' || this.cardNumberInputsRef1.current.value === '6011'){
            this.selectPaySystem(3)
        } else this.removeClassPaySystem(3)
        if (this.cardNumberInputsRef1.current.value === '866'){
            this.selectPaySystem(4)
        } else this.removeClassPaySystem(4)
        if (this.cardNumberInputsRef1.current.value >= '1111' && this.cardNumberInputsRef1.current.value <= '2000'){
            this.selectPaySystem(5)
        } else this.removeClassPaySystem(5)
        // if (this.cardNumberInputsRef1.current.value == ''){
        //     this.removeClassPaySystem()
        // }
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
                            <form onSubmit={this.formIsSubmited} >
                                <h2>{this.state.title}</h2>
                                <p>{this.state.subtitle}</p>
                                <div className="card-wrapper">
                                    <Payplan afterArrow={this.afterArrow} afterArrowOne={this.afterArrowOne} afterArrowThree={this.afterArrowThree} cardState={this.state.arrowClass}/>
                                    <div className="card-column">
                                        <div className={`mess-bar df ${this.setNewClass()}`}>
                                            <div className="payment-sys">
                                                <h6>Payment method</h6>
                                                <div className="input-row df">
                                                    <div className="pay-sys">
                                                        <img src={american_expres} className="pay-sys-img" alt="american-express" onChange={this.selectPaySystem}/>
                                                    </div>
                                                    <div className="pay-sys">
                                                        <img src={mastercard} alt="mastercard" className="pay-sys-img" onChange={this.selectPaySystem}/>
                                                    </div>
                                                    <div className="pay-sys">
                                                        <img src={visa} alt="visa" className="pay-sys-img" onChange={this.selectPaySystem}/>
                                                    </div>
                                                    <div className="pay-sys">
                                                        <img src={discover} alt="discover" className="pay-sys-img" onChange={this.selectPaySystem}/>
                                                    </div>
                                                </div>
                                                <div className="input-column">
                                                    <div className="pay-sys">
                                                        <img src={pay_pal} alt="pay-pal" className="pay-sys-img" onChange={this.selectPaySystem}/>
                                                    </div>
                                                    <div className="pay-sys">
                                                        <img src={amazon_pay} alt="amazon-pay" className="pay-sys-img" onChange={this.selectPaySystem}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-wrap">
                                                <h6>Card detail</h6>
                                                <div className="card">
                                                    
                                                
                                                    <div className="card-number" onInput={nextTab} >
                                                        <label className="inputLabel" aria-label="Phone">Card number</label>
                                                        <input  
                                                            required
                                                            ref={this.cardNumberInputsRef1} type="number" name="cardNumber" 
                                                            value={this.props.cardNumber} 
                                                            onChange={ this.getValueFromCardNumberInputs} 
                                                            maxLength="4" 
                                                            inputMode='numeric' 
                                                            className="form-control contact-input inputs"
                                                        />
                                                        <input  
                                                            required
                                                            ref={this.cardNumberInputsRef2} type="number" name="cardNumber" 
                                                            value={this.props.cardNumber} 
                                                            onChange={ this.getValueFromCardNumberInputs} 
                                                            maxLength="4"
                                                            inputMode='numeric' 
                                                            className="form-control contact-input inputs"
                                                        />
                                                        <input  
                                                            required
                                                            ref={this.cardNumberInputsRef3} type="number" name="cardNumber" 
                                                            value={this.props.cardNumber}
                                                            onChange={this.getValueFromCardNumberInputs} 
                                                            maxLength="4" 
                                                            inputMode='numeric' 
                                                            className="form-control contact-input inputs"
                                                        />
                                                        <input 
                                                            required 
                                                            ref={this.cardNumberInputsRef4} type="number" name="cardNumber" 
                                                            value={this.props.cardNumber}
                                                            onChange={ this.getValueFromCardNumberInputs}
                                                            maxLength="4" 
                                                            inputMode='numeric' 
                                                            className="form-control contact-input inputs"
                                                        />
                                                    </div>
                                                    <div className="card-data">
                                                        <div className="expiration-date">
                                                            <label className="inputLabel" aria-label="Phone">Expiration date</label>
                                                            <input type="text" name="cardExpireDate" required value={this.props.cardExpireDate} onChange={this.props.changeFormValue} maxLength="5" title="title" className="form-control contact-input" id="date"  ref={dateInput} onInput={dateMask}/>
                                                        </div>
                                                        <div className="card-cvv">
                                                            <div></div>
                                                            <label className="inputLabel" inputMode='numeric' aria-label="Phone">CVC/CVV</label>
                                                            <input type="password" name="cardCVV" required value={this.props.cardCVV} onChange={this.props.changeFormValue} maxLength="3" inputMode='numeric' className="form-control contact-input" id="cvv"/>
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
                                        <button type="submit"   className="submit btn" >submit</button>
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