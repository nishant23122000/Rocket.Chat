/* eslint-env mocha */
import { expect } from 'chai';

import { sortAppsByAlphabeticalOrInverseOrder } from '../../../../../../../client/views/admin/apps/helpers/sortAppsByAlphabeticalOrInverseOrder';

describe('sortAppsByAlphabeticalOrder', () => {
	it('should return 0 if the words are the equivalent', () => {
		const firstWord = 'Alfa';
		const secondWord = 'Alfa';

		const result = sortAppsByAlphabeticalOrInverseOrder(firstWord, secondWord);

		expect(result).to.be.equal(0);
	});
});
