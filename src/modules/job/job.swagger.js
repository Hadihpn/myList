/**
 * @swagger
 *  components:
 *    schemas:
 *      Job:
 *        type: object
 *        required:
 *          - code
 *          - title
 *          - dailySalary
 *        properties:
 *          code:
 *            type: string
 *            description: code of job
 *          title:
 *            type: string
 *            description: title of job
 *          dailySalary:
 *            type: number
 *            description: daily salary of job
 *
 */

/**
 * @swagger
 * /job/create:
 *  post:
 *    summary: create new job
 *    tags: [Job]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Job'
 *    responses:
 *      201:
 *        description: success
 *      400:
 *        description: Bad Request
 *      500:
 *        description: Internal Server Error
 */

/**
 * @swagger
 * /job/getAll:
 *  get:
 *    summary: get all jobs
 *    tags: [Job]
 *    responses:
 *      200:
 *        description: success
 *      400:
 *        description: Bad Request
 *      500:
 *        description: Internal Server Error
 */

/**
 * @swagger
 * /job/getByTitle/{title}:
 *  get:
 *    summary: get job by title
 *    tags: [Job]
 *    parameters:
 *      - in: path
 *        name: title
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: success
 *      400:
 *        description: Bad Request
 *      500:
 *        description: Internal Server Error
 */
/**
 * @swagger
 * /job/getById/{id}:
 *  get:
 *    summary: get job by id
 *    tags: [Job]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
  *    responses:
 *      200:
 *        description: success
 *      400:
 *        description: Bad Request
 *      500:
 *        description: Internal Server Error
 */
