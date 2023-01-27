// server.js is the entry point to our application, it is the first file that is executed when we run our application. It is responsible for creating the server and listening for requests. It is also responsible for setting up the middleware that will be used by the application. We will also import the router and use it to handle requests to the API.

import { protect } from "./middleware/auth.js"; // We are importing the protect middleware to protect routes that require authentication, middleware run before the route handlers
import express from "express";  // We are using express to create a server, express is a highly adopted framework for Node.js to build an API
import router from "./router.js"; // We are importing the router to handle requests to the API
import morgan from "morgan"; // We are using morgan to log requests to the API
import cors from "cors"; // We are using cors to allow cross-origin requests
import { getPosts, getPostsByUser } from "./handlers/post.js"; // We are importing the getPosts handler to handle requests to the API, similar to what we are doing in router.js
import { createNewUser, signIn } from "./handlers/user.js"; // We are importing the createNewUser handler to handle requests to the API,
import {
	handleInputErrors, // The handleInputErrors handles errors from the validation middleware
	signInValidation, // is a middleware that validates the request body for the signin route
	signUpValidation, // is a middleware that validates the request body for the signup route

} from "./middleware/validation.js"; // middleware/validation.js handles errors from the validation middleware


const app = express(); // We are using express to create a server, express is a highly adopted framework for Node.js to build an API

app.use(cors()); // We are using cors to allow cross-origin requests
app.use(morgan("dev")); // We are using morgan to log requests
app.use(express.json()); // We are using express to parse json
app.use(express.urlencoded({ extended: true })); // We are using express to parse urlencoded data

app.get("/", (req, res) => {  //app.get handles requests to the root route of the API and returns a json object with a message property that has the value "hello" and a status code of 200
console.log("We've got a request! on path: '/'");
	res.json({ message: "hello" });
	res.status(200); // status code of 200

});
app.use("/posts/:userId", getPostsByUser); // We are using the getPostsByUser handler to handle requests to the API, similar to what we are doing in router.js
app.use("/posts", getPosts); // We are using the getPosts handler to handle requests to the API
app.use("/api", protect, router); // Why is getPostsByUser not a part of the api? // 
app.post("/signin", [signInValidation, handleInputErrors], signIn); // We are using the signIn handler to handle requests to the API


app.use((err, req, res, next) => { // app.use is a middleware that handles errors, it takes 4 arguments, the error, the request, the response, and the next function
	if (err.type === "auth") {
		res.status(err.code || 401).json({ message: err.message });
	} else if (err.type === "input") {
		res.status(err.code || 400).json({ message: err.message });
	} else {
		res.status(err.code || 500).json({ message: err.message });
	}
});
export default app;
