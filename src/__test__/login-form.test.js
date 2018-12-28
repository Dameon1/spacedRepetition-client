import React from 'react';
import { shallow, mount } from 'enzyme';
import  LoginForm   from '../components/login-form';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store, props } from './testUtils';

describe('<LoginForm />', () => {    
  it('Shallow Renders without crashing', () => {
    shallow(<LoginForm {...props}/>);
     });

  it('Deep Renders the <LoginForm /> component without crashing', () => {
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