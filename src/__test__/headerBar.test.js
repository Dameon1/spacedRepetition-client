import React from 'react';
import { shallow } from 'enzyme';
import HeaderBar from '../components/header-bar';
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
chai.use(chaiHttp);

describe('<HeaderBar />', () => {       
    it('Renders without crashing', () => {
        shallow(<HeaderBar />);
    });
});

describe('<HeaderBar />', () => {       
    it('Renders without correct title', () => {
      const wrapper = shallow(<HeaderBar />)
      const item = wrapper.find('[className="header-bar"]');
      expect(item.text()).to.contain('SPANISH FLASH')
    });
});