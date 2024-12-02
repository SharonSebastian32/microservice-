const http = require("http");
const app = require("./app");
const connectDB = require("./config/db.connect");

const PORT = process.env.PORT;

const server = http.createServer(app);

connectDB()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Captain Service is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error starting the User Service:", err);
    process.exit(1);
  });
