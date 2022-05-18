import React from 'react';
import{Link, Routes, Route} from 'react-router-dom';
import Main from './views/main';
import Detail from './views/details';
import Update from './views/update'
import './App.css';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path = "/" element ={<Main/>}/>
        <Route path = "/:id" element ={<Detail/>}/>
        <Route path = "/update/:id" element ={<Update/>}/>
      </Routes>
    </div>
  );
}

export default App;
