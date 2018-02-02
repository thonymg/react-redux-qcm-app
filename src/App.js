import React from 'react';

import Header from './components/containers/header';
import QuestionForm from './components/containers/questionForm';
import QuestionList from './components/containers/questionList';
import ResponseField from './components/containers/responseFields';

const App =props => {
  return (
    <div className="container">
      <div className="columns">
        <div className="column col-12">
          <div className="container">
            <Header />
             <ResponseField />
            <QuestionForm />
            <QuestionList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
