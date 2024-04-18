import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home/Home";
import initalPosts from "./assets/initalPosts";
import initialUsers from "./assets/initalUsers";
import Post from "./types/Post";
import User from "./types/User";
import { BrowserRouter, Route } from "react-router-dom";
import Users from "./pages/Users/Users";

function App() {
  const [posts, setPosts] = useState<Post[]>(initalPosts);
  const [users, setUsers] = useState<User[]>(initialUsers);

  return (
    <BrowserRouter>
      <div className="flex w-[100vw]">
        <div
          className="w-[25%] p-3 fixed top-0 bottom-0 left-0"
          style={{
            borderRight: "3px solid #bfbdbf",
          }}
        >
          <Sidebar
            onPost={(post: Post) => {
              setPosts([post, ...posts]);
            }}
          />
        </div>

        <div className="w-[75%] flex-1 ml-[25%]">
          <Route path="/" exact>
            <Home
              posts={posts}
              setPosts={(posts: Post[]) => {
                setPosts(posts);
              }}
            />
          </Route>
          <Route path="/users" exact>
            <Users
              users={users}
              setUsers={setUsers}
            />
          </Route>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
