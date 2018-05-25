import compression from "compression";
import express from "express";

import routing from "./routing";
import { STATIC_PATH } from "../shared/config";

const app = express();

app.use(compression());
app.use(STATIC_PATH, express.static("app"));
app.use(STATIC_PATH, express.static("public"));

routing(app);

export default app;
