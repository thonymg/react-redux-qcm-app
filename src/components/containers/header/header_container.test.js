/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import header from './header_container';

const mockStore = configureMockStore();

describe('<Header />', () => {
  let store;

  beforeEach(() => {
    store = mockStore();
  });

  it('connects', () => {
    shallow(
      <Provider store={store}>
        <Header />
      </Provider>,
    );
  });
});
