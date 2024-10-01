import React from "react";
import logo from "../../assets/images/notes.jpg";
export const Navbar = () => {
  return (
    <header className="flex px-3 py-2 gap-2 border-b-4 border-y-pink-700">
      <div className="w-10 h-10 ">
        <img className="w-full h-full" src={logo} alt="logo" />
      </div>
      <div>
        <h1 className="text-indigo-200  font-bold text-3xl">Note it</h1>
      </div>
    </header>
  );
};

export default Navbar;
