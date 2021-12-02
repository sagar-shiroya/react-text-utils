import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

export default function Navbar(props) {

    // const changeBackgrounColor = ()=>{
    //     let bgColor = document.getElementById('bgColor').value;
    //     props.changeBgColor(bgColor)
    // }
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>
                    {/* <form className="d-flex">
                        <input className="form-control me-2" id="bgColor" type="search" placeholder="Enter Color" aria-label="Color" />
                        <button className="btn btn-primary me-2" onSubmit={changeBackgrounColor} type="submit">Apply</button>
                    </form> */}
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                    </div>                    
                </div>
            </div>
        </nav>
    )
}
// Prop Type Checking
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}
// Setting Default Props if not passed
Navbar.defaultProps = {
    title: "Title Here...",
    aboutText: "About"
}