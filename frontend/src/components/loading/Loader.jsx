import React from 'react'

const Loader = () => {
    return (
        <div style={{display: "flex", justifyContent: "center", marginTop: "200px"}}>
            <div className="spinner-border" style={{ width: "3rem", height: "3rem", color: "blueviolet" }} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Loader
