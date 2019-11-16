// Internal Dependencies
import { createReducer } from '../../App/RootUtilities';
import {
  FETCH_POSTS,
} from '../../App/ActionTypes';

const INITIAL_STATE = {
  fetchedPosts: [],
};

const fetchPosts = (state, action) => ({
  ...state,
  fetchedPosts: action.fetchedPosts,
});

export default createReducer(INITIAL_STATE, {
  [FETCH_POSTS]: fetchPosts,
});
