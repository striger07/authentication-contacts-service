const {constants }= require('../constants');

const errorHandle = (err, req, res, next) => {
    const statuscode = res.statusCode ? res.statusCode : 500;

    switch (statuscode) {
        case constants.VALIDATION:
            res.json({
                title: "Validation Error",
                message: err.message,
                stackTrace: err.stack
            });
            break;

        case constants.UNAUTHORIZED:
            res.json({
                title: "Unauthorized",
                message: err.message,
                stackTrace: err.stack
            });
            break;

        case constants.FORBIDDEN:
            res.status(statuscode).json({
                title: "Forbidden",
                message: err.message,
                stackTrace: err.stack
            });
            break;

        case constants.NOT_FOUND:
            res.json({
                title: "Not Found",
                message: err.message,
                stackTrace: err.stack
            });
            break;

        case constants.SERVER_ERROR:
            res.json({
                title: "Server Error",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        default:
            console.log("all things are right");
        break;
    }
};

module.exports = errorHandle;
