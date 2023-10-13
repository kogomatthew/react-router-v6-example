import { Link, Outlet } from "react-router-dom";

function Learn() {
  return (
    <div>
      <Link to="/" className="btn btn-success p-2 m-1 g-col-6">
        Home
      </Link>
      <Link to="/learn/courses" className="btn btn-info p-2 m-1 g-col-6">
        Courses
      </Link>
      <Link to="/learn/bundle" className="btn btn-primary p-2 m-1 g-col-6">
        Bundle
      </Link>

      <Link to="/dashboard" className="btn btn-primary p-2 m-1 g-col-6">
        Dashboard
      </Link>

      <Outlet />
    </div>
  );
}

export default Learn;
