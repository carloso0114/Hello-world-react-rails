import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const GET_GREETINGS_REQUEST = 'GET_GREETINGS_REQUEST';
const GET_GREETINGS_SUCCESS = 'GET_GREETINGS_SUCCESS';

function getGreetings() {
  return (dispatch) => {
    dispatch({ type: GET_GREETINGS_REQUEST });
    return fetch('v1/greetings.json')
      .then((response) => response.json())
      .then((json) => dispatch(getGreetingsSuccess(json)))
      .catch((error) => error);
  };
};

function getGreetingsSuccess(json) {
  return {
    type: GET_GREETINGS_SUCCESS,
    json
  };
};

class Greeting extends React.Component {
  componentDidMount() {
    this.props.getGreetings()
  }
  render () {
    const { greetings } = this.props;
    return (
      <React.Fragment>
        <h1>{ greetings[0].message }</h1>
      </React.Fragment>
    );
  }
}
const structuredSelector = createStructuredSelector({
  greetings: state => state.greetings
});

const mapDispatchToProps = { getGreetings };

export default connect(structuredSelector, mapDispatchToProps)(Greeting);