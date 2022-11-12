const swaggerUi = require('swagger-ui-express');
const swaggereJsdoc = require('swagger-jsdoc');
var path = require('path');

const options = {
    
    swaggerDefinition: {
        openapi: '3.0.3',
        info: {
            title: 'Test API',
            version: '1.0.0',
            description: 'Test API with express',
        },
        host: process.env.SERVER_URL,
        basePath: '/'
    },
    apis: ['./routes/*.js', './schemas/*', './swagger/*']
}

const specs = swaggereJsdoc(options);

module.exports = {
    swaggerUi,
    specs
};

