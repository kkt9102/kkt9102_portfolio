import logo from './logo.svg';
import Header from "./include/Header";
import Main from "./include/main";
import Footer from "./include/Footer";

import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/" exact={true}>test</Link>
        <Link to="/reserve_info">스타벅스 리저브</Link>
        <Routes>
          <Route path="/" exact element={<Main/>} />
          <Route path="/reserve_info" element={<reserve_info/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
