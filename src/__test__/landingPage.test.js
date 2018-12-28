import React from 'react';
import { shallow } from 'enzyme';
const chai = require('chai');
const expect = chai.expect;
import {LandingPage} from '../components/landing-page';
import { props, state } from './testUtils';
import { mapStateToProps } from '../components/app';

describe('<LandingPage />', () => {    
  it('Shallow Renders without crashing', () => {
    let wrapper = shallow(<LandingPage {...props}/>);
    const item = wrapper.find('[className="landing-page"]');
    
    expect(wrapper.find('[className="landing-page"]').children()).to.have.lengthOf(2);
    expect(item.childAt(0).text()).to.equal('<Connect(Card) />');
    expect(item.childAt(1).text()).to.equal(`<Link />`);
     });
});

describe('Map state to props for <LandingPage />', () => {
  it('maps state to props', () => {
      expect(mapStateToProps(state).loggedIn).to.equal(true);
      expect(mapStateToProps(state).notdefined).to.equal(undefined);
  });
});