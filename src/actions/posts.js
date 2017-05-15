import WPAPI from 'wpapi';
import config from '../config';

const wp = new WPAPI({
    endpoint: config.url,
    auth: true,
});

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';

const fetchPosts = () => {
    return new Promise((resolve, reject) => wp.posts()
        .then(data => resolve(data))
        .catch(err =>  reject(err))
    );
};

export const getPosts = () => dispatch => {
    dispatch({
        type: FETCH_POSTS_REQUEST,
    });
    fetchPosts().then(data => {
        dispatch({
            type: FETCH_POSTS_SUCCESS,
            posts: data,
        });
    }).catch(err => {
        dispatch({
            type: FETCH_POSTS_ERROR,
            error: err,
        });
    });
};
