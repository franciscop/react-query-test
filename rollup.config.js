import commonjs from "rollup-plugin-commonjs";
import nodeResolve from "rollup-plugin-node-resolve";
import json from "rollup-plugin-json";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.js",
  output: {
    file: "index.min.js",
    name: "$",
    format: "umd"
  },
  external: ["react-jsdom", "react-dom/test-utils"],
  plugins: [
    nodeResolve({ preferBuiltins: true }),
    commonjs({
      namedExports: {
        "react-dom/test-utils": ["act"]
      }
    }),
    json(),
    terser()
  ]
};
