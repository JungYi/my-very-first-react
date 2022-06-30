import React from 'react';

const Button = (props) => {
    console.log('   ! button component !   ');

    return (
        <button className="" 
                id={props.id} 
                onClick = {(e) => { e.target.blur(); props.onClick(e);} } 
                tooltip = {props.tooltip}>
            {props.value}
        </button>
    );
};

export default Button;