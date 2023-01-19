const Hapi = require('@hapi/hapi');
import routes from './routes';

const initServer = async () => {
    const server = Hapi.server({
        port: process.env.TV2_API_PORT,
        host: '0.0.0.0'
    });
    server.listener.keepAliveTimeout = 120e3;
    routes.map(route => {
        server.route(route);
    });
    await server.start();
    console.log("Server starts listening on port: "+ process.env.TV2_API_PORT);
};
process.on('unhandledRejection', (err) => {
    console.log("Unhandled Rejection ", err);
});

process.on('uncaughtException', (err, origin) => {
    console.log("Unhandled Rejection ", err);
});

initServer();