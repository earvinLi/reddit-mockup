// Internal Dependencies
import { fetchRequest } from '../../App/RootUtilities';
import {
  DELETE_POST,
  FETCH_POSTS,
} from '../../App/ActionTypes';

// TODO: Create helper functions to simplify the following fetches
export const deletePost = (postId) => async (dispatch) => {
  const deletedPost = await fetchRequest(`http://localhost:8081/posts/${postId}`, {
    method: 'DELETE',
    headers: { 'content-type': 'application/json' },
  });

  dispatch({ type: DELETE_POST, deletedPost });
};

export const fetchPosts = () => async (dispatch) => {
  const fetchedPosts = await fetchRequest('http://localhost:8081/posts');
  dispatch({ type: FETCH_POSTS, fetchedPosts });
};
