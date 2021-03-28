import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewText,addAnswer} from './redux/state';
import { BrowserRouter } from 'react-router-dom';

export let rerenderEntireTree = (state) =>{
ReactDOM.render(
  <BrowserRouter>
    <App state={state} addPost={addPost} updateNewText={updateNewText} addAnswer={addAnswer}/>
   </BrowserRouter>,document.getElementById('root')
);
}



