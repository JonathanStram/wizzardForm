import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Form.scss';

class Thankyou extends Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
      }

      componentDidMount() {
        document.body.appendChild(this.el);
      }
    
      componentWillUnmount() {
        document.body.removeChild(this.el);
      }




    render() {
        return ReactDOM.createPortal(
        this.props.children,
        // A DOM element
        this.el,

        <h1>asdad</h1>
        );
    }
}

export default Thankyou;