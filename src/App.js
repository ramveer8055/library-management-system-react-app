import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './admin/Home';
import AdminLogin from './admin/AdminLogin';
import AdminPortal from './admin/AdminPortal';
import UserLogin from './user/UserLogin';
import UserPortal from './user/UserPortal';

function App() {
  let user = {
    email: "admin@gmail.com",
    password: "admin"
  }

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/admin-login' element={<AdminLogin user={user} />} />
          <Route path='/user-login' element={<UserLogin user={user} />} />
          <Route path='/admin-portal/*' element={<AdminPortal user={user} />} />
          <Route path='/user-portal/*' element={<UserPortal />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
