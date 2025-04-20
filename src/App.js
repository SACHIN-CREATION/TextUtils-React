import "./App.css";
import React, { useState } from "react";

// import Navbar from './components/Navbar';
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
// import About from "./components/About";
// import { BrowserRouter as Router, Routes,Route,Switch } from 'react-router-dom';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const ShoeAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type,
    });
    setTimeout(() => {
      setAlert("");
    }, 1500);
  };

  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#043743";
      document.body.style.color = "white";
      ShoeAlert("dark mood has been Enabled", "success");
      document.title = "Text Utility - Dark Mode";
      // setInterval(() => {
      //   document.title = "Text Utility is amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = " Install Text Utility";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      ShoeAlert("light mood has been Enabled", "success");
      document.title = "Text Utility - Light Mode";
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar
          title="TextUtils"
          AboutText="About"
          mode={mode}
          togglemode={togglemode}
        />
        <Alert Alert={alert} />
        <div className="container my-3">
          {/* <Switch> */}
            {/* <Route exact path="/about"> */}
              {/* <About /> */}
            {/* </Route> */}

            {/* <Route exact path="/"> */}
              <Textform
                heading="Enter the text analys below"
                mode={mode}
                ShoeAlert={ShoeAlert}
              />
            {/* </Route> */}
          {/* </Switch> */}

          {/* <About /> */}
        </div>
        {/* <Navbar /> */}
      {/* </Router> */}
    </>
  );
}

export default App;
