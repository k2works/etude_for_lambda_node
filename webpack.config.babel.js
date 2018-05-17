import path from "path";
import webpack from "webpack";

import { WDS_PORT } from "./src/app/shared/config";
import { isProd } from "./src/app/shared/util";

export default {
    entry: [
        "react-hot-loader/patch",
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
        hot: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],
};
