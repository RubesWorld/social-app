import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

//module imports
import Login from "./Components/Login";
import Header from "./Components/Header";
import CreatePost from "./Components/CreatePost";
import PostList from "./Components/PostList";

function App() {
  const [user, setUser] = useState("Ruben");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    document.title = user ? `${user}'s Feed` : "Please Login";
  }, [user]);

  if (!user) {
    return <Login setUser={setUser} />;
  }
  return (
    <div>
      <Header user={user} setUser={setUser} />
      <CreatePost user={user} setPosts={setPosts} posts={posts} />
      {posts.map((post) => {
        <div>
          {post.image && (
            <img
              style={{ height: 100, width: 200, objectFit: "cover" }}
              src={URL.createObjectURL(post.image)}
              alt="post cover"
            />
          <p>{post.content}</p>
          <h2>Posted by: {post.user}</h2>

          )}
        <div/>;
      })}
    </div>
  );
}

export default App;
