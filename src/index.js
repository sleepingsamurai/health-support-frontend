import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Route, BrowserRouter} from 'react-router-dom'
import AuthType from './components/AuthType';
import Dashboard from './components/Dashboard'
import Hospital from './components/Hospital';
import Vaccine from './components/Vaccine';


function Router(){
  return(
    <BrowserRouter>

      <Route exact path = "/" component={AuthType}/>
      <Route exact path = "/dashboard" component={Dashboard}/>
      <Route exact path = "/hospital" component={Hospital}/>
      <Route exact path = "/vaccine" component={Vaccine}/>

    </BrowserRouter>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
