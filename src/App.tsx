import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './login/SignIn';
import SignUp from './login/SignUp';
import Nav from './navigation/Nav'
import { QueryClient, QueryClientProvider } from 'react-query';
import { GlobalStyle } from './GlobalStyle';
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <GlobalStyle/>
        <Nav/>
        <Routes>
          <Route path='/Singin' element={<Signin />} ></Route>
          <Route path='/Singup' element={<SignUp />} ></Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
