import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './login/SignIn';
import SignUp from './login/SignUp';
import Nav from './navigation/Nav'
import Footer from './footer/Footer';
import Board from './board/Board'
import CreateBoard from './board/CreateBoard';
import ViewBoard from './board/ViewBoard';
import DiaryBoard from './board/DiaryBoard';
import SearchBoard from './board/searchBoard/SearchBoard';
import MainPage from './main/MainPage';
import InfoSearch from './login/infoSearch/InfoSearch';
import { QueryClient, QueryClientProvider } from 'react-query';
import { GlobalStyle } from './GlobalStyle';
import { ReactQueryDevtools } from 'react-query/devtools';
import ModifyBoard from './board/ModifyBoard';
import GroupBoard from './board/GroupBoard';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <GlobalStyle />
        <Nav />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/growth_board' element={<Board />} />
          <Route path='/my_growth_diary' element={<DiaryBoard />} />
          <Route path='/growth_board/:key/:title' element={<ViewBoard />} />
          <Route path='/growth_board/create_board' element={<CreateBoard />} />
          <Route path='/growth_board/modify_board' element={<ModifyBoard />} />
          <Route path='/search/:text' element={<SearchBoard />} />
          <Route path='/my_growth_diary/:user/:name' element={<GroupBoard />} />
          <Route path='/Singin' element={<Signin />} />
          <Route path='/Singin/:type' element={<InfoSearch />} />
          <Route path='/Singup' element={<SignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
