import {isProd} from "./util";

export const WEB_PORT = process.env.PORT || 8000;
export const STATIC_PATH = isProd ? "https://s3.amazonaws.com/etude-for-lambda-node-aws-serverless-express/assets" : "/static";
export const APP_NAME = "Hello App";

export const WDS_PORT = 7000;

export const APP_CONTAINER_CLASS = "js-app";
export const APP_CONTAINER_SELECTOR = `.${APP_CONTAINER_CLASS}`;

export const JSS_SSR_CLASS = "jss-ssr";
export const JSS_SSR_SELECTOR = `.${JSS_SSR_CLASS}`;
