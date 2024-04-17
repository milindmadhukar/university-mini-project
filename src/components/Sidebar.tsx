// Make a side bar component for a social media platform. It contains a profile component and a post content component

import React from "react";

import ProfileCard from "./ProfileCard";

import logo from "../assets/logo.png";
import CreatePost from "./CreatePost";
import Post from "../types/Post";
import { Link } from "react-router-dom";

interface SidebarProps {
  onPost: (post: Post) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onPost }) => {
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

        <Link
          to="/users"
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Users
        </Link>
      </div>

      <ProfileCard
        name="Milind"
        description="Full Stack Developer | Open Source Enthusiast | Tech Blogger | Student"
        image="https://i.ibb.co/7jpf15G/Website-Logo.png"
        twitter="milind_1504"
        github="milindmadhukar"
        linkedin="in/milind-madhukar-0726b0211"
      />

      <CreatePost
        onPost={(post: Post) => {
          onPost(post);
        }}
      />
    </div>
  );
};

export default Sidebar;
