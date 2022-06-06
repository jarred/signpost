import type { Plugin, Rule } from "postcss";

interface Options {}
const plugin = ({}: Options = {}): Plugin => {
  return {
    postcssPlugin: "bubble",
    Rule(rule: Rule) {
      let name = rule.selector as string;
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

export = plugin;
