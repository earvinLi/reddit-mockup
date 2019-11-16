// Internal Dependencies
import {
  FETCH_POSTS,
} from '../../App/ActionTypes';

// TODO: Create helper functions to simplify the following fetches
export const fetchPosts = () => async (dispatch) => {
  const fetchedPostsJSON = await fetch('http://localhost:8081/posts');
  const fetchedPosts = await fetchedPostsJSON.json();

  dispatch({ type: FETCH_POSTS, fetchedPosts });
};
