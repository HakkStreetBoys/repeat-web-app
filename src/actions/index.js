import axios from 'axios';
//
// export const FETCH_ITEMS = 'FETCH_ITEMS';
//
// // const ROOT_URL = 'http://pebbleplates.com/repeat-menu/wp-json/wp/v2/menu';
// // const FOOD_URL = '?menu_cat=8';
//
// const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
// const API_KEY = '?key=lkajdsfapipwietpw';
//
// export function fetchItems() {
//   const request = axios.get(`${ROOT_URL}/posts${API_KEY}`).then(function(res) {
//     console.log(res.data);
//   });
//   // console.log(request);
//   return {
//     type: FETCH_ITEMS,
//     payload: request
//   };
// }


export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';

// const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const ROOT_URL = 'http://pebbleplates.com/repeat-menu/wp-json/wp/v2/menu';
const FOOD_URL = '?menu_cat=8';
const DRINK_URL = '?menu_cat=9';

export function fetchPosts() {
  // const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  const request = axios.get(`${ROOT_URL}${FOOD_URL}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/${id}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}
