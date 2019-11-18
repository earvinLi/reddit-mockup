// Internal Dependencies
import { createReducer } from '../../App/RootUtilities';
import {
  DELETE_POST,
  FETCH_POSTS,
} from '../../App/ActionTypes';

const INITIAL_STATE = {
  deletedPost: {},
  fetchedPosts: [],
};

const deletePost = (state, action) => ({
  ...state,
  deletedPost: action.deletedPost,
});

const fetchPosts = (state, action) => ({
  ...state,
  fetchedPosts: action.fetchedPosts,
});

export default createReducer(INITIAL_STATE, {
  [DELETE_POST]: deletePost,
  [FETCH_POSTS]: fetchPosts,
});
