# CATalog

Welcome to the CATalog API! This API provides a platform for reporting and retrieving information about lost and found cats in the Reykjavik area. It is designed to be a simple and user-friendly solution for cat owners who are searching for their lost pets, or for members of the community who have come across a stray cat. The API allows users to create and view reports of lost or found cats, and retrieve detailed information about each report, including description, location.

We prioritize security, that's why we do not require the sharing of contact information to post or create an account. It is up to the user to decide what type of information they would like to share.

Whether you are a concerned cat owner or just a passionate animal lover, this API provides a centralized resource for keeping track of the feline residents of Reykjavik.

## Installation

use the following command to install the package(make sure you have node.js installed and you are inside of **backend** or **frontend** directory):

```bash

npm install

```

create a **.env** file in the **backend** directory of the project and add the following variables:

```bash

DATABASE_URL=your_database_url

JWT_SECRET=your_jwt_secret

```

## Development

To start the development server, run the following command:

```bash

npm run dev

```

# Documentation

This API provides the following endpoints:

## Unprotected Routes

-  GET / - Health check endpoint, returns JSON with ok: true and
   message: "Still alive!".

-  GET /posts/:userId - Gets all the posts by a user specified by the
   userId parameter.

-  GET /posts - Gets all the posts.

-  POST /signup - Signup endpoint, used to create a new user. This
   endpoint requires validation through signUpValidation and
   handleInputErrors middlewares.

-  POST /signin - Sign in endpoint, used to sign in an existing user.
   This endpoint requires validation through signInValidation and
   handleInputErrors middlewares.

## Protected Routes

-  GET /api - Protected endpoint, requires authentication. This endpoint
   uses the protect middleware.

-  GET /api/users - Gets all users, requires isAdmin middleware.

-  GET /api/user/:userId - Gets a user by userId.

-  PUT /api/user/:userId - Updates a user by userId. This endpoint
   requires validation through signUpValidation, handleInputErrors, and
   isUserEditable middlewares.

-  DELETE /api/user/:userId - Deletes a user by userId, requires
   isUserEditable middleware.

-  POST /api/post - Creates a new post. This endpoint requires
   validation through createPostValidation and handleInputErrors
   middlewares.

-  GET /api/post/:postId - Gets a post by postId.

-  GET /api/posts/bydistrict/:districtCode - Gets all posts by a
   specified district code.

-  PUT /api/post/:postId - Updates a post by postId. This endpoint
   requires validation through createPostValidation, handleInputErrors,
   and isPostEditable middlewares.

-  DELETE /api/post/:postId - Deletes a post by postId, requires
   isPostEditable middleware.

## Middlewares

morgan is used for logging HTTP requests. It is used in development mode, where it logs the HTTP requests in the console in a "dev" format.

cors is a middleware function that allows the server to handle cross-origin requests. It allows requests from different domains to be accepted by the server.

express.json() is a middleware function that parses incoming requests with JSON payloads.

express.urlencoded is a middleware function that parses incoming requests with URL-encoded payloads. The extended option is set to true to use the extended query string library.

protect - middleware function that protects a route by checking for the presence of a JSON Web Token (JWT) in the Authorization header of the request. If the token is missing, it returns an error with the message "Not authorized, token missing." If the token is present, it verifies the token and decodes the user information stored in the token. The decoded user information is then stored in the req.user property and passed on to the next middleware function. If the token verification fails, an error with the message "Not authorized, token failed." is returned.

Function isAdmin - middleware function that checks if the user stored in req.user has an admin role. If the user has the admin role, the function passes the request on to the next middleware function. If the user does not have the admin role, it returns an error with the message "Not authorized. Admin only." and a 403 Forbidden status code.

The API makes use of J**SON Web Tokens (JWT)** and **Bcrypt** middlewares to enhance the security of the application. JWT is used for user authentication and authorization, where a token is generated and sent to the client after successful login. The token is then included in subsequent requests to the API for accessing protected routes. Bcrypt, on the other hand, is used for securely storing hashed passwords in the database. It allows for the comparison of plaintext passwords with the hashed versions stored in the database without having to reveal the actual password. These middlewares work together to ensure that sensitive information is protected and secure within the API.

## Error Handling & Validation

In order to ensure the reliability and security of our database of lost and found cats in Reykjavik, we use express-validator for input validation and sanitization. **Express-validator** provides a set of middleware functions to validate and sanitize incoming data from API requests. This helps to prevent malicious attacks, such as SQL injection, by ensuring that all input data is properly formatted and conforms to specific rules. By validating user inputs, we can ensure that the data stored in the database is accurate and consistent. Additionally, the sanitization process ensures that inputs are free from harmful code and can be safely stored in the database. Using express-validator, we can ensure that the API is secure and protects the data stored in the database.

This API uses a global error handler for all endpoints to handle errors. It returns a JSON response with the error message and error type. If the error type is auth, it returns 401 Unauthorized, if the error type is input it returns 400 Bad Request, otherwise, it returns 500 Internal Server Error.
