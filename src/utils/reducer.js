const ADD_POST = "ADD_POST";
const DELETE_POST = "DELETE_POST";

const postReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = action.payload.post;
      return { posts: [newPost, ...state.posts] };
    }
    case DELETE_POST: {
      const deletedPostId = action.payload.id;
      return {
        posts: state.posts.filter((post) => post.id !== deletedPostId),
      };
    }
    default: {
      return state;
    }
  }
};
export default postReducer;
