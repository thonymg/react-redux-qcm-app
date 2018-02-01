import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
// import { reducer as formReducer } from 'redux-form';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import questions from './questions/questions_reducer';
import ui from './ui/ui_reducer';

const reducers = combineReducers({
  questions,
  ui,
});

const store = createStore(
  reducers,
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
