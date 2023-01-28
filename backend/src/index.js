// dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

+import * as dotenv from "dotenv";
dotenv.config();

import app from "./server.js";

app.listen(5002, () => {
	console.log("server listening on http://localhost:5002"); // port 5002 is the port that the server will listen on
});
