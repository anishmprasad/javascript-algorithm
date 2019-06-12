const SockMerchant = require('./index');

test('SockMerchantcopy', () => {
	expect(SockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])).toBe(3);
});
