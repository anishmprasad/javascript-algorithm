const SockMerchant = require('./index');

console.log(SockMerchant);

test('SockMerchant', () => {
	expect(SockMerchant()).toBe('simple node script');
});
