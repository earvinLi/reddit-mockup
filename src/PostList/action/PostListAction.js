// Internal Dependencies
import {
  DELETE_POST,
  FETCH_POSTS,
} from '../../App/ActionTypes';

// TODO: Create helper functions to simplify the following fetches
export const deletePost = (postId) => async (dispatch) => {
  const deletedPostJSON = await fetch(`http://localhost:8081/posts/${postId}`, {
    method: 'DELETE',
    headers: { 'content-type': 'application/json' },
  });
  const deletedPost = await deletedPostJSON.json();

  dispatch({ type: DELETE_POST, deletedPost });
};

export const fetchPosts = () => async (dispatch) => {
  const fetchedPostsJSON = await fetch('http://localhost:8081/posts');
  const fetchedPosts = await fetchedPostsJSON.json();

  dispatch({ type: FETCH_POSTS, fetchedPosts });
};
