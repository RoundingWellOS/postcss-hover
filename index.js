var postcss = require('postcss');

module.exports = postcss.plugin('postcss-hover', function () {
    return function (css) {
        css.walkRules(function (rule) {
            if (rule.selector.indexOf(':hover') !== -1) {
                var selectors = rule.selector.replace(/\r?\n|\r/g, ' ');
                selectors = selectors.split(',');
                if (selectors.length < 2) {
                    rule.remove();
                } else {
                    selectors = selectors.filter(function (sel) {
                        return sel.indexOf(':hover') === -1;
                    })
                    .map(function (sel) {
                        return sel.trim();
                    });
                    rule.selector = selectors.join(',');
                }
            }
        });
    };
});
