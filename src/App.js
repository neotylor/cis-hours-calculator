import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import Alert from './components/Alert';
import './service/utility';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  let location = useLocation();

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
  useEffect(() => {
    document.body.style.backgroundColor = mode === 'light'? 'white': 'black';
    return () => {
      document.body.style.backgroundColor = mode === 'light'? 'white': 'black';
    }
  }, [location, mode])
  
  return (
    <div className='container'>
      <Navbar title="Hours Calculator" mode={mode} toggleMode={toggleMode} />
      <Alert alertMsg={alert} />
      <Routes>
        <Route exact path="/" element={<Home mode={mode} showAlert={showAlert} toggleMode={toggleMode}/>} />
        <Route path='/about' element={<About mode={mode}/>} />
      </Routes>
    </div>
  );
}

export default App;
