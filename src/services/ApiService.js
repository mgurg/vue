import axios from 'axios';
import qs from 'qs';

let url = process.env.VUE_APP_URL;

const apiClient = axios.create({
  baseURL: url,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getEvents() {
    return apiClient.get('/events');
  },

  fetchNames() {
    return [];
  },
  fetchFav(details) {
    let params = qs.stringify({ ids: details }, { arrayFormat: 'repeat' });
    let url = '/idd/get_fav_names?'+params;

    return apiClient.get(url);
  },
  // Details View
  fetchDetails(nameId) {
    let url = '/idd/get_name_details?id=' + nameId
    return apiClient.get(url);
    // return [];
  },
  fetchDetailsbyName(name) {
    let url = '/idd/get_name_details?name=' + name
    return apiClient.get(url);
  },
  fetchSimilar(gender, name) {
    let url = '/idd/get_similar_names?gender=' + gender + '&name=' + name;
    return apiClient.get(url);
  },
};
