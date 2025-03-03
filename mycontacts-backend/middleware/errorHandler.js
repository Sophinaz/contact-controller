const  constants  = require("../constants");

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode || 400
    console.log(statusCode)
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title: "validation error",
                message: err.message,
                stackTrace: err.stackTrace
            })
            break;

        case constants.NOT_FOUND:
            res.json({
                title: "NOT FOUND",
                message: err.message,
                stackTrace: err.stackTrace
            })
            break;

        case constants.FORBIDDEN:
            res.json({
                title: "FORBIDDEN",
                message: err.message,
                stackTrace: err.stackTrace
            })
            break;

        case constants.UNAUTHORIZED:
            res.json({
                title: "UNAUTHORIZED",
                message: err.message,
                stackTrace: err.stackTrace
            })
            break;
        
        case constants.SERVER_ERROR:
            res.json({
                title: "SERVER_ERROR",
                message: err.message,
                stackTrace: err.stackTrace
            })
            break;
    
        default:
            console.log("no error")
            break;
    }
}

module.exports = errorHandler;