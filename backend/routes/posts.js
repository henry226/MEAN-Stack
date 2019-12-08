const express = require('express');
const router = express.Router();
const checkAuth = require("../middleware/check-auth");
const PostController = require('../controllers/posts');
const extractFile = require("../middleware/file");

router.post("", checkAuth, extractFile, PostController.createPost);
router.get("", PostController.getPosts);
router.delete("/:id", checkAuth, PostController.deletePost);
router.put("/:id", checkAuth, extractFile, PostController.updatePost);
router.get("/:id", PostController.getPost);

module.exports = router;