/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import responseField from './responseFields_container';

const mockStore = configureMockStore();

describe('<ResponseField />', () => {
  let store;

  beforeEach(() => {
    store = mockStore();
  });

  it('connects', () => {
    shallow(
      <Provider store={store}>
        <ResponseField />
      </Provider>,
    );
  });
});
