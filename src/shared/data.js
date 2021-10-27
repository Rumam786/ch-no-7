 import axios from 'axios';

import { format } from 'date-fns';
import { inputDateFormat } from './constants';
import axios from 'axios';

const getHeroes = async function() {
  const response = await axios.get('api/heroes.json');
  const heroes = response.data.map(h =>{
    h.originaDate = format(h.originaDate, inputDateFormat);
    return h;
  });
  return heroes;
};
export const data = {
  getHeroes,
};
