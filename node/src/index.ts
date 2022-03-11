import "./pre-start"; // Must be the first import
import app from "@server";
import logger from "@shared/Logger";
import { write } from "@/services/write.service"
import { read } from "./services/read.service";

const PORT = Number(process.env.PORT || 3000);

app.listen(PORT, () => {
  write()
  logger.info(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
