import React from "react";
import "./Joke.css";

class Joke extends React.Component {
  constructor(props) {
    super(props);
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
    this.toggleLock = this.toggleLock.bind(this);
  }
  upVote() {
    this.props.vote(this.props.id, +1);
  }

  downVote() {
    this.props.vote(this.props.id, -1);
  }

  toggleLock() {
    this.props.toggleLock(this.props.id);
  }

  render() {
    return (
      <div className="Joke">
        <div className="Joke-votearea">
          <button onClick={upVote}>
            <i className="fas fa-thumbs-up" />
          </button>

          <button onClick={downVote}>
            <i className="fas fa-thumbs-down" />
          </button>

          {votes}
        </div>

        <div className="Joke-text">{text}</div>
      </div>
    );
  }
}

export default Joke;
