import React from 'react'

export default function Alert(props) {

    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div className="my-2" style={{height:'50px'}}>
            {props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                {capitalize(props.alert.type)}: {props.alert.msg}
            </div>}
        </div>
    )
}
