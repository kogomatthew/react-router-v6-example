import React from "react";
import { Outlet, NavLink } from "react-router-dom";

function Courses() {
  const courseList = ["React", "Vue", "Angular", "NodeJS"];

  const randomCourse =
    courseList[Math.floor(Math.random() * courseList.length)];

  return (
    <div>
      Courses
      <h1>Course Card </h1>
      <NavLink
        to={`/learn/courses/${randomCourse}`}
        style={({ isActive }) => ({
          color: isActive ? "red" : "blue",
          backgroundColor: isActive ? "yellow" : "green",
        })}
      >
        {randomCourse}
      </NavLink>
      <NavLink to={`/learn/courses/test`} state={"django"} className="btn btn-default bg-white">
        test
      </NavLink>
      <Outlet />
    </div>
  );
}

export default Courses;
