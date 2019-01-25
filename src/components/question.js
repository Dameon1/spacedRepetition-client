import React from "react";
import { connect } from "react-redux";
import { sendUserResponse, getQuestion } from "../actions/question";
import "./styles/question.css";

export class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      answer: null
    };
  }

  submit = e => {
    e.preventDefault();
    if (this.state.userInput.trim() === "") return;
    this.props
      .dispatch(sendUserResponse(this.state.userInput.trim()))
      .then(data => {
        this.setState({ userInput: "", answer: data });
      });
  };

  nextQuestion = e => {
    e.preventDefault();
    this.setState({ answer: null }, () => this.props.dispatch(getQuestion()));
  };

  render() {
    if (this.props.error && this.props.error.message) {
      console.log(this.props.error);
      return <p>{this.props.error.message}</p>;
    } else if (!this.props.question && !this.state.answer) return <div />;
    else if (this.state.answer) {
      return (
        <div className="question-answer">
          <h2>{this.state.answer}</h2>
          <form
            onSubmit={e => {
              this.nextQuestion(e);
            }}
          >
            <button type="submit">Next Question</button>
          </form>
        </div>
      );
    } else {
      return (
        <div className="question">
          <h2 className="question-text">{this.props.question}</h2>
          <form
            className="question-user-response"
            onSubmit={e => this.submit(e)}
          >
            <input
              aria-label="response"
              type="text"
              value={this.state.userInput}
              onChange={e => this.setState({ userInput: e.target.value })}
            />
            <button type="submit">Check</button>
          </form>
        </div>
      );
    }
  }
}

export const mapStateToProps = state => ({
  question: state.question.question,
  error: state.question.error
});

export default connect(mapStateToProps)(Question);
