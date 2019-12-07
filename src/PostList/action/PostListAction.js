// Internal Dependencies
import { fetchRequest } from '../../App/RootUtilities';
import {
  DELETE_POST,
  FETCH_POSTS,
  POST_POST,
  VOTE_POST,
} from '../../App/ActionTypes';

export const postPost = (post) => async (dispatch) => {
  const postedPost = await fetchRequest('http://localhost:8081/posts', {
    body: JSON.stringify(post),
    method: 'POST',
    headers: { 'content-type': 'application/json' },
  });

  dispatch({ type: POST_POST, postedPost });
};

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

export const votePost = (postId, opinion) => async (dispatch) => {
  const votePostURL = `http://localhost:8081/posts/${postId}?opinion=${opinion}`;
  const votedPost = await fetchRequest(votePostURL, {
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
  });

  dispatch({ type: VOTE_POST, votedPost });
};
