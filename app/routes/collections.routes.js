let collectionController = require("../controllers/collection.controller");
let auth = require("../middleware/auth");
let upload = require("../middleware/uploads");

let routes = app => {
  app
    .route("/api/v1/collections")
    .get(auth, collectionController.getAllCollections)
    .post(auth, upload.single("image"), collectionController.insertCollection);

  // Delete later
  // Get all data in user_collections table
  app.route("/api/v1/collections/followers").get(collectionController.getAll);

  app
    .route("/api/v1/collections/:collectionId")
    .get(auth, collectionController.findCollectionById)
    .patch(auth, upload.single("image"), collectionController.updateCollection)
    .delete(auth, collectionController.deleteCollection);

  app
    .route("/api/v1/collections/:collectionId/articles")
    .get(auth, collectionController.getCollectionArticles);

  app
    .route("/api/v1/collections/:collectionId/followers")
    .get(collectionController.getFollowers)
    .post(auth, collectionController.insertFollower)
    .delete(auth, collectionController.deleteFollower);

  app
    .route("/api/v1/collections/:collectionId/authors/:authorId")
    .post(auth, collectionController.addAuthor)
    .delete(auth, collectionController.deleteAuthor);
};

module.exports = routes;
