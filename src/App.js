import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Dashboard/>}/>
          <Route path='/login' element={<Login/>}/>
                  </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
