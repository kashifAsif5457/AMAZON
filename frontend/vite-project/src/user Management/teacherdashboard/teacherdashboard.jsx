import React from "react";

const TeacherDashboard = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Welcome to the Teacher Dashboard</h1>
      <p>
        This is the teacher's dedicated space where you can manage your classes, view student progress, and upload materials.
      </p>
      <div style={{ marginTop: "20px" }}>
        <button
          style={{
            padding: "10px 20px",
            margin: "10px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => alert("Manage Classes functionality coming soon!")}
        >
          Manage Classes
        </button>
        <button
          style={{
            padding: "10px 20px",
            margin: "10px",
            backgroundColor: "#2196F3",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => alert("View Student Progress functionality coming soon!")}
        >
          View Student Progress
        </button>
        <button
          style={{
            padding: "10px 20px",
            margin: "10px",
            backgroundColor: "#FF5722",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => alert("Upload Materials functionality coming soon!")}
        >
          Upload Materials
        </button>
      </div>
    </div>
  );
};

export default TeacherDashboard;
