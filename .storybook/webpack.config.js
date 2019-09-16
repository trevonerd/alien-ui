const path = require('path');

const pathToInlineSvg = path.resolve(__dirname, '../src/icons/svg/');

module.exports = async ({ config }) => {
    const rules = config.module.rules;
    const fileLoaderRule = rules.find(rule => rule.test.test('.svg'));
    fileLoaderRule.exclude = pathToInlineSvg;

    rules.push({
        test: /\.svg$/,
        include: pathToInlineSvg,
        use: ['@svgr/webpack']
    });

    return config;
};
