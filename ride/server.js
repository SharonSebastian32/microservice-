const http = require("http");
const app = require("./app");
const connectDB = require("../ride/db/db.connect");

const PORT = process.env.PORT;

const server = http.createServer(app);

connectDB()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Ride Service is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error starting the User Service:", err);
    process.exit(1);
  });
