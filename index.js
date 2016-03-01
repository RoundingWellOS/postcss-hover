var postcss = require('postcss');

module.exports = postcss.plugin('postcss-focus', function () {
    return function (css) {
        css.walkRules(function (rule) {
            if (rule.selector.indexOf(':hover') !== -1) {
                rule.remove();
            }
        });
    };
});
