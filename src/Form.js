import React from 'react';
import './Form.scss';
import LinkTo from './LinkTo';
import { Link } from 'react-router-dom';




class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            disabled : false
        }
        this.submitTheForm    = this.submitTheForm.bind(this);
        this.isDisabled       = this.isDisabled.bind(this);
        this.handleValidation = this.handleValidation.bind(this);
    }

    isDisabled(){
        if (this.state.disabled === false ) {
            this.setState({disabled: true})
        } else {
            this.setState({disabled: false})
        }
    }
    

    submitTheForm(e) {
        e.preventDefault();
        if (   !this.props.handleClick.userNameInput 
            && !this.props.handleClick.userSurnameInput 
            && !this.props.handleClick.userEmailInput
            && !this.props.handleClick.userPhoneInput
            && !this.props.handleClick.userCountryInput ){
            this.setState({disabled: true})
        }
    }

    handleValidation(){
        console.log(this.props.handleClick);
    
    }


    render (){
        let userLabel = {
            userName     : 'Name',
            userSurname  : 'Surname',
            userCompany  : 'Company',
            userEmail    : 'Email',
            userPhone    : 'Phone',
            userCity     : 'City',
            userPostCode : 'Postal code',
            userAddress  : 'Address',
            userCountry  : 'Country'
        }

        return(
            <div className="pf-main">
                <h2>Fill the form</h2>
                <form className=""  onSubmit={this.submitTheForm}>
                <div className="pf-form-wrapper df">
                    <div className="input-column">
                        <div className="inpust-row">
                            <div className="is-quarter">
                                <div className="input">
                                    <input value={this.props.userNameInput} required name="userNameInput" onChange={this.props.changeFormValue}  className="form-control contact-input"/>
                                    <label className="inputLabel" aria-label="Full Name" >Name</label>
                                </div>
                            </div>
                            <div className="is-quarter">
                                <div className="input">
                                    <input value={this.props.userSurnameInput} required name="userSurnameInput" onChange={this.props.changeFormValue} className="form-control contact-input"/>
                                    <label className="inputLabel" aria-label="SurName">{userLabel.userSurname}</label>
                                </div>
                            </div>
                        </div>
                        <div className="inpust-col">
                            <div className="is-quarter">
                                <div className="input p-r">
                                    <input value={this.props.userCompanyInput} name="userCompanyInput" onChange={this.props.changeFormValue} className="form-control contact-input"/>
                                    <label className="inputLabel" aria-label="CompanyName">{userLabel.userCompany}</label>
                                    <input title='Add File' type="file" id="company-file" className="p-a file-input"  name="companyLogo" onChange={this.props.changeFormValue} />
                                    <label tabIndex="0" htmlFor="company-file" className="file-input-label">Add Logo</label>
                                </div>
                            </div>
                            <div className="is-quarter">
                                <div className="mail-input email-input">
                                    <input type="email" value={this.props.userEmailInput} required name="userEmailInput" onChange={this.props.changeFormValue} className="form-control contact-input"/>
                                    <label className="inputLabel" aria-label="Email">{userLabel.userEmail}</label>
                                    <span className="material-icons">
                                        mail_outline
                                    </span>
                                </div>
                            </div>
                            <div className="is-quarter">
                                <div className="mail-input">
                                    <input type="tel" value={this.props.userPhoneInput} name="userPhoneInput" onChange={this.props.changeFormValue} className="form-control contact-input"/>
                                    <label className="inputLabel" aria-label="Phone">{userLabel.userPhone}</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="input-column">
                        <div className="inpust-col">
                            <div className="is-quarter">
                                <div className="input select-input">
                                    <select id="country" onChange={this.props.changeFormValue} value={this.props.userCountryInput} name="userCountryInput" className="  form-control contact-input" placeholder="">
                                        <option value=""></option>
                                        <option value="Algeria">Algeria</option>
                                        <option value="American Samoa">American Samoa</option>
                                        <option value="Andorra">Andorra</option>
                                        <option value="Angola">Angola</option>
                                        <option value="Anguilla">Anguilla</option>
                                        <option value="Antigua & Barbuda">Antigua & Barbuda</option>
                                        <option value="Argentina">Argentina</option>
                                        <option value="Armenia">Armenia</option>
                                        <option value="Aruba">Aruba</option>
                                        <option value="Australia">Australia</option>
                                        <option value="Austria">Austria</option>
                                        <option value="Botswana">Botswana</option>
                                        <option value="Brazil">Brazil</option>
                                        <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
                                        <option value="Canada">Canada</option>
                                        <option value="Canary Islands">Canary Islands</option>
                                        <option value="Cape Verde">Cape Verde</option>
                                        <option value="Cayman Islands">Cayman Islands</option>
                                        <option value="Central African Republic">Central African Republic</option>
                                        <option value="East Timor">East Timor</option>
                                        <option value="Ethiopia">Ethiopia</option>
                                        <option value="Falkland Islands">Falkland Islands</option>
                                        <option value="Faroe Islands">Faroe Islands</option>
                                        <option value="Fiji">Fiji</option>
                                        <option value="Finland">Finland</option>
                                        <option value="Ghana">Ghana</option>
                                        <option value="Gibraltar">Gibraltar</option>
                                        <option value="Great Britain">Great Britain</option>
                                        <option value="Greece">Greece</option>
                                        <option value="Greenland">Greenland</option>
                                        <option value="Grenada">Grenada</option>
                                        <option value="Guadeloupe">Guadeloupe</option>
                                        <option value="Guam">Guam</option>
                                        <option value="Turkey">Turkey</option>
                                        <option value="Turkmenistan">Turkmenistan</option>
                                        <option value="Turks & Caicos Is">Turks & Caicos Is</option>
                                        <option value="Tuvalu">Tuvalu</option>
                                        <option value="Uganda">Uganda</option>
                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="Ukraine">Ukraine</option>
                                        <option value="United Arab Erimates">United Arab Emirates</option>
                                        <option value="United States of America">United States of America</option>
                                        <option value="Vietnam">Vietnam</option>
                                    </select>
                                    <span className="material-icons">
                                        keyboard_arrow_down
                                    </span>
                                    <label className="inputLabel" aria-label="CompanyName">{userLabel.userCountry}</label>
                                </div>
                            </div>
                            <div className="inpust-row">
                                <div className="is-quarter">
                                    <div className="input">
                                        <input value={this.props.userCityInput} name="userCityInput" onChange={this.props.changeFormValue} className="form-control contact-input"/>
                                        <label className="inputLabel" aria-label="City">{userLabel.userCity}</label>
                                    </div>
                                </div>
                                <div className="is-quarter">
                                    <div className="input">
                                        <input value={this.props.userPostCodeInput} name="userPostCodeInput" onChange={this.props.changeFormValue} className="form-control contact-input"/>
                                        <label className="inputLabel" aria-label="PostCode">{userLabel.userPostCode}</label>
                                    </div>
                                </div>
                            </div>
                            <div className="is-quarter">
                                <div className="mail-input">
                                    <input value={this.props.userAddressInput} name="userAddressInput" onChange={this.props.changeFormValue} className="form-control contact-input"/>
                                    <label className="inputLabel" aria-label="Address">{userLabel.userAddress}</label>
                                </div>
                            </div>
                            <div className="acception-row row df">
                                <input name="userAcceptTerms" required type="checkbox" onChange={this.props.changeFormValue} id=""/>
                                <Link className="link" to={`/Terms`}><h6 >I accept Terms and Service</h6></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="submit-wrapper df">
                    <LinkTo handleClick={this.props.handleClick} onClick={this.handleValidation}/>
                    {/* <Link onChange={this.handleValidation()} to={`/Card`}><button   disabled={this.state.disabled === false} type="submit" className="submit btn" > next</button></Link> */}
                </div>
                </form>
                
            </div>
        );
    }
}

export default Form;