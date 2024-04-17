// Create post component that has a caption an image upload and a post button

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { milind } from "../assets/initalUsers";
import Post from "../types/Post";

interface CreatePostProps {
  onPost: (post: Post) => void;
}


// Image should be a previewable image file uploaded by the user not a url and make it text areas

const CreatePost: React.FC<CreatePostProps> = ({ onPost }) => {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handlePost = () => {
    const post: Post = {
      id: uuidv4(),
      caption,
      username: milind.username,
      avatar: milind.avatar,
      imageUrl: URL.createObjectURL(image!),
      comments: [],
    };

    onPost(post);

    setCaption("");
    setImage(null);
  };

  return (
    <div className="bg-white w-full p-4 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Create a Post
      </h2>

      <textarea
        placeholder="Write a caption..."
        className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      ></textarea>

      <div className="relative border-2 rounded-md px-4 py-3 bg-white flex items-center justify-between hover:border-blue-500 transition duration-150 ease-in-out mb-4">
        <input
          type="file"
          id="fileAttachment"
          name="fileAttachment"
          accept="image/*"
          onChange={(e) => setImage(e.target.files![0])}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        <div className="flex items-center">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
          <span className="ml-2 text-sm text-gray-600">Choose a file</span>
        </div>
        <span className="text-sm text-gray-500">Max file size: 5MB</span>
      </div>

      {image && (
        <img
          src={URL.createObjectURL(image)}
          alt="Post"
          className="w-full h-48 object-cover mb-4"
        />
      )}

      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-lg"
        onClick={handlePost}
      >
        Post
      </button>
    </div>
  );
};

export default CreatePost;
