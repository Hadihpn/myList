/**
 * @swagger
 * components:
 *   schemas:
 *     PayehSanavatInput:
 *       type: object
 *       required:
 *         - year
 *       properties:
 *         year:
 *           type: number
 *           description: The sanavat year
 *         dailySanavat:
 *           type: number
 *           description: Price for the dailySanavat 
 *     PayehSanavatUpdateInput:
 *       type: object
 *       properties:
 *         year:
 *           type: number
 *           description: The sanavat year
 *         dailySanavat:
 *           type: number
 *           description: Price for the dailySanavat
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
 *   name: PayehSanavat
 *   description: PayehSanavat management API
 */

/**
 * @swagger
 * /payehsanavat/create:
 *   post:
 *     summary: Create a new payehSanavat record
 *     tags: [PayehSanavat]
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *            schema:
 *              $ref: '#/components/schemas/PayehSanavatInput'
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PayehSanavatInput'
 *     responses:
 *       201:
 *         description: Successfully created payehSanavat record
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /payehsanavat/getAll:
 *   get:
 *     summary: Retrieve all payehSanavat records
 *     tags: [PayehSanavat]
 *     responses:
 *       200:
 *         description: List of all payehSanavat records
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /payehsanavat/getByYear/{year}:
 *   get:
 *     summary: Get payehSanavat record by year
 *     tags: [PayehSanavat]
 *     parameters:
 *       - in: path
 *         name: year
 *         schema:
 *           type: number
 *         required: true
 *         description: Year of the payehSanavat record
 *     responses:
 *       200:
 *         description: payehSanavat record for the specified year
 *       404:
 *         description: payehSanavat record not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /payehsanavat/getById/{id}:
 *   get:
 *     summary: Get payehSanavat record by ID
 *     tags: [PayehSanavat]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the payehSanavat record
 *     responses:
 *       200:
 *         description: payehSanavat record for the specified ID
 *       404:
 *         description: payehSanavat record not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /payehsanavat/update/{id}:
 *   patch:
 *     summary: Update a payehSanavat record
 *     tags: [PayehSanavat]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the payehSanavat record to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *            schema:
 *              $ref: '#/components/schemas/PayehSanavatUpdateInput' 
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PayehSanavatUpdateInput'
 *     responses:
 *       200:
 *         description: Successfully updated payehSanavat record
 *       404:
 *         description: payehSanavat record not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /payehsanavat/updatePrice:
 *   patch:
 *     summary: Update price for sanavat records
 *     tags: [PayehSanavat]
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *            schema:
 *              $ref: '#/components/schemas/PriceUpdateInput'
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
 * /payehsanavat/delete/{id}:
 *   delete:
 *     summary: Delete a payehSanavat record
 *     tags: [PayehSanavat]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the payehSanavat record to delete
 *     responses:
 *       200:
 *         description: Successfully deleted payehSanavat record
 *       404:
 *         description: payehSanavat record not found
 *       500:
 *         description: Server error
 */