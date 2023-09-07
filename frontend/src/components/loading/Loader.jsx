import React from 'react'

const Loader = () => {
    return (
        <div style={{display: "flex", justifyContent: "center", marginTop: "200px"}}>
            <div class="spinner-border" style={{ width: "3rem", height: "3rem", color: "blueviolet" }} role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Loader
