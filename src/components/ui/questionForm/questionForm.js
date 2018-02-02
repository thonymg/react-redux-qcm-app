import React from 'react';
import PropTypes from 'prop-types';

const submitedData = ev => {
  const input = {
    question: ev.target.elements.question.value,
    goodResponse: ev.target.elements.goodResponse.value,
    badResponse1: ev.target.elements.badResponse1.value,
    badResponse2: ev.target.elements.badResponse2.value,
    badResponseD: ev.target.elements.badResponseD.value,
  };

  return input;
};

const QuestionForm = ({
  handleSubmit,
  isVisible,
  onShowQuestionClick,
  onHideQuestionClick,
}) => {
  if (isVisible) {
    return (
      <div className="columns">
        <div className="column col-6 col-mx-auto">
          <h3>Créer votre question</h3>
          <form
            onSubmit={e => {
              e.preventDefault();
              handleSubmit(submitedData(e));
              onHideQuestionClick();
            }}>
            <div className="form-group">
              <label className="form-label">Quelle est votre question ? </label>
              <textarea
                className="form-input"
                rows={5}
                cols={5}
                placeholder="Quelle est le nom de la plus grande série de tout les temps ?"
                name="question"
              />
            </div>

            <div className="form-group">
              <label className="form-label">la bonne réponse d'abord</label>
              <div className="has-icon-left">
                <input
                  type="text"
                  className="form-input is-success"
                  placeholder="Breaking Bad"
                  name="goodResponse"
                />
                <i className="form-icon icon icon-check" />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">une mauvaise réponse</label>
              <div className="has-icon-left">
                <input
                  type="text"
                  className="form-input"
                  placeholder="Viking"
                  name="badResponse1"
                />
                <i className="form-icon icon icon-cross" />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">une autre mauvaise réponse</label>
              <div className="has-icon-left">
                <input
                  type="text"
                  className="form-input"
                  placeholder="Game of Throne"
                  name="badResponse2"
                />
                <i className="form-icon icon icon-cross" />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">la réponse D</label>
              <div className="has-icon-left">
                <input
                  type="text"
                  className="form-input"
                  placeholder="la réponse D"
                  name="badResponseD"
                />
                <i className="form-icon icon icon-cross" />
              </div>
            </div>
            <div className="text-right">
              <button
                className="btn btn-link"
                type="button"
                onClick={() => {
                  onHideQuestionClick();
                }}>
                Annuler
              </button>
              <button
                className="btn btn-success"
                type="submit"
                onClick={() => {
                  onHideQuestionClick();
                }}>
                Valider
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  return <div />;
};

QuestionForm.propTypes = {};

export default QuestionForm;
