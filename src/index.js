import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './resource/css/common.css';
import './resource/css/style.css'
import App from './App';
import Header from './include/Header'
import Footer from './include/Footer'
import Section01 from './pages/Section01';
import Section02 from './pages/Section02';
import Section03 from './pages/Section03';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
      <Section01 />
      <Section02 />
      <Section03 />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
