import React from 'react';
import { shallow, mount } from 'enzyme';
const chai = require('chai');
const expect = chai.expect;
import { Card }from '../components/card';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store, state } from './testUtils';
import { mapStateToProps } from '../components/card';
import {Question} from '../components/question';

describe('<Card />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Card Child={Question}/>);
  });
});

describe('<Card />', () => {
  it('renders without crashing', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Router>                
        <Card Child={Question}/>
        </Router>                
      </Provider>
      );
  });
});

describe('Map state to props for Card', () => {
  it('maps state to props', () => {
      expect(mapStateToProps(state).loggedIn).to.equal(true);
      expect(mapStateToProps(state).user).to.equal('ExampleUser');
      expect(mapStateToProps(state).accuracy).to.equal(100);
      expect(mapStateToProps(state).undefined).to.equal(undefined);
  });
});