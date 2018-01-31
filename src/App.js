import React, { Component } from 'react';

import Header from './components/containers/header';
import QuestionForm from './components/containers/questionForm';

const App = () => {
  return (
    <div className="container">
      <div className="columns">
        <div className="column col-12">
          <div className="container">
            <Header />
            <QuestionForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
