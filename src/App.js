import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";
import New from "./components/New/New";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrepper">
        <Header />
        <NavBar />
        <div className="app-wrepper-nav">
        <Route path="/friends" render={() => <Friends friends={props.state.dialogsPage.dialogsData}/>} />
        </div>
        <div className="app-wrepper-content">
          <Route path="/dialogs" render={() => (<Dialogs dialogsData={props.state.dialogsPage.dialogsData}
                                                         messageData={props.state.dialogsPage.messageData}/>)}/>
          <Route path="/profile" render={() => <Profile posts={props.state.profilePage.posts} />}/>
          <Route path="/new" render={() => <New />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
          
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
