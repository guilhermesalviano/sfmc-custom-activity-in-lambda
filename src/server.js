const app = require('./app');

const serverPort = (process.env.SERVER_PORT || 8080);

app.listen(serverPort, function() {
    console.log(`Express is running at localhost: ${serverPort}`);
});
