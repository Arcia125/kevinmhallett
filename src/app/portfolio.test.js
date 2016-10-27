import React from 'react';
import chai, { expect } from 'chai';
import {renderIntoDocument} from 'react-addons-test-utils';
import Portfolio from './portfolio.js';


describe('src/portfolio', () => {
	it('should render', () => {
		const item = renderIntoDocument(
			<Portfolio />
			);
		// Assertions
		expect(item).to.exist;
	});
});