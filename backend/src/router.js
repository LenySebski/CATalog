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
router.get("/posts", () => {});
router.post("/post", () => {});
router.get("/post/:id", () => {});
router.put("/post/:id", () => {});
router.delete("/post/:id", () => {});

export default router;
