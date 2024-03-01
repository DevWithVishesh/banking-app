import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/home/login/Login';
import Registration from './pages/home/Registration/Registration';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}>
          </Route>
        <Route path="/register" element={<Registration />}>
        </Route>
            </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
