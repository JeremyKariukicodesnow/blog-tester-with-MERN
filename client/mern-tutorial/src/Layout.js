import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

export default function Layout({ showLinks, setShowLinks }) {
  return (
    <div>
      <main>
        <Header showLinks={showLinks} setShowLinks={setShowLinks} />
        <Outlet />
      </main>
    </div>
  );
}
