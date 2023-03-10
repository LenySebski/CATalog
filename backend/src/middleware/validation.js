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
		.escape()
		.isLength({ min: 5 })
		.trim()
		.withMessage(
			"Username is too short. Username must be at least 5 characters long."
		),
	body("password")
		.escape()
		.isStrongPassword({ minSymbols: 0 })
		.withMessage(
			"Password is too weak. Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter and one number."
		),
	body("email")
		.escape()
		.optional({ checkFalsy: true })
		.isEmail()
		.withMessage("Email is invalid. Please enter a valid email address."),
	body("phone")
		.escape()
		.optional({ checkFalsy: true })
		.isMobilePhone()
		.withMessage(
			"Phone number is invalid. Please enter a valid phone number."
		),
	body("name")
		.escape()
		.optional({ checkFalsy: true })
		.isString()
		.isLength({ min: 1 })
		.withMessage("Name has to be a string and cannot be empty."),
];

export const signInValidation = [
	body("username")
		.escape()
		.trim()
		.isLength({ min: 1 })
		.withMessage("Username is required."),
	body("password")
		.escape()
		.trim()
		.isLength({ min: 1 })
		.withMessage("Password is required."),
];

export const createPostValidation = [
	body("content")
		.escape()
		.optional({ checkFalsy: true })
		.isString()
		.withMessage("Content must be a string"),
	body("district")
		.escape()
		.optional({ checkFalsy: true })
		.trim()
		.isLength({ min: 3, max: 3 })
		.withMessage("District (postal code) must be 3 characters long"),
	body("status")
		.escape()
		.optional({ checkFalsy: true })
		.isIn(["LOST", "FOUND", "ARCHIVED"])
		.withMessage("Status must be either LOST, FOUND or ARCHIVED"),
	body("imagesURL")
		.escape()
		.optional({ checkFalsy: true })

		.isURL({ protocols: ["http", "https"] })
		.withMessage("ImageURL must be a valid URL adresses"),

];
