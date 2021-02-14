import React, { useState, useRef, useContext } from "react";
import { PostContext } from "../App";

function CreatePost({ user }) {
  const { dispatch } = useContext(PostContext);
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const imageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const inputChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = { content, image, user, id: Date.now() };
    // handleAddPost(post);
    dispatch({ type: "ADD_POST", payload: { post } });
    setContent("");
    imageRef.current.value = "";
  };

  return (
    <div>
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Post Content"
          onChange={inputChange}
          value={content}
        />
        <input type="file" onChange={imageChange} ref={imageRef} />
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
