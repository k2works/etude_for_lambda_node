import app from "./app";
import { isProd } from "../shared/util";
import { WEB_PORT } from "../shared/config";

app.listen(WEB_PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server running on port ${WEB_PORT} ${isProd ? "(production)" :
        "(development).\nKeep \"npm run dev:wds\" running in an other terminal"}.`);
});
