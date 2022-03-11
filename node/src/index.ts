import "./pre-start"; // Must be the first import
import app from "@server";
import logger from "@shared/Logger";
import mongoose from 'mongoose';

const PORT = Number(process.env.PORT || 3000);

mongoose
  .connect(
    'mongodb+srv://abroad:Aa123456@abroadtracker.36bs6.mongodb.net/AbroadTracker?retryWrites=true&w=majority',
  )
  .then(() => {
    app.listen(PORT, () => {
      logger.info(`⚡️[server]: Server is running at https://localhost:${PORT}`);
    });
  });

