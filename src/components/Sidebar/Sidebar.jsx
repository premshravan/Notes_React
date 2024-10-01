import React from "react";
import { NavLink } from "react-router-dom";

const getStyles = ({ isActive }) => {
  const styles = " flex align-center gap-1 px-2 py-2";
  return isActive
    ? `bg-indigo-800 mt-5 rounded-tr-[15px] rounded-bl-[15px] text-slate-50 ${styles}`
    : `hover:bg-teal-500 hover:text-slate-50 rounded ${styles}`;
};

const Sidebar = () => {
  return (
    <aside className=" flex flex-col gap-10 p-2 border-y-pink-700 border-8 w-[150px] h-96 border-b-slate-900 bg-blue-200 m-2 ">
      <NavLink className={getStyles} to={"/"}>
        <span class="material-icons-outlined">home</span>
        <span>Home</span>
      </NavLink>
      <NavLink className={getStyles} to={"/archive"}>
        <span class="material-icons-outlined">archive</span>
        <span>Archive</span>
      </NavLink>
      <NavLink className={getStyles} to={"/important"}>
        <span class="material-icons-outlined">grade</span>
        <span>Important</span>
      </NavLink>
      <NavLink className={getStyles} to={"/delete"}>
        <span class="material-icons-outlined">delete</span>
        <span>Delete</span>
      </NavLink>
    </aside>
  );
};

export default Sidebar;
