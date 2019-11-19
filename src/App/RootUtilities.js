// Fetch Helper
export const fetchRequest = async (url, option = {}) => {
  const fetchedJSON = await fetch(url, option);
  const fetched = await fetchedJSON.json();
  return fetched;
};

// Reducer Helper
// Idea from https://redux.js.org/recipes/reducing-boilerplate#generating-reducers
export const createReducer = (initialState, handlers) => (state = initialState, action) => {
  if (handlers.hasOwnProperty(action.type)) return handlers[action.type](state, action);
  return state;
};
