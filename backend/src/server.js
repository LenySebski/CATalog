import { protect } from "./middleware/auth.js";
import express from "express";
import router from "./router.js";
import morgan from "morgan";
import cors from "cors";
import { getPosts, getPostsByUser } from "./handlers/post.js";
import { createNewUser, signIn } from "./handlers/user.js";
import {
	handleInputErrors,
	signInValidation,
	signUpValidation,
} from "./middleware/validation.js";

const app = express();

const corsOptions = {
	origin: "https://cors-testing-pvo8.onrender.com",
	optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
	express.static("./", {
		setHeaders: function (res) {
			res.set("Content-Security-Policy", "default-src 'self'");
		},
	})
);

app.get("/", (req, res) => {
	console.log("We've got a request! on path: '/'");
	res.json({ message: "hello" });
	res.status(200);
});
app.use("/posts/:userId", getPostsByUser);
app.use("/posts", getPosts);
app.use("/api", protect, router);
app.post("/signup", [signUpValidation, handleInputErrors], createNewUser);
app.post("/signin", [signInValidation, handleInputErrors], signIn);

app.use((err, req, res, next) => {
	if (err.type === "auth") {
		res.status(err.code || 401).json({ message: err.message });
	} else if (err.type === "input") {
		res.status(err.code || 400).json({ message: err.message });
	} else {
		res.status(err.code || 500).json({ message: err.message });
	}
});
export default app;
