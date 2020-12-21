const appFile = __dirname + '/server.js';

if (process.env.NODE_ENV === 'dev') {
    const app = require(appFile);
    app.init();
}