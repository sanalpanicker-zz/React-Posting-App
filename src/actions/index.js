import CONST from '../utilities/constants';
import $ from 'axios';

export function fetchPosts() {
    const request = $.get(`${CONST.ROOT_URL}/posts${CONST.API_KEY}`);
    return {
        type: CONST.FETCH_POST,
        payload: request
    }
}

export function createPost(values, callback) {
    const request = $.post(`${CONST.ROOT_URL}/posts${CONST.API_KEY}`, values).then((data) => {console.log(data);callback()});
    return {
        type: CONST.CREATE_POST,
        payload: request
    }
}