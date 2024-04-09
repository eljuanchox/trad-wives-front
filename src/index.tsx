import React from 'react'
import App from './components/App'
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <div>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossOrigin="anonymous"
    />
    <App />
  </div>,
  document.getElementById('root')
);
