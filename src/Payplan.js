import React, {useState} from 'react';
import './Payplan.scss';


function Payplan () {

    const [appState, changePlan] = useState({
        activeObject : null,
        planObject : [
            {title : "Stamdant",
            subtitle : "5$ in 10 days"},
            {title : "Express",
            subtitle : "25$ in 5 days"},
            {title : "Premium",
            subtitle : "50$ for tomorrow"},
        ]
    })

    function toggleActive (index) {
        changePlan({ ...appState, activeObject : appState.planObject[index] })
        
    }
    

    function toggleActiveStyle (index) {
        if (appState.planObject[index] === appState.activeObject) {
            return "plan plan-color"
        } else {
            return "plan plan-gray"
        }
    }

    return(
        <div className='input-column'> 
            {appState.planObject.map((elements, index) => (
                <div 
                    key={index} 
                    className={toggleActiveStyle(index)} 
                    onClick={() => {
                        toggleActive(index)
                    }}>
                    <h4>{elements.title}</h4>
                    <h6>{elements.subtitle}</h6>
                </div>
            ))} 
        </div>
    );
}


export default Payplan;