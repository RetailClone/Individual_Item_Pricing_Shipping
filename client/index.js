import React from 'react';
import ReactDOM from 'react-dom';
import ItemView from './components/App.jsx';
import styles from "./style.css";

ReactDOM.render (<ItemView stuffId={20} />, document.getElementById('photo-view'));