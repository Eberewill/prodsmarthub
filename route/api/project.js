const express = require("express");
const router = express.Router();
const request = require("request");
const config = require("config");
const auth = require("../../middleweare/auth");
const { check, validationResult } = require("express-validator");
const User = require("../../models/User");
const Project = require("../../models/Project");

//@ Route POST api/project
//@ Desc: Add a Project
//@ Access: Private

router.post(
  "/",
  [auth],
  [
    check("title", "tittle is required").not().isEmpty(),
    check("subtitle", "sub tittle is required").not().isEmpty(),
  ],
  async (req, res) => {
    //validation for imput fields

    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      //destructure request body
      const { title, subtitle, endingdate, status, giturl, tags } = req.body;

      //build project object

      //get current user
      var user = await User.findById(req.user.id).select("-password");

      var projectFields = {};
      if (title) projectFields.title = title;
      if (subtitle) projectFields.subtitle = subtitle;
      if (status) projectFields.status = status;
      if (giturl) projectFields.giturl = giturl;
      if (endingdate) projectFields.endingdate = endingdate;

      projectFields.owner = user;

      if (tags) {
        projectFields.tags = tags.split(",").map((tag) => tag.trim());
      }

      const project = new Project(projectFields);
      await project.save();
      res.json(project);
    } catch (err) {
      console.error(err);
      res.status(500).send("server Error ");
    }
  }
);

//@ Route GEt api/projects
//@ Desc: Get My Projects
//@ Access: Private

router.get("/", auth, async (req, res) => {
  try {
    const myprojects = await Project.find({ owner: req.user.id });
    if (!myprojects) {
      res.send("not project for this user");
    }

    res.json(myprojects);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server Error l");
  }
});

//@ Route GEt api/projects/:id
//@ Desc: Get  Projects By ID
//@ Access: Private

router.get("/:id", auth, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ msg: "Project Not Found" });
    }
    res.json(project);
  } catch (err) {
    console.error(err.message);

    if (err.kind == "ObjectId") {
      return res.status(404).json({ msg: "Project not found" });
    }
    res.status(400).send("server error");
  }
});

module.exports = router;
