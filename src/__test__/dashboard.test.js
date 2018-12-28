import React from 'react';
import { shallow, mount } from 'enzyme';
import { Dashboard, mapStateToProps } from '../components/dashboard';
import { props, state } from './testUtils';
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
chai.use(chaiHttp);

describe('<Dashboard />', () => {    
  it('Shallow Renders without crashing', () => {
    shallow(<Dashboard {...props}/>);
     });
});

describe('Map state to props for <Dashboard />', () => {
    it('maps state to props', () => {
        expect(mapStateToProps(state).question).to.be.a('string');
        expect(mapStateToProps(state).question).to.equal('This is a test question');
        expect(mapStateToProps(state).undefined).to.equal(undefined);
    });
});