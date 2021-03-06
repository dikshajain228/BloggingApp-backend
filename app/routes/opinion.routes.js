let opinionController = require("../controllers/opinion.controller");

let routes = app => {
    app
        .route("/api/v1/opinions")
        .get(opinionController.getAllOpinions)
        .post(opinionController.insertOpinion);

    app
        .route("/api/v1/opinions/:opinionId")
        .get(opinionController.getAllReplies);
    
};

module.exports = routes;