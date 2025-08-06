import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import Editor from './pages/editor/Editor';
import isLoggedIn from './resources/authHelper';

export var UserData = React.createContext(null);

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={isLoggedIn() ? <Navigate to="/dashboard/" /> : <Home/>} />
        {isLoggedIn() && <>
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/editor/*" element={<Editor />} />
          </>
        }  
      </Routes>
    </Router>
  );
}
