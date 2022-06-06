import type { Plugin, Rule } from "postcss";

interface Options {}
const plugin = ({}: Options = {}): Plugin => {
  return {
    postcssPlugin: "signpost",
    Rule(rule: Rule) {
      let name = rule.selector as string;
      let action = name.substring(1, 2);
      /*
        TODO: figure out how to best handle escaping in classes that do not begin with an action.
        I guess just with a regex match? 
        e.g. a._btn or body.legacy ._card
      */
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
