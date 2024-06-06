import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import IndexPage from './pages/indexPage';
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

function App() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout showLinks={showLinks} setShowLinks={setShowLinks} />}>
          <Route index element={<IndexPage />} />
          <Route path='/Login' element={<div> <LoginPage /> </div>} />
          <Route path='/Register' element={<div> <RegisterPage /> </div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
