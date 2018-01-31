/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import questionForm from './questionForm_container';

const mockStore = configureMockStore();

describe('<QuestionForm />', () => {
  let store;

  beforeEach(() => {
    store = mockStore();
  });

  it('connects', () => {
    shallow(
      <Provider store={store}>
        <QuestionForm />
      </Provider>,
    );
  });
});
