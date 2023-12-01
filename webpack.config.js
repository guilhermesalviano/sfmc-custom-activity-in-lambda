const discountCodeExample = require('./src/modules/discount-code/webpack.config');
const splitExample = require('./src/modules/discount-redemption-split/webpack.config');

module.exports = function(env, argv) {
    return [
        discountCodeExample(env, argv),
        splitExample(env, argv),
    ];
};
