/* eslint-disable import/no-extraneous-dependencies */
require('babel-register')();

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.should();
chai.use(chaiAsPromised);

global.expect = chai.expect;
global.chai = chai;
