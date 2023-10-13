import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import Learn from "./Learn";
import Courses from "./Courses";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/learn" element={<Learn />}>
        <Route path="courses" element={<Courses />}>
          <Route path=":course_id" element={<CourseID />}></Route>
        </Route>
        <Route path="bundle" element={<Bundle />}></Route>
      </Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
    </Routes>
  </Router>
);

function Bundle() {
  return <div>Bundle</div>;
}

function CourseID() {
  const navigate = useNavigate();
  const { course_id } = useParams();
  return (
    <div>
      Course ID: __ {course_id}
      <button
        onClick={() => navigate("/dashboard", { state:  course_id })}
        className="btn btn-warning"
      >
        {" "}
        Price
      </button>
    </div>
  );
}

function Dashboard() {

  const location = useLocation();
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/learn" className="btn btn-success p-2 m-1 g-col-6">
        Learn
      </Link>

      <div className="alert alert-success mx-1">
        {location.state ? location.state : ""} 
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="grid gap-3">
      <Link to="/learn" className="btn btn-success p-2 m-1 g-col-6">
        Learn
      </Link>
    </div>
  );
}

reportWebVitals();
