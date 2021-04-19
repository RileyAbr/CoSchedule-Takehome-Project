const RankingsController = require("../controllers/rankings.controller");
// const PermissionMiddleware = require("..middlewares/authPermission.middleware");
const ValidationMiddleware = require("../middlewares/authValidate.middleware");

exports.routesConfig = function (app) {
    app.post("/rankings", [RankingsController.insert]);
    app.get("/rankings", [
        // This could be public later on
        // ValidationMiddleware.validJWTNeeded,
        // PermissionMiddleware.minimumPermissionLevelRequired(PAID),
        RankingsController.list
    ]);
    app.get("/rankings/:gifID", [
        // ValidationMiddleware.validJWTNeeded,
        // PermissionMiddleware.minimumPermissionLevelRequired(FREE),
        // PermissionMiddleware.onlySameUserOrAdminCanDoThisAction,
        RankingsController.getByGifID
    ]);
    app.patch("/rankings/:gifID", [
        // ValidationMiddleware.validJWTNeeded,
        // PermissionMiddleware.minimumPermissionLevelRequired(FREE),
        // PermissionMiddleware.onlySameUserOrAdminCanDoThisAction,
        RankingsController.patchById
    ]);
    app.delete("/rankings/:gifID", [
        // ValidationMiddleware.validJWTNeeded,
        // PermissionMiddleware.minimumPermissionLevelRequired(ADMIN),
        RankingsController.removeById
    ]);
};
