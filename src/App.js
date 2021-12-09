import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {useState} from 'react';
import Alert from './components/Alert';
import React, {Fragment} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  // const [bgColor, setBgColor] = useState('white')

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    }, 1800);
  }

  const toggleMode = ()=>{
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark Mode Enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode Enabled', 'success');
    }
  }

  const changeBgColor = (color)=>{
    document.body.style.backgroundColor = color;
  }
  return (
      
      
        <>
          {/* Different kind of props passed to the Navbar component */}
          {/* <Navbar /> */}
          <Router>
            <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} changeBgColor={changeBgColor}/>
            <div className="container">
            <Alert alert={alert}/>
            <Switch>
              {/* Always use exact path, otherwise react router try to match partially.  */}
              <Route exact path="/about">
                <About mode={mode} />
              </Route>
              <Route exact path="/">
                <TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode} />
              </Route>
            </Switch>
            </div>
          </Router>
        </>
        
      
  );
}

export default App;