import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './login/SignIn';
import SignUp from './login/SignUp';
import Nav from './navigation/Nav'
import Footer from './footer/Footer';
import Board from './board/Board'
import CreateBoard from './board/CreateBoard';
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
          <Route path='/growth_board' element={<Board/>}/>
          <Route path='/growth_board/create_board' element={<CreateBoard/>}/>
          <Route path='/Singin' element={<Signin />}/>
          <Route path='/Singup' element={<SignUp />}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
