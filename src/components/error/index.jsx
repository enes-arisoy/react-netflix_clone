import React from "react";
import { Link } from "react-router-dom";

const Error = ({ message }) => {
  return (
    <div className="text-center text-xl p-4 text-zinc-300 my-10 bg-gray-500 w-100 mx-auto rounded-md">
      <p>An error occurred. Please try again later.</p>
      <p className="font-semibold mb-4">{message}</p>

      <Link to="/" className="bg-black p-2 rounded mb-2 hover:bg-gray-700 flex place-content-center mx-auto transition duration-200 w-50">
        Home Page
      </Link>
    </div>
  );
};

export default Error;
