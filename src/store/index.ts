import { createStore, createLogger } from 'vuex';


import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import state from './state';

export default createStore({
  plugins: process.env.NODE_ENV === 'development' ? [createLogger()] : [],
  state,
  getters,
  actions,
  mutations
})
