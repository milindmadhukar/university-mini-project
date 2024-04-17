import React, { useState } from "react";
import heartFilled from "../assets/images/heartfilled.svg";
import heartOutline from "../assets/images/heartoutline.svg";
import Post from "../types/Post";

interface PostComponentProps {
  post: Post;
  onLike: (id: string) => void;
  onComment: (id: string, comment: string) => void;
}

const PostCard: React.FC<PostComponentProps> = ({ post, onLike, onComment }) => {
  const [newComment, setNewComment] = useState("");

  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="flex items-center p-4">
        <img
          src={post.avatar}
          alt={`${post.username} avatar`}
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-3">
          <p className="text-sm font-semibold">{post.username}</p>
        </div>
      </div>

      <img
        src={post.imageUrl}
        alt="Post"
        className="w-full p-4 rounded-[1.5rem]"
      />

      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button onClick={() => onLike(post.id)} className="mr-4">
              <img
                src={post.isLiked ? heartFilled : heartOutline}
                alt="Like"
                className="w-6 h-6"
              />
            </button>
            <button>
              <svg
                className="w-6 h-6 text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        <p className="mt-2 text-sm">
          <span className="font-semibold mr-1">{post.username}</span>
          {post.caption}
        </p>
        {post.comments!.length > 0 && (
          <div className="mt-2">
            {post.comments?.map((comment, index) => (
              <div key={index} className="flex items-center mt-2">
                <img
                  src={comment.avatar}
                  alt={"avatar"}
                  className="w-6 h-6 rounded-full"
                />
                <p className="ml-2 text-sm">
                  <span className="font-semibold mr-1">{comment.username}</span>
                  {comment.content}
                </p>
              </div>
            ))}
          </div>
        )}
        <div className=" flex mt-2 items-center">
          <input
            type="text"
            placeholder="Add a comment..."
            className="w-full p-2 border border-gray-300 rounded-lg"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />

          <button
            className="bg-blue-500 text-white px-4 py-2 ml-2 rounded-lg"
            onClick={() => {
              onComment(post.id, newComment);
              setNewComment("");
            }}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
