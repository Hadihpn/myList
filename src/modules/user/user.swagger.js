
/**
 * @swagger
 * components:
 *   schemas:
 *     CreateUser:
 *       type: object
 *       required:
 *         - firstName
 *         - lastName
 *         - nationalCode
 *         - pasportCode
 *         - bimehCode
 *       properties:
 *         firstName:
 *           type: string
 *           description: User's first name
 *           minLength: 3
 *           maxLength: 30
 *         lastName:
 *           type: string
 *           description: User's last name
 *           minLength: 3
 *           maxLength: 30
 *         fatherName:
 *           type: string
 *           description: User's father's name
 *           minLength: 3
 *           maxLength: 30
 *         birthdate:
 *           type: string
 *           description: User's birthdate
 *         nationalCode:
 *           type: string
 *           description: User's national code
 *           minLength: 10
 *           maxLength: 10
 *         pasportCode:
 *           type: string
 *           description: User's passport code
 *           minLength: 10
 *           maxLength: 10
 *         bimehCode:
 *           type: string
 *           description: User's bimeh code
 *           minLength: 10
 *           maxLength: 10
 *         bornCity:
 *           type: string
 *           description: City where user was born
 *         generateCity:
 *           type: string
 *           description: City where documents were issued
 *         sex:
 *           type: boolean
 *           description: User's gender
 *         janbaz:
 *           type: boolean
 *           description: User's is janbaz or not
 *         isForeign:
 *           type: boolean
 *           description: User's is iranian or not
 *     UpdateUser:
 *       type: object
 *       properties:
 *         firstName:
 *           type: string
 *           minLength: 3
 *           maxLength: 30
 *         lastName:
 *           type: string
 *           minLength: 3
 *           maxLength: 30
 *         fatherName:
 *           type: string
 *           minLength: 3
 *           maxLength: 30
 *         birthdate:
 *           type: string
 *         nationalCode:
 *           type: string
 *           minLength: 10
 *           maxLength: 10
 *         pasportCode:
 *           type: string
 *           minLength: 10
 *           maxLength: 10
 *         bimehCode:
 *           type: string
 *           minLength: 10
 *           maxLength: 10
 *         bornCity:
 *           type: string
 *           description: City where user was born
 *         generateCity:
 *           type: string
 *           description: City where documents were issued
 *         sex:
 *           type: boolean
 *           description: User's gender
 *         janbaz:
 *           type: boolean
 *           description: User's is janbaz or not
 *         isForeign:
 *           type: boolean
 *           description: User's is iranian or not
 *     ApiResponse:
 *       type: object
 *       properties:
 *         statusCode:
 *           type: integer
 *           description: HTTP status code
 *         data:
 *           type: object
 *           description: Response data container
 *
 * /user/create:
 *   post:
 *     tags:
 *       - User
 *     summary: Create a new user
 *     description: Add a new user to the system
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             $ref: '#/components/schemas/CreateUser'
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateUser'
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 *
 * /user/getAll:
 *   get:
 *     tags:
 *       - User
 *     summary: Get all users
 *     description: Retrieve a list of all users
 *     responses:
 *       200:
 *         description: A list of users
 *       500:
 *         description: Server error
 *
 * /user/getById/{id}:
 *   get:
 *     tags:
 *       - User
 *     summary: Get user by ID
 *     description: Retrieve a specific user by their ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: User ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User data
 *       400:
 *         description: Invalid ID
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 *
 * /user/update/{id}:
 *   patch:
 *     tags:
 *       - User
 *     summary: Update a user
 *     description: Update an existing user's information
 *     parameters:
 *       - in: path
 *         name: id
 *         description: User ID
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             $ref: '#/components/schemas/UpdateUser'
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateUser'
 *     responses:
 *       200:
 *         description: User updated successfully
 *       400:
 *         description: Invalid ID or input
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 *
 * /user/delete/{id}:
 *   delete:
 *     tags:
 *       - User
 *     summary: Delete a user
 *     description: Remove a user from the system
 *     parameters:
 *       - in: path
 *         name: id
 *         description: User ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       400:
 *         description: Invalid ID
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */

// This file contains Swagger documentation for the User API
module.exports = {}
