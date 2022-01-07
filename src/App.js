import Main from "./include/main";
import Reserve_info from './pages/portfolio/reserve/reserve_info';
import Reserve from './pages/portfolio/reserve/pages/main';


import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/" exact={true}></Link>
        {/* <Link to="/reserve_info">스타벅스 리저브</Link> */}
        <Routes>
          <Route path="/" exact element={<Main/>} />
          <Route path="/reserve_info" element={<Reserve_info/>} />
          <Route path="/Reserve" element={<Reserve/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
