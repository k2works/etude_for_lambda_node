import compression from "compression";
import express from "express";

import { APP_NAME, STATIC_PATH } from "../shared/config";
import renderApp from "./render-app";

const app = express();

app.use(compression());
app.use(STATIC_PATH, express.static("app"));
app.use(STATIC_PATH, express.static("public"));

app.get("/", (req, res) => {
    res.send(renderApp(APP_NAME));
});

export default app;
