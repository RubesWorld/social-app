import React, {
  useState,
  useEffect,
  useRef,
  createContext,
  useContext,
  useReducer,
} from "react";
import ReactDOM from "react-dom";

import postReducer from "./utils/reducer";

//module imports
import Login from "./Components/Login";
import Header from "./Components/Header";
import CreatePost from "./Components/CreatePost";
import PostList from "./Components/PostList";

export const UserContext = createContext();
export const PostContext = createContext({
  posts: [],
});

function App() {
  const initialPostState = useContext(PostContext);
  const [state, dispatch] = useReducer(postReducer, initialPostState);
  const [user, setUser] = useState("Ruben");

  useEffect(() => {
    document.title = user ? `${user}'s Feed` : "Please Login";
  }, [user]);

  // const handleAddPost = (newPost) => {
  //   setPosts([newPost, ...state.posts]);
  // };

  if (!user) {
    return <Login setUser={setUser} />;
  }
  return (
    <PostContext.Provider value={{ state, dispatch }}>
      <UserContext.Provider value={user}>
        <Header user={user} setUser={setUser} />
        <CreatePost user={user} />
        <PostList posts={state.posts} />
      </UserContext.Provider>
    </PostContext.Provider>
  );
}

export default App;
