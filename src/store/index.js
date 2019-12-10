import { createStore } from 'redux';
import rootReducer from './modules/rootReducer';

const enchancer =
  process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : null;

const store = createStore(rootReducer, enchancer);

export default store;
