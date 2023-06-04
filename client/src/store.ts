import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(combineReducers({

   }),
   composeWithDevTools()
   );

export default store;

export type RootState = ReturnType<typeof store.getState>;
