import Navbar from './components/Navbar';
import TestForm from './components/TestForm';
// import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
import './service/utility'; 

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type, color) => {
    setAlert({
      msg: message,
      type: type,
      color: color
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode is Enabled", "success", "warning");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark Mode is Disabled", "success", "success");
    }
  }
  return (
    <div className='container'>
      <Navbar title="Hours Calculator" mode={mode} toggleMode={toggleMode} />
      <Alert alertMsg={alert} />
      <TestForm showAlert={showAlert} paddingVal="my-3" mode={mode} title="Enter The text to Analyze below" title2="Calculate Hours" />
    </div>
  );
}

export default App;
