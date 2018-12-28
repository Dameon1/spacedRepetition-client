import React from 'react';
import { shallow, mount } from 'enzyme';
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
import {Input} from '../components/input';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store, props, state } from './testUtils';
import { mapStateToProps } from '../components/input';


describe('<Input />', () => {    
  it('Shallow be true', () => {
    expect(true).to.equal(true);
     });
    });