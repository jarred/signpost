"use strict";
const plugin = ({} = {}) => {
    return {
        postcssPlugin: "signpost",
        Rule(rule) {
            let name = rule.selector;
            let action = name.substring(1, 2);
            switch (action) {
                case "_":
                case "_":
                case "*":
                    name = name.replace(/\._/g, ".\\_");
                    name = name.replace(/\.-/g, ".\\-");
                    name = name.replace(/\.\*/g, ".\\*");
                    rule.selector = name;
                    break;
                default:
                    break;
            }
        },
    };
};
module.exports = plugin;
//# sourceMappingURL=index.js.map