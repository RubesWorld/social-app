import React, { useContext } from "react";
import { UserContext, PostContext } from "../App";

function Post({ image, content, user, id }) {
  const currentUser = useContext(UserContext);
  const { dispatch } = useContext(PostContext);
  const isCurrentUser = currentUser === user;

  const handleDeletePost = () => {
    dispatch({ type: "REMOVE_POST", payload: { id } });
  };

  return (
    <>
      {image && (
        <img
          style={{ height: 100, width: 200, objectFit: "cover" }}
          src={URL.createObjectURL(image)}
          alt="post cover"
        />
      )}
      <p>{content}</p>
      <h2 style={{ color: isCurrentUser && "green" }}>Posted by: {user}</h2>
      <div>
        {isCurrentUser && <button onClick={handleDeletePost}>Delete</button>}
      </div>
    </>
  );
}

export default Post;
