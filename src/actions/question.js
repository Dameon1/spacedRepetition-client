import { API_BASE_URL } from '../config'
import { normalizeResponseErrors } from './utils'

export const GET_QUESTION_SUCCESS = 'GET_QUESTION_SUCCESS'
export const getQuestionSuccess = (question, accuracy) => ({
  type: GET_QUESTION_SUCCESS,
  question,
  accuracy
})

export const GET_QUESTION_ERROR = 'GET_QUESTION_ERROR'
export const getQuestionError = error => ({
  type: GET_QUESTION_ERROR,
  error
})

export const GET_QUESTION_REQUEST = 'GET_QUESTION_REQUEST'
export const getQuestionRequest = () => ({
  type: GET_QUESTION_REQUEST
})

export const getQuestion = () => (dispatch, getState) => {
  dispatch(getQuestionRequest())
  return fetch(`${API_BASE_URL}/question`, {
    headers: {
      authorization: `Bearer ${getState().auth.authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({question, right, wrong}) => {
      const accuracy = Math.floor((right / (right + wrong)) * 100)
      dispatch(getQuestionSuccess(question, accuracy))
    })
    .catch(err => {
      dispatch(getQuestionError(err))
    })
}

export const SEND_USER_RESPONSE_REQUEST = 'SEND_USER_RESPONSE_REQUEST'
export const sendUserResponseRequest = () => ({
  type: SEND_USER_RESPONSE_REQUEST
})

export const SEND_USER_RESPONSE_SUCCESS = 'SEND_USER_RESPONSE_SUCCESS'
export const sendUserResponseSuccess = () => ({
  type: SEND_USER_RESPONSE_SUCCESS
})

export const SEND_USER_RESPONSE_ERROR = 'SEND_USER_RESPONSE_ERROR'
export const sendUserResponseError = error => ({
  type: SEND_USER_RESPONSE_ERROR,
  error
})

export const sendUserResponse = grade => (dispatch, getState) => {
  dispatch(sendUserResponseRequest())
  return fetch(`${API_BASE_URL}/question`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getState().auth.authToken}`
    },
    body: JSON.stringify({
      userResponse: grade
    })
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => {
      dispatch(sendUserResponseSuccess())
      if (res.status === 204) {
        return Promise.resolve('Correct')
      } else {
        return res.json()
      }
    })
    .catch(err => dispatch(sendUserResponseError(err)))
}

export const CLEAR_QUESTION = 'CLEAR_QUESTION'
export const clearQuestion = () => ({
  type: CLEAR_QUESTION
})