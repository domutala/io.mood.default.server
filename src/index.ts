import * as dotenv from "dotenv";

import * as data from "./data";
import * as server from "./server";
import * as controllers from "./controllers";

(async () => {
  try {
    if (process.env.NODE_ENV !== "production") dotenv.config();

    await data.init();
    const _server = await server.init();
    await controllers.init(_server.app);
  } catch (error) {
    console.log(error);
  }
})();
