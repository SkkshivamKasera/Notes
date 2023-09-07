import React from 'react'
import './Alert.css'

const Alert = (props) => {
    return (
        props.type && <div className={`alert alert-${props.type} alert-dismissible fade show`} role="alert">
            {props.message}
        </div>
    )
}

export default Alert
