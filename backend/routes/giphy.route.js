const GIPHYController = require("../controllers/giphy.controller");
const ValidationMiddleware = require("../middlewares/authValidate.middleware");

exports.routesConfig = function (app) {
    app.get("/trending", [
        // This could be public later on
        // ValidationMiddleware.validJWTNeeded,
        // PermissionMiddleware.minimumPermissionLevelRequired(PAID),
        GIPHYController.trending
    ]);
    app.get("/search", [
        // This could be public later on
        // ValidationMiddleware.validJWTNeeded,
        // PermissionMiddleware.minimumPermissionLevelRequired(PAID),
        GIPHYController.search
    ]);
};
