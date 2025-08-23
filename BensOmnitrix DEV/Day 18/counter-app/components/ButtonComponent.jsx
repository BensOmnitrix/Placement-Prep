import React from 'react'

function ButtonComponent(props) {
    function OnClickHandler(){
        props.setCount(props.count+1);
    }

    return (
        <div>
            <button onClick={OnClickHandler}>Counter {props.count}</button>
        </div>
    )
}

export default ButtonComponent
