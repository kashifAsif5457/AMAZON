import React from "react";

const StudentDashboard = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Welcome to the Student Dashboard</h1>
      <p>
        Here you can find all the resources, assignments, and updates
        specifically tailored for students.
      </p>
      <ul style={{ listStyleType: "none", padding: "0" }}>
        <li style={{ margin: "10px 0" }}>
           <strong>Courses</strong>: Access your enrolled courses.
        </li>
        <li style={{ margin: "10px 0" }}>
          <strong>Assignments</strong>: View and submit your assignments.
        </li>
        <li style={{ margin: "10px 0" }}>
           <strong>Announcements</strong>: Stay updated with the latest news.
        </li>
      </ul>
    </div>
  );
};

export default StudentDashboard;
