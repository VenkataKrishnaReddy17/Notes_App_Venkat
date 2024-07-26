import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Login from "../pages/login";
import Notes from '../pages/notes';
import Main from '../layouts/Main';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/notes" element={<Main/>}>
            <Route index element={<Notes/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    );
}
  
export default App;
  