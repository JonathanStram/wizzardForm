import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';


class Header extends React.Component {
    render() {
        return(
            <div className="pf-main">
                <header className="header pf-container">
                    <Link to={'/'} className="link"><h4 className="logo">pixetic <span>design agency</span> </h4></Link>
                </header>
            </div>
        );
    }
}


export default Header;