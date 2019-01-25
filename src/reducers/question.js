import {
  GET_QUESTION_REQUEST,
  GET_QUESTION_SUCCESS,
  GET_QUESTION_ERROR,
  SEND_USER_RESPONSE_REQUEST,
  SEND_USER_RESPONSE_SUCCESS,
  SEND_USER_RESPONSE_ERROR,
  CLEAR_QUESTION
} from "../actions/question";

const initialState = {
  question: null,
  accuracy: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_QUESTION_REQUEST:
      return { ...state, loading: true, error: null };
    case GET_QUESTION_SUCCESS:
      return {
        ...state,
        loading: false,
        question: action.question,
        accuracy: action.accuracy
      };
    case GET_QUESTION_ERROR:
      return { ...state, loading: false, error: action.error };
    case SEND_USER_RESPONSE_REQUEST:
      return { ...state, loading: true, error: null };
    case SEND_USER_RESPONSE_SUCCESS:
      return { ...state, loading: false, question: null };
    case SEND_USER_RESPONSE_ERROR:
      return { ...state, loading: false, error: action.error };
    case CLEAR_QUESTION:
      return initialState;
    default:
      return state;
  }
};
