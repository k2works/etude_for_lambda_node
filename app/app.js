'use strict'

const app = require('./app/server/app');
const app2 = _interopRequireDefault(app);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
app2.default.use(awsServerlessExpressMiddleware.eventContext());

// The aws-serverless-express library creates a server and listens on a Unix
// Domain Socket for you, so you can remove the usual call to app.listen.
// app.listen(3000)

// Export your express server so you can import it in the lambda function.
module.exports = app2.default
