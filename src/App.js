import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import New from "./components/New/New";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

function App() {
  return (
      <BrowserRouter>
    <div className='app-wrepper'>
     <Header />
     <NavBar />

     <div class='app-wrepper-content'>
         <Route path="/dialogs" component={Dialogs}/>
         <Route path="/profile"component={Profile}/>
         <Route path="/new"component={New}/>
         <Route path="/music"component={Music}/>
         <Route path="/settings"component={Settings}/>
     </div>
    </div>
      </BrowserRouter>);
}


export default App;
