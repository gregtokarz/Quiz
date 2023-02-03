import './App.css';
import Logo from './components/Logo'
import Search from './components/Search'
import Film from './components/Film'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/css/bootstrap.css';
import Footer from "./components/Footer";
import React from "react";
import description from "./components/Description";
import {Link} from "react-router-dom";
import Navigator from "./components/Navigator";


function App() {
  return (
    <div  style={{width: '1000px', margin: 'auto'}}>
      <div>
        <Logo/>
        <Navigator />
      </div>
      <div id="id">
        <Film/>
      </div>

      <Footer/>

    </div>
  );
}

export default App;
