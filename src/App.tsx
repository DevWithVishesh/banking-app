import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/home/login/Login';
import Registration from './pages/home/Registration/Registration';
import Dashboard from './pages/dashboard/Dashboard';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}>
        </Route>
        <Route path="/register" element={<Registration />}>
        </Route>
        <Route path="/dashboard" element={<Dashboard/>}>
        </Route>
            </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
