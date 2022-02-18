import './App.css';
import { Outlet } from "react-router-dom";

import Menu from './components/Menu';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='container-fluid'>
      <div className='col-8 offset-2'>
        <div className='row p-3'>
          <Menu />
        </div>
        <hr />
        <div className='row'>
          <div className='col-4 p-3'>
            <Sidebar />

          </div>
          <div className='col-8 p-3'><Outlet /></div>
        </div>
      </div>
    </div>
  );
}

export default App;
