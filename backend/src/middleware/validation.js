import { body, validationResult } from "express-validator";

export const handleInputErrors = (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		const error = new Error("Input validation failed");
		error.type = "input";
		error.code = 400;
		error.errors = errors.array();
		error.message = error.errors.map((e) => e.msg).join(" ");
		next(error);
	}
	next();
};

export const signUpValidation = [
	body("username")
		.isLength({ min: 5 })
		.trim()
		.withMessage(
			"Username is too short. Username must be at least 5 characters long."
		),
	body("password")
		.isStrongPassword({ minSymbols: 0 })
		.withMessage(
			"Password is too weak. Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter and one number."
		),
];

export const signInValidation = [
	body("username")
		.trim()
		.isLength({ min: 1 })
		.withMessage("Username is required."),
	body("password")
		.trim()
		.isLength({ min: 1 })
		.withMessage("Password is required."),
];

export const createPostValidation = [
	body("title").trim().isLength({ min: 1 }).withMessage("Title is required."),
	body("description")
		.optional()
		.isString()
		.withMessage("Description must be a string"),
	body("district")
		.optional()
		.trim()
		.isLength({ eq: 3 })
		.withMessage("District code must be 3 characters long"),
	body("status")
		.isIn(["LOST", "FOUND", "ARCHIVED"])
		.withMessage("Status must be either LOST, FOUND or ARCHIVED"),
	body("imagesURL")
		.optional()
		.isArray()
		.withMessage("ImagesURL must be an array of strings"),
];
