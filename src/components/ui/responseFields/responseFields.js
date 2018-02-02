import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const submitedData = (ev, questionId) => {
  const input = {
    response: ev.target.elements.response.value,
    questionId,
  };

  if (!ev.target.elements.response.value) return null;
  return input;
};

const ResponseFields = ({
  question,
  handleSubmit,
  isVisible,
  hideResponse,
}) => {
  if (question && isVisible === true) {
    return (
      <div>
        <div className="columns">
          <div className="column col-6 col-mx-auto">
            <h3 className="">
              Question <strong>#{question.id}: </strong> {question.question}
            </h3>
            <div>
              <form
                onSubmit={e => {
                  e.preventDefault();
                  if (!submitedData(e, question.id)) {
                    return false;
                  } else {
                    console.log(e, 'response Fied');
                    handleSubmit(submitedData(e, question.id));
                  }
                }}>
                <div className="form-group">
                  <ul>
                    {_.map(question.responses, (response, index) => {
                      return (
                        <li key={index}>
                          <label className="form-radio">
                            <input type="radio" name="response" value={index} />
                            <i className="form-icon" /> {response.response}
                          </label>
                          <br />
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="text-right">
                  <button
                    className="btn btn-link"
                    onClick={() => hideResponse()}>
                    Annuler
                  </button>
                  <button className="btn btn-success" type="submit">
                    Valider
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <div />;
};

ResponseFields.propTypes = {
  question: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
  hideResponse: PropTypes.func.isRequired,
};

export default ResponseFields;
