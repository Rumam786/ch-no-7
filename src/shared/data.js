import * as axios from 'axios';
import { format } from 'date-fns';
import { inputDateFormat } from './constants';
import { API } from './config';

const getHeros = async function() {
  try {
    const response = axios.get(`${API}/heroes.json`);
    let data = parseList(response);
    const heroes = data.map(h => {
      h.originDate = format(h.originDate, inputDateFormat);
      return h;
    });
    return heroes;
  } catch (error) {
    console.error('this is error message');
    return [];
  }
};
const parseList = response => {
  if (response.status != 200) throw Error(response.message);
  if (!response.data) return [];
  let list = response.data;
  if (typeof list != 'object') {
    list = [];
  }
  return list;
};

export const data = {
  getHeros,
};
