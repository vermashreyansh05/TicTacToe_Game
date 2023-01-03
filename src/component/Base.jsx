import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Dashboard from './screen/Dashboard';
import Main from './screen/main';
const Base = () => {
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Dashboard/>}/>
        </Routes>
        <Routes>
            <Route path='main' element={<Main/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default Base;