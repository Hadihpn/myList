
/**
 * @swagger
 * components:
 *   schemas:
 *     CreateSenf:
 *       type: object
 *       required:
 *         - code
 *         - title
 *       properties:
 *         code:
 *           type: string
 *           description: Unique code for the Senf
 *         title:
 *           type: string
 *           description: Title of the Senf
 *           minLength: 3
 *           maxLength: 100
 *         jobs:
 *           type: array
 *           description: Array of job IDs associated with this Senf
 *           items:
 *             type: string
 *     
 *     UpdateSenf:
 *       type: object
 *       properties:
 *         code:
 *           type: string
 *           description: Unique code for the Senf
 *         title:
 *           type: string
 *           description: Title of the Senf
 *           minLength: 3
 *           maxLength: 100
 *         jobs:
 *           type: array
 *           description: Array of job IDs associated with this Senf
 *           items:
 *             type: string
 *     
 *     Senf:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: Unique identifier for the Senf
 *         code:
 *           type: string
 *           description: Unique code for the Senf
 *         title:
 *           type: string
 *           description: Title of the Senf
 *         jobs:
 *           type: array
 *           description: Array of jobs associated with this Senf
 *           items:
 *             type: object
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Date and time when the Senf was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Date and time when the Senf was last updated
 */

/**
 * @swagger
 * tags:
 *   name: Senf
 *   description: Senf management API
 */

/**
 * @swagger
 * /senf/create:
 *   post:
 *     summary: Create a new Senf
 *     tags: [Senf]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateSenf'
 *         application/x-www-form-urlencoded:
 *           schema:
 *             $ref: '#/components/schemas/CreateSenf'
 *     responses:
 *       201:
 *         description: Senf created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                   example: 201
 *                 data:
 *                   type: object
 *                   properties:
 *                     senf:
 *                       $ref: '#/components/schemas/Senf'
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /senf/getAll:
 *   get:
 *     summary: Retrieve all Senfs
 *     tags: [Senf]
 *     parameters:
 *       - in: query
 *         name: code
 *         schema:
 *           type: string
 *         description: Filter by code
 *       - in: query
 *         name: title
 *         schema:
 *           type: string
 *         description: Filter by title
 *     responses:
 *       200:
 *         description: List of all Senfs
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                   example: 200
 *                 data:
 *                   type: object
 *                   properties:
 *                     senfs:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/Senf'
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /senf/getById/{id}:
 *   get:
 *     summary: Get Senf by ID
 *     tags: [Senf]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the Senf
 *     responses:
 *       200:
 *         description: Senf data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                   example: 200
 *                 data:
 *                   type: object
 *                   properties:
 *                     senf:
 *                       $ref: '#/components/schemas/Senf'
 *       400:
 *         description: Invalid ID
 *       404:
 *         description: Senf not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /senf/update/{id}:
 *   patch:
 *     summary: Update a Senf
 *     tags: [Senf]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the Senf to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateSenf'
 *         application/x-www-form-urlencoded:
 *           schema:
 *             $ref: '#/components/schemas/UpdateSenf'
 *     responses:
 *       200:
 *         description: Senf updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: "بروزرسانی با موفقیت انجام شد"
 *       400:
 *         description: Invalid ID or input
 *       404:
 *         description: Senf not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /senf/delete/{id}:
 *   delete:
 *     summary: Delete a Senf
 *     tags: [Senf]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the Senf to delete
 *     responses:
 *       200:
 *         description: Senf deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: "حذف با موفقیت انجام شد"
 *       400:
 *         description: Invalid ID
 *       404:
 *         description: Senf not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /senf/addJob/{senfId}/{jobId}:
 *   patch:
 *     summary: Add a job to a Senf
 *     tags: [Senf]
 *     parameters:
 *       - in: path
 *         name: senfId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the Senf
 *       - in: path
 *         name: jobId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the job to add
 *     responses:
 *       200:
 *         description: Job added to Senf successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: "شغل با موفقیت به صنف اضافه شد"
 *       400:
 *         description: Invalid IDs
 *       404:
 *         description: Senf or job not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /senf/removeJob/{senfId}/{jobId}:
 *   patch:
 *     summary: Remove a job from a Senf
 *     tags: [Senf]
 *     parameters:
 *       - in: path
 *         name: senfId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the Senf
 *       - in: path
 *         name: jobId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the job to remove
 *     responses:
 *       200:
 *         description: Job removed from Senf successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: "شغل با موفقیت از صنف حذف شد"
 *       400:
 *         description: Invalid IDs
 *       404:
 *         description: Senf or job not found
 *       500:
 *         description: Server error
 */
