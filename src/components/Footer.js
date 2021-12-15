import React from 'react'

function Footer(props) {
    let myStyle = {
        color: props.mode==='dark' ? 'black' : 'grey',
        backgroundColor: props.mode==='dark' ? 'white': 'rgb(4, 39, 67)',
        bottom: '0px',
        textAlign:'center'
        
    }
    return (
            <div className="container my-5">
                <footer className="text-center" style={myStyle}>
                <div className="text-center p-1" >
                    © 2021 Copyright: Sagar Shiroya
                </div>
                </footer>
            </div>
    )
}

export default Footer
