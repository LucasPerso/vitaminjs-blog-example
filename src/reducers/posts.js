import * as types from '../actions/posts';

export default (state = {
    isFetching: false,
    posts: [],
}, action) => {
    switch (action.type) {
        case types.FETCH_POSTS_REQUEST:
            return {
                ...state,
                isFetching: true,
            };
        case types.FETCH_POSTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                posts: action.posts,
            };
        case types.FETCH_POSTS_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.error,
            };
        default:
            return state;
    }
};