/**
 * @swagger
 * components:
 *   schemas:
 *     SanavatInput:
 *       type: object
 *       required:
 *         - year
 *       properties:
 *         year:
 *           type: number
 *           description: The sanavat year
 *         price:
 *           type: number
 *           description: Price for the sanavat year
 *     SanavatUpdateInput:
 *       type: object
 *       properties:
 *         year:
 *           type: number
 *           description: The sanavat year
 *         price:
 *           type: number
 *           description: Price for the sanavat year
 *     PriceUpdateInput:
 *       type: object
 *       required:
 *         - oldPrice
 *         - newPrice
 *       properties:
 *         oldPrice:
 *           type: number
 *           description: old price to set
 *         newPrice:
 *           type: number
 *           description: New price to set
*/

/**
 * @swagger
 * tags:
 *   name: Sanavat
 *   description: Sanavat management API
 */

/**
 * @swagger
 * /sanavat/create:
 *   post:
 *     summary: Create a new sanavat record
 *     tags: [Sanavat]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SanavatInput'
 *     responses:
 *       201:
 *         description: Successfully created sanavat record
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /sanavat/getAll:
 *   get:
 *     summary: Retrieve all sanavat records
 *     tags: [Sanavat]
 *     responses:
 *       200:
 *         description: List of all sanavat records
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /sanavat/getByYear/{year}:
 *   get:
 *     summary: Get sanavat record by year
 *     tags: [Sanavat]
 *     parameters:
 *       - in: path
 *         name: year
 *         schema:
 *           type: number
 *         required: true
 *         description: Year of the sanavat record
 *     responses:
 *       200:
 *         description: Sanavat record for the specified year
 *       404:
 *         description: Sanavat record not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /sanavat/getById/{id}:
 *   get:
 *     summary: Get sanavat record by ID
 *     tags: [Sanavat]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the sanavat record
 *     responses:
 *       200:
 *         description: Sanavat record for the specified ID
 *       404:
 *         description: Sanavat record not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /sanavat/update/{id}:
 *   patch:
 *     summary: Update a sanavat record
 *     tags: [Sanavat]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the sanavat record to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SanavatUpdateInput'
 *     responses:
 *       200:
 *         description: Successfully updated sanavat record
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                   example: 200
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Sanavat updated successfully
 *       404:
 *         description: Sanavat record not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /sanavat/updatePrice:
 *   patch:
 *     summary: Update price for sanavat records
 *     tags: [Sanavat]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PriceUpdateInput'
 *     responses:
 *       200:
 *         description: Successfully updated prices
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /sanavat/delete/{id}:
 *   delete:
 *     summary: Delete a sanavat record
 *     tags: [Sanavat]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the sanavat record to delete
 *     responses:
 *       200:
 *         description: Successfully deleted sanavat record
 *       404:
 *         description: Sanavat record not found
 *       500:
 *         description: Server error
 */