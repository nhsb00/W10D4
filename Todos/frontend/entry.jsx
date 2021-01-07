import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'

const App = () => (
    <h1>Todos App</h1>
);

window.configureStore = configureStore

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(<App />, document.getElementById("content-container"))
});