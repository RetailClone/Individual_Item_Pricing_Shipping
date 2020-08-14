import React from 'react';
import ReactDOM from 'react-dom';
import ItemView from './components/App.jsx';
import styles from "./style.css";

ReactDOM.render (<ItemView prodId={window.product_id}/>, document.getElementById('photo-view'));