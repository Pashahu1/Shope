import './styles/App.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Header } from './components/Layout/Header/Header';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Suspense fallback={<span>Loading...</span>}>
          <Outlet />
        </Suspense>
      </main>
      <footer className="footer"></footer>
    </div>
  );
};
