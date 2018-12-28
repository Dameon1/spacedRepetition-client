import React from 'react';
import { shallow, mount } from 'enzyme';
const chai = require('chai');
const expect = chai.expect;
import { App } from '../components/app';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store, props, state } from './testUtils';
import { mapStateToProps } from '../components/app';

describe('<App />', () => {    
  it('Shallow Renders without crashing', () => {
    shallow(<App {...props}/>);
     });

  it('Deep Renders the App component without crashing', () => {
    const wrapper =  mount(
            <Provider store={store}>
              <Router>                
                <App />
              </Router>                
            </Provider>
            );
    const item = wrapper.find('[className="header-bar"]');
    expect(item.text()).to.contain('SPANISH FLASH')
  });   
});

describe('Map state to props for App', () => {
    it('maps state to props', () => {
        expect(mapStateToProps(state).hasAuthToken).to.equal(true);
        expect(mapStateToProps(state).loggedIn).to.equal(true);
        expect(mapStateToProps(state).notdefined).to.equal(undefined);

    });
});