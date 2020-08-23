import nodeResolvePlugin from "@rollup/plugin-node-resolve";
import dtsPlugin from "rollup-plugin-dts";

export default {
  input: "src/index.ts",
  output: {
    format: "esm",
    file: "dist/index.d.ts",
    exports: "named",
  },
  plugins: [
    nodeResolvePlugin({
      preferBuiltins: true,
      mainFields: ["types", "typings"],
      extensions: [".d.ts", ".ts"],
      customResolveOptions: {
        moduleDirectory: ["node_modules/@types", "node_modules"],
      },
    }),
    dtsPlugin(),
  ],
};
