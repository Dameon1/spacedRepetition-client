import { initialState as questionState } from '../reducers/question';
import { initialState as authState } from '../reducers/auth';

export const store = {        
  state: {   
    auth: {
      ...authState
    },
    question : {
      ...questionState
    }, 
    authToken: true, // authToken !== null does not mean it has been validated
    currentUser: null,
    loading: false,
    error: null
  },    
  getState: jest.fn(),
  subscribe: jest.fn(),
  dispatch: jest.fn(),
};

export const state = {
  auth: {
    authToken: '1234asdf', // authToken !== null does not mean it has been validated
    currentUser: 'ExampleUser',  //returns true for LOGGED IN
    loading: false,
    error: null
  },
  question: {
    question: "This is a test question",
    accuracy: 100,
    loading: false,
    error: "This is a test error"
  },
};

export const dispatch = jest.fn();

export const props = {
    loggedIn: false,
    dispatch,
};