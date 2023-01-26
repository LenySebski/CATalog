import { Router } from "express";
import { body } from "express-validator";
import {
	checkIfEditable,
	createPost,
	deletePost,
	getPost,
	updatePost,
} from "./handlers/post.js";
import {
	handleInputErrors,
	createPostValidation,
} from "./middleware/validation.js";
const router = Router();

/**Get/Update User */

router.get("/users", () => {});
router.post("/user", () => {});
router.get("/user/:id", () => {});
router.put("/user/:id", () => {});
router.delete("/user/:id", () => {});

/**Get/Update Post */
router.post("/post", [createPostValidation, handleInputErrors], createPost);
router.get("/post/:postId", getPost);
router.put(
	"/post/:postId",
	[createPostValidation, handleInputErrors, checkIfEditable],
	updatePost
);
router.delete("/post/:postId", checkIfEditable, deletePost);

export default router;
