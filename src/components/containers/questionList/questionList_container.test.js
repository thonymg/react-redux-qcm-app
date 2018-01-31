/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import questionList from './questionList_container';

const mockStore = configureMockStore();

describe('<QuestionList />', () => {
  let store;

  beforeEach(() => {
    store = mockStore();
  });

  it('connects', () => {
    shallow(
      <Provider store={store}>
        <QuestionList />
      </Provider>,
    );
  });
});
