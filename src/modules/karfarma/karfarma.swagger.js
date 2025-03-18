/**
 * @swagger
 *  components:
 *    schemas:
 *      CreateKarfarma:
 *        type: object
 *        required:
 *          - name
 *          - nationalCode
 *          - password
 *        properties:
 *          name:
 *            type: string
 *            description: the name of karfarma
 *          nationalCode:
 *            type: string
 *            description: the nationalCode of karfarma
 *          password:
 *            type: string
 *            description: the password of karfarma
 *          phoneNumber:
 *            type: string
 *            description: the phoneNumber of karfarma
 */

/**
 * @swagger
 *  /karfarma/create:
 *    post:
 *      summary: create new karfarma
 *      tags: [Karfarma]
 *      requestBody:
 *        required: true
 *        content:
 *          application/x-www-form-urlencoded:
 *            schema:
 *              $ref: '#/components/schemas/CreateKarfarma'
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateKarfarma'
 *      responses:
 *        201:
 *          description: success
 *        400:
 *          description: Bad Request
 *        500:
 *          description: Internal Server Error
 */
/**
 * @swagger
 *  /karfarma/getAll:
 *    get:
 *      summary: get all karfarma
 *      tags: [Karfarma]
 *      responses:
 *        200:
 *          description: success
 *        400:
 *          description: Bad Request
 *        500:
 *          description: Internal Server Error
 */
/**
 * @swagger
 *  /karfarma/delete/{id}:
 *    delete:
 *      summary: delete karfarma by id
 *      tags: [Karfarma]
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            type: string
 *      responses:
 *        200:
 *          description: success
 *        400:
 *          description: Bad Request
 *        500:
 *          description: Internal Server Error
 */

/**
 * @swagger
 *  /karfarma/update/{id}:
 *    patch:
 *      summary: update karfarma by id
 *      tags: [Karfarma]
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            type: string
 *      requestBody:
 *        required: true
 *        content:
 *          application/x-www-form-urlencoded:
 *            schema:
 *              $ref: '#/components/schemas/CreateKarfarma'
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateKarfarma'
 *      responses:
 *        200:
 *          description: success
 *        400:
 *          description: Bad Request
 *        500:
 *          description: Internal Server Error
 */
/**
 * @swagger
 *  /karfarma/getById/{id}:
 *    get:
 *      summary: get karfarma by id
 *      tags: [Karfarma]
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            type: string
 *      responses:
 *        200:
 *          description: success
 *        400:
 *          description: Bad Request
 *        500:
 *          description: Internal Server Error
 */
