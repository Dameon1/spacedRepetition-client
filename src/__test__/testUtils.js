import { initialState as questionState } from '../reducers/question';
import { initialState as authState } from '../reducers/auth';

 export const testObj = {  
  id:47891,
  image:'https://spoonacular.com/recipeImages/47891-312x231.jpg',
  imageType:'jpg',
  index:4,
  likes:0,
  missedIngredientCount:0,
  title:'Apple Tart',
  usedIngredientCount:3
 };

 export const store = {
        
  state: {   
    auth: {
      ...authState
   }, 
   authToken: true, // authToken !== null does not mean it has been validated
  currentUser: null,
  loading: false,
  error: null},
    
  getState: jest.fn(),
  subscribe: jest.fn(),
  dispatch: jest.fn(),
};
export const state = {
  auth: {
    authToken: '1234asdf', // authToken !== null does not mean it has been validated
    currentUser: 'ExampleUser',
    loading: false,
    error: null
  },
  question: {
    question: "This is a test question",
    accuracy: 100,
    loading: false,
    error: ""
     
  },
}
export const configs = {
  default: true,
  label: 'My Label',
  element: 'myElement',
  apiRecipes:[12232,1221]
};

export const dispatch = jest.fn();

export const props = {
    apiRecipes:configs,
    dispatch,
  }