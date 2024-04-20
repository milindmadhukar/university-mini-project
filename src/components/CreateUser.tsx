import { useState } from "react";
import User from "../types/User";
import { v4 as uuidv4 } from "uuid";

interface CreateUserProps {
  setCurrentUser: (user: User) => void;
}

const CreateUser: React.FC<CreateUserProps> = ({ setCurrentUser }) => {
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState<File | null>(null);
  const [bio, setBio] = useState("");
  const [twitter, setTwitter] = useState("");
  const [github, setGithub] = useState("");
  const [linkedIn, setLinkedIn] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newUser: User = {
      id: uuidv4(),
      username: username,
      avatar: URL.createObjectURL(avatar!),
      bio,
      twitter,
      github,
      linkedIn,
      followers: [],
      following: [],
    };
    setCurrentUser(newUser);
    // Reset form fields after submission
    setUsername("");
    setAvatar(null);
    setBio("");
    setTwitter("");
    setGithub("");
    setLinkedIn("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md"
    >
      <div className="mb-4">
        <label htmlFor="username" className="block font-bold mb-2">
          Username
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="avatar" className="block font-bold mb-2">
          Avatar
        </label>
        <input
          type="file"
          id="avatar"
          onChange={(e) => setAvatar(e.target.files?.[0] || null)}
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="bio" className="block font-bold mb-2">
          Bio
        </label>
        <textarea
          id="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block font-bold mb-2">Social Media</label>
        <div className="flex items-center space-x-2">
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
          <input
            type="text"
            placeholder="Twitter"
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="text"
            placeholder="GitHub"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="text"
            placeholder="LinkedIn"
            value={linkedIn}
            onChange={(e) => setLinkedIn(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Create User
      </button>
    </form>
  );
};

export default CreateUser;
