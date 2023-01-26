import { Router } from "express";
import {
	getAllUsers,
	isUserEditable,
	updateUser,
	deleteUser,
} from "./handlers/user.js";
import { isAdmin } from "./middleware/auth.js";
import {
	handleInputErrors,
	signUpValidation,
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

router.get("/users", isAdmin, getAllUsers);
router.get("/user/:userId");
router.put(
	"/user/:userId",
	[signUpValidation, handleInputErrors, isUserEditable],
	updateUser
);
router.delete("/user/:userId", isUserEditable, deleteUser);

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
