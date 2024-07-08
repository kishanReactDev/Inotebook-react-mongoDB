import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Signup from './components/Signup';
import Login from './components/Login';
import { useState } from 'react';

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert alert={alert} />
          <div className="container">
            <Routes>

              <Route path='/' element={<Home showAlert={showAlert} />} ></Route>
              <Route path='/about' element={<About />}> </Route>
              <Route path='/Login' element={<Login showAlert={showAlert} />}> </Route>
              <Route path='/Signup' element={<Signup showAlert={showAlert} />}> </Route>

            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
