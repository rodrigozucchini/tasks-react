import { useEffect } from 'react';

import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import Notfoundpage from './pages/404/NotFoundPage';
import Aboutpages from './pages/about-faqs/AboutPages';
import Profilepage from './pages/profiles/ProfilePage';
import Taskspage from './pages/tasks/TasksPage'
import Taskdetailepage from './pages/tasks/TaskDetailePage';
import LoginPage from './pages/auth/LoginPage';
import Statepage from './pages/home/StatePage';

 function AppRoutingOne() {

  let logged = false;

  let taskList = [
    {
      id: 1,
      name: "Task 1",
      description: "My first Task"
    },
    {
      id: 2,
      name: "Task 2",
      description: "My second Task"
    },
    {
      id: 3,
      name: "Task 3",
      description: "My three Task"
    }
  ]

  useEffect(() => {
    logged = localStorage.getItem('credentials')
    console.log("usuario logeado?", logged)
  }, []);

  return (
    <Router>
      <div>
        <aside>
          <Link to="/">|| HOME |</Link>
          <Link to="/about">| ABOUT |</Link>
          <Link to="/faqs">| FAQs |</Link>
          <Link to="/404">| Not Existing Route |</Link>
          <Link to="/login">| Login |</Link>
          <Link to="/task/1">| TASK 1|</Link>
          <Link to="/task/2">| TASK 2||</Link>
        </aside>

        <main>
        <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/online-state" element={<Statepage />} />
          <Route exact path="/login" element={  logged ? <Navigate to="/" /> : <LoginPage/>  } />
        <Route path="/about" element={<Aboutpages/>} />
        <Route path="/faqs" element={<Aboutpages/>} />
          <Route path="/profiles" element={ logged ?   <Profilepage /> : <Navigate to="/login" /> } />
        <Route path="/tasks" element={<Taskspage />} />
        <Route exact path="/task/:id" 
          render={
            ({match}) => 
            (<Taskdetailepage task={taskList[match.params.id]} />)
        } 
        >
        </Route>
                {/*ERROR 404 NOT FOUND*/}
        <Route path="*" element={<Notfoundpage/>} />
        </Routes>
        </main>
      </div>
    </Router>
  );
}

export default AppRoutingOne;
