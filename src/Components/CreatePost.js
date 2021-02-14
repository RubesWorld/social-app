import React, { useState } from "react";

function CreatePost({ user, setPosts, posts }) {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const imageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const inputChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = { content, image, user };
    const newPost = [post, ...posts];
    setPosts(newPost);
  };

  return (
    <div>
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Post Content"
          onChange={inputChange}
        />
        <input type="file" onChange={imageChange} />
        <button type="submit">Create</button>
      </form>
      {/* <p>{content}</p>
      {image && (
        <img
          style={{ height: 100, width: 200, objectFit: "cover" }}
          src={URL.createObjectURL(image)}
        ></img>
      )}
      <h1>Posted by {user}</h1> */}
    </div>
  );
}

export default CreatePost;
