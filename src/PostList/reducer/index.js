// Internal Dependencies
import { createReducer } from '../../App/RootUtilities';
import {
  DELETE_POST,
  FETCH_POSTS,
  VOTE_POST,
} from '../../App/ActionTypes';

const INITIAL_STATE = {
  deletedPost: {},
  fetchedPosts: [],
  votedPost: {},
};

const deletePost = (state, action) => ({
  ...state,
  deletedPost: action.deletedPost,
});

const fetchPosts = (state, action) => ({
  ...state,
  fetchedPosts: action.fetchedPosts,
});

const votePost = (state, action) => ({
  ...state,
  votedPost: action.votedPost,
});

export default createReducer(INITIAL_STATE, {
  [DELETE_POST]: deletePost,
  [FETCH_POSTS]: fetchPosts,
  [VOTE_POST]: votePost,
});
