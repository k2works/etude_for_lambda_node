import path from "path";

import { WDS_PORT } from "./src/app/shared/config";
import { isProd } from "./src/app/shared/util";

export default {
    entry: [
        "./src/app/client",
    ],
    output: {
        filename: "app/bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: isProd ? "/static/app/" : `http://localhost:${WDS_PORT}/dist/`,
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, use: "babel-loader", exclude: /node_modules/ },
        ],
    },
    devtool: isProd ? false : "source-map",
    resolve: {
        extensions: [".js", ".jsx"],
    },
    devServer: {
        port: WDS_PORT,
    },
};
