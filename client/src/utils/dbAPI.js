import axios from 'axios';


export default {
  getSpots: () => {
    return axios.get('/db/spots');
  },
  getChosenSpot: (_id) => {
    return axios.get(`/db/spots/${_id}`);
  },
  newSpots: (newSpots) => {
    return axios.post('db/spots', newSpots);
  }
}