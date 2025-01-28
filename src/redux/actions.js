import {
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE,
  } from './actionTypes';
  
  // Action to start fetching posts
  export const fetchPostsRequest = () => ({
    type: FETCH_POSTS_REQUEST,
  });
  
  // Action for successful data fetch
  export const fetchPostsSuccess = (posts) => ({
    type: FETCH_POSTS_SUCCESS,
    payload: posts,
  });
  
  // Action for failed data fetch
  export const fetchPostsFailure = (error) => ({
    type: FETCH_POSTS_FAILURE,
    payload: error,
  });
  
  // Thunk to fetch posts from the API
  export const fetchPosts = () => {
    return async (dispatch) => {
      dispatch(fetchPostsRequest());
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        dispatch(fetchPostsSuccess(data));
      } catch (error) {
        dispatch(fetchPostsFailure(error.message));
      }
    };
  };
  