import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Notfoundpage from './pages/404/NotFoundPage';
import Aboutpages from './pages/about-faqs/AboutPages';
import LoginPage from './pages/auth/LoginPage';
import Registerpage from './pages/auth/RegisterPage';
import Dashboard from './pages/dashboard/DashBoard';
import Profilepage from './pages/profiles/ProfilePage';
import Taskspage from './pages/tasks/TasksPage';



 function AppRoutingFinal() {

  //TODO Change to value from sessionStorage for sometimes dinamic!
  let loggedIn = false;

  return (
    <Router>
      <Routes>
           {/*REDIRECCIONES*/}
      <Route exact path="/" 
        element={ 
            loggedIn ? 
                <Navigate from="/" to="dashboard" /> 
              : 
                <Navigate from="/" to="/login" /> } />
            {/*LOGIN RUTAS*/}
      <Route exact path="/login" element={loggedIn ? <LoginPage /> : <Navigate to="/register" />} />
            {/*DASHBOARD RUTAS*/}    
      <Route exact path="/dashboard" 
        element={ 
            loggedIn ? 
                <Dashboard /> 
              : 
                <Navigate from="/" to="/login" /> } />
            {/*PROFILES*/}
      <Route path="/profiles" element={ loggedIn ?   <Profilepage /> : <Navigate to="/login" /> } />
            {/*TAREAS*/}
      <Route path="/tasks" element={ loggedIn ? <Taskspage /> : <Navigate to="/login" />} />
            {/*REGISTRO*/}
      <Route path="/register" element={ loggedIn ? <Navigate to="/login" /> : <Registerpage />} />
            {/*ABOUT Y FAQs*/}
      <Route path="/about" element={<Aboutpages/>} />
      <Route path="/faqs" element={<Aboutpages/>} />
            {/*DASHBOARD ERROR404*/} 
      <Route path="*" element={<Notfoundpage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutingFinal;
