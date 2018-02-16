import { createStore } from 'redux';
import tableApp from './reducers';

const store = createStore(tableApp);

export default store;