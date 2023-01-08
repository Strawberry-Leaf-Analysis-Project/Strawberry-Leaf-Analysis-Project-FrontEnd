import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './login/SignIn';
import SignUp from './login/SignUp';
import Nav from './navigation/Nav'
import Footer from './footer/Footer';
import Board from './board/Board'
import CreateBoard from './board/CreateBoard';
import ViewBoard from './board/viewBoard/ViewBoard';
import { QueryClient, QueryClientProvider } from 'react-query';
import { GlobalStyle } from './GlobalStyle';
import { ReactQueryDevtools } from 'react-query/devtools';
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
       <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
      <GlobalStyle/>
        <Nav/>
        <Routes>
          <Route path='/growth_board' element={<Board/>}/>
          <Route path='/growth_board/:id/:title' element={<ViewBoard/>}/>
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
