import React, {useState} from 'react';
import './Payplan.scss';


function Payplan () {

    const [appState, changePlan] = useState({
        activeObject : null,
        planObject : [
            {id : "hello1"},
            {id : "hello2"},
            {id : "hello3"}
        ]
    })

    function toggleActive (index) {
        changePlan({ ...appState, activeObject : appState.planObject[index] })
        console.log(appState.planObject[index]);
    }
    

    function toggleActiveStyle (index) {
        if (appState.planObject[index] === appState.activeObject) {
            return "plan plan-color"
        } else {
            return "plan plan-gray"
        }
    }

    function setTitle(index) {
        if (index === 0){
            return "Stamdant"
        } else if (index === 1){
            return "Express"
        } else if (index === 2){
            return "Premium"
        } else console.error(
            "undefined index"
        );
    }
    function setSubTitle(index) {
        if (index === 0){
            return "5$ in 10 days"
        } else if (index === 1){
            return "25$ in 5 days"
        } else if (index === 2){
            return "50$ for tomorrow"
        } else console.error(
            "undefined index"
        );
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
                    <h4>{setTitle(index)}</h4>
                    <h6>{setSubTitle(index)}</h6>
                </div>
            ))} 
        </div>
    );
}


export default Payplan;