import Mux from "@mux/mux-node";
import config from "../config/env";

const mux = new Mux({
  tokenId: config.MUX_TOKEN_ID,
  tokenSecret: config.MUX_SECRET_KEY,
});

export default mux;
