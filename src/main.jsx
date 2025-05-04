import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Routes, Route} from 'react-router';
import  HomePage from './pages/home-page.jsx';
import Navbar from './components/Navbar.jsx';
import TeachersList from './pages/admin/teachers-list.jsx';
import CreateTeacher from './pages/admin/create-teacher.jsx';
import EditTeacher from './pages/admin/edit-teacher.jsx';
import StudentList from './pages/teachers/student-list.jsx';
import CreateStudent from './pages/teachers/create-student.jsx';
import EditStudent from './pages/teachers/edit-student.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin">
          <Route path="teachers-list" element={<TeachersList />} />
          <Route path="create-teacher" element={<CreateTeacher />} />
          <Route path="edit-teacher/:id" element={<EditTeacher />} />
        </Route>

        <Route path="/teacher">
          <Route path="student-list" element={<StudentList />} />
          <Route path="create-student" element={<CreateStudent />} />
          <Route path="edit-student/:id" element={<EditStudent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)