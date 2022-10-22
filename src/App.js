import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextFrom from "./components/TextFrom";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

function App() {
    const [mode, setMode] = useState('light')
    const [alert, setAlert] = useState(null)

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null)
        }, 2000);
    }

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark')
            document.body.style.backgroundColor = '#042743'
            showAlert('Dark Mode Enable', 'success')
         //   document.title = 'TextUtils-Dark Mode'
            /* title change like scam install software of anti virus etc etc.  
            setInterval(() => {
                  document.title = 'TextUtil is Amazing'
              }, 2000)
              setInterval(() => {
                  document.title = 'Install TextUtils Now'
              }, 1500)*/
        } else {
            setMode('light')
            document.body.style.backgroundColor = 'white'
            showAlert('Light Mode Enable', 'success')
         //   document.title = 'TextUtils-Light Mode'
        }
    }

    return (
        <>
            <Router>
            <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
            <Alert alert={alert} />
            <div className="container">
                    <Routes>
                        <Route exact path="/about" element={<About mode={mode} />} />
                        <Route exact path="/" element={<TextFrom showAlert={showAlert} mode={mode} heading='Try TextUtils - Word Counter, Character Counter, Remove extra spaces' />} />
                    </Routes>
                </div>
            </Router >
        </>
    );
}
export default App;

