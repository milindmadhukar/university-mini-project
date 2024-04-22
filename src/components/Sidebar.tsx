import React from "react";

import ProfileCard from "./ProfileCard";

import logo from "../assets/logo.png";
import CreatePost from "./CreatePost";
import Post from "../types/Post";
import { Link } from "react-router-dom";
import User from "../types/User";
import CreateUser from "./CreateUser";

interface SidebarProps {
  onPost: (post: Post) => void;
  currentUser: User | null;
  setCurrentUser: (user: User) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  onPost,
  currentUser,
  setCurrentUser,
}) => {
  return (
    <div className="flex flex-col items-center space-y-4 relative">
      <img
        src={logo}
        alt="Logo"
        className="rounded-full mix-blend-color-burn"
      />

      <div className="flex">
        <Link
          to="/"
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Home
        </Link>

        {currentUser ? (
          <Link
            to="/users"
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Users
          </Link>
        ) : (
          <></>
        )}
      </div>

      {currentUser ? (
        <>
          <ProfileCard user={currentUser} />

          <CreatePost
            currentUser={currentUser}
            onPost={(post: Post) => {
              onPost(post);
            }}
          />
        </>
      ) : (
        <CreateUser setCurrentUser={setCurrentUser} />
      )}
    </div>
  );
};

export default Sidebar;
