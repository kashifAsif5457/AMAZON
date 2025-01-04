import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './user Management/login/login.jsx';
import Signup from './user Management/signup/sign.jsx';
import Header from './user Management/Header/header.jsx';
import StudentDashboard from "./user Management/studentdashboard/studentdashboard.jsx"; 
import TeacherDashboard from "./user Management/TeacherDashboard/teacherDashboard.jsx";
import Unauthorized from "./user Management/Unauthorized/unauthorized.jsx";
import PrivateRoute from "./user Management/privateroute/privateroute.jsx";
import User from "./user Management/Get all users/user.jsx"; // Corrected import

const mockAuth = {
  isAuthenticated: true, 
  role: "student",
};

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} /> {/* Corrected route */}
        <Route
          path="/student-dashboard"
          element={
            <PrivateRoute role="student" auth={mockAuth}>
              <StudentDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/teacher-dashboard"
          element={
            <PrivateRoute role="teacher" auth={mockAuth}>
              <TeacherDashboard />
            </PrivateRoute>
          }
        />
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
