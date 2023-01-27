// post.js is a file that contains all of our routes 
// db.js is a file that contains prisma code to connect to the database. Prisma is used to connect to the database. Prisma is an open-source ORM for Node.js and TypeScript. It makes it easy to access data in a database from Node.js or TypeScript. 
import prisma from "../db.js"; 

// getPosts is a function that returns all posts in the database 
export const getPosts = async (req, res, next) => { // getPosts is an async function that takes 3 arguments, the request, the response, and the next function
	try { // try is used to catch any errors that occur when trying to access the database 

		const posts = await prisma.post.findMany(); // posts is a variable that is assigned to the result of the prisma.post.findMany() function, prisma.post.findMany() is a function that returns all posts in the database
		res.json(posts); // res.json is used to send the result of the prisma.post.findMany() function to the client
	} catch (e) { // catch is used to catch any errors that occur when trying to access the database 
		next(e); // next is used to pass the error to the next middleware
	}
};

export const getOriginalPoster = async (req, res, next) => { 
	try {
		const post = await prisma.post.findUnique({ // prisma.post.findUnique is a function that returns a post with a specific id
			where: { id: req.params.postId }, // where is a variable that is assigned to the result of the prisma.post.findUnique
			select: { // select is a variable that is assigned to the result of the prisma.post.findUnique
				postedById: true, 
			},
		});
			next(post); // next is used to pass the post to the next middleware
		} catch (e) {
		next(e);
	}
};

export const getPost = async (req, res, next) => {
	try {
		const post = await prisma.post.findUnique({
			where: { id: req.params.postId },
		});
		res.json(post);
	} catch (e) {
		next(e);
	}
};

export const createPost = async (req, res, next) => {
	console.log("req.user: ", req.user);
	try {
		console.log(req.user);
		const post = await prisma.post.create({
			data: {
			
				content: req.body?.content,
				district: req.body?.district,
				status: req.body?.status,
				postedById: req.user.id,
				imagesURL: req.body?.imagesURL,
			},
		});
		res.status(201);
		res.json(post);
	} catch (e) {
		e.type = "input";
		next(e);
	}
};

export const isPostEditable = async (req, res, next) => {
	try {
		const post = await prisma.post.findUnique({
			where: {
				id_postedById: {
					id: req.params.postId,
					postedById: req.user.id,
				},
			},
		});
		if (post) {
			next();
		} else if (req.user.role === "ADMIN") {
			next();
		} else {
			const err = new Error("You are not authorized to edit this post");
			err.type = "auth";
			err.code = 401;
			next(err);
		}
	} catch (e) {
		next(e);
	}
};

export const updatePost = async (req, res, next) => {
	try {
		const post = await prisma.post.update({
			where: {
				id: req.params.postId,
			},
			data: {
				content: req.body?.content,
				district: req.body?.district,
				status: req.body?.status,
				postedById: req.user.id,
				imagesURL: req.body?.imagesURL,
			},
		});
		res.json(post);
	} catch (e) {
		e.type = "input";
		next(e);
	}
};

export const deletePost = async (req, res, next) => {
	try {
		const post = await prisma.post.delete({
			where: {
				id: req.params.postId,
			},
		});
		res.json(post);
	} catch (e) {
		next(e);
	}
};

export const getPostsByUser = async (req, res, next) => {
	try {
		const posts = await prisma.post.findMany({
			where: {
				postedById: req.params.userId,
			},
		});
		if (posts.length === 0) {
			const err = new Error("No posts found.");
			err.type = "input";
			err.code = 400;
			next(err);
		} else {
			res.status(200);
			res.json(posts);
		}
	} catch (e) {
		next(e);
	}
};

export const getPostsByDistrict = async (req, res, next) => {
	try {
    const posts = await prisma.post.findMany({
      where: {
        district: req.params.districtCode,
		},
    });
    if (posts.length === 0) {
			const err = new Error("No posts found.");
			err.type = "input";
			err.code = 400;
			next(err);
		} else {
			res.status(200);
      res.json(posts);
    }
		} catch (e) {
			next(e);
		}
	};
