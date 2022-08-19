import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './component/Navebar.css'
import './views/Home.css'
// import './views/Order'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<App />
</BrowserRouter>
   

);

