import React from 'react';
import { shallow, mount } from 'enzyme';
import { Question, mapStateToProps } from '../components/question';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store, props, state } from './testUtils';
const chai = require('chai');
const expect = chai.expect;

describe('<Question />', () => {    
  it('Shallow Renders without crashing', () => {
    shallow(<Question {...props}/>);
  });

  it('Deep Renders the <Question /> component without crashing', () => {
    const wrapper =  mount(
            <Provider store={store}>
              <Router>                
                <Question />
              </Router>                
            </Provider>
            );
  });   
});

describe('Map state to props for Question', () => {
    it('maps state to props', () => {
        expect(mapStateToProps(state).question).to.equal('This is a test question');
        expect(mapStateToProps(state).error).to.equal('This is a test error');
        expect(mapStateToProps(state).notdefined).to.equal(undefined);
    });
});