import * as dotenv from "dotenv";
dotenv.config();

import app from "./server.js";

app.listen(5002, () => {
	console.log("server listening on http://localhost:5002");
});
