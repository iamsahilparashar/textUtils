import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import logo from './logo.svg';
// import Screenshot from './img.png'

// let name = "sahil"
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const colorValue = () => {
    let colorV = document.getElementById('colorPicker').value;
    document.body.style.backgroundColor = colorV;
  }
  const toggle = () => {
    if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // to change the title 
      document.title = "Textutils-Lightmode"


    }
    else {
      setMode('dark')
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled", "success");
      // to change the title 
      document.title = "Textutils-Darkmode"

      // to change(chamkana) the  title randomly and to attract users to install something 
      // setInterval(() => {
      //   document.title="install Textutils know";        
      // },2000);
      // setInterval(() => {
      //   document.title="Textutils is amazing"        
      // },1500);

    }
  }
  return (
    <>
      <Router>
        <Navbar title="Textutils" aboutTextutils="About" mode={mode} toggle={toggle} colorValue={colorValue} />
        <Alert alert={alert} mode={mode} />
        <div className="container my-3">
          <Switch>
            {/* always use (exact path) not (path) beacuse react partial matching karta h jaise
                /users
                /users/sahil
                agr app users/sahil pe jaoge to ye apko users pe le jayega due to partial matching
              */} 
            <Route exact path="/about">
              <About heading="About Us" mode={mode} />
            </Route>
            <Route exact path="/">
              <TextForm heading="Enter text below to analyze" mode={mode} showAlert={showAlert} />
            </Route>
          </Switch>
          {/* <About heading="About Us" /> */}
        </div>
      </Router>
    </>
  );
}
export default App;
