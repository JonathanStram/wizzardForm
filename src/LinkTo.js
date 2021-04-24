import React from 'react';
import './LinkTo.scss';
import { Link } from 'react-router-dom';

class LinkTo extends React.Component {
    constructor(props){
        super(props);
}



    render () {
        if (   this.props.handleClick.userNameInput 
            && this.props.handleClick.userSurnameInput 
            && this.props.handleClick.userEmailInput
            && this.props.handleClick.userPhoneInput
            && this.props.handleClick.userCountryInput ){
            return <Link to={`/Card`}><button    type="submit" className={`submit btn`} > next</button></Link>
        } else {
            return <button type="submit" className="submit btn disabledButton" > next</button>        }
    }
}

export default LinkTo