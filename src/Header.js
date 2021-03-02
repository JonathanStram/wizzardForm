import React from 'react';
import './Header.scss';

class Header extends React.Component {
    render() {
        return(
            <div className="pf-main">
                <header className="header pf-container">
                    <h4 className="logo">pixetic <span>design agency</span> </h4>
                </header>
            </div>
        );
    }
}


export default Header;