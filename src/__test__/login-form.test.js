import React from 'react';
import { shallow, mount } from 'enzyme';
const chai = require('chai');
const expect = chai.expect;
import  LoginForm  from '../components/login-form';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store, props, state } from './testUtils';
import { mapStateToProps } from '../components/app';

describe('<LoginForm />', () => {    
  it('Shallow Renders without crashing', () => {
    shallow(<LoginForm {...props}/>);
     });

  it('Deep Renders the App component without crashing', () => {
    const handleSubmit = jest.fn();

    const wrapper =  mount(
            <Provider store={store}>
              <Router>                
                <LoginForm handleSubmit={handleSubmit}/>
              </Router>                
            </Provider>
            );
    
  });   
});