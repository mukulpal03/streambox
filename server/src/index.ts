import app from "./app";
import config from "./config/env";
import connectDB from "./libs/db";

connectDB().then(() => {
  app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}`);
  });
});
