import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import {
  questionsReducer,
  fetchingDataReducer,
} from './questions/questions_reducer';
import ui from './ui/ui_reducer';

const reducers = combineReducers({
  questions: questionsReducer,
  fetchingData: fetchingDataReducer,
  ui,
});

function configureStore(initialState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // options like actionSanitizer, stateSanitizer
      })
    : compose;

  const enhancer = composeEnhancers(applyMiddleware(thunk));

  return createStore(reducers, enhancer);
}

const store = configureStore();

export default store;
