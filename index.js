if (process.env.NODE_ENV === 'production') {
    module.exports = require('./lib/components.prod');
} else {
    module.exports = require('./lib/components.dev');
}
