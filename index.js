var postcss = require('postcss');

module.exports = postcss.plugin('postcss-focus', function () {
    return function (css) {
        css.walkRules(function (rule) {
            if (rule.selector.indexOf(':hover') !== -1) {
                var selectors = rule.selector.replace(/\r?\n|\r/g, ' ');
                selectors = selectors.split(', ');
                if (selectors.length < 2) {
                    rule.remove();
                } else {
                    selectors.forEach(function (sel, index) {
                        selectors[index] = sel.trim();
                        if (sel.indexOf(':hover') !== -1) {
                            selectors.splice(index, 1);
                        }
                    });
                    selectors.concat(', ');
                    rule.selector = selectors;
                }
            }
        });
    };
});
