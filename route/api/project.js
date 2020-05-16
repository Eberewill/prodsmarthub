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
    check("title", "tittle is reuired").not().isEmpty(),
    check("subtitle", "sub tittle is reuired").not().isEmpty(),
    check("endingdate", "end date is reuired is reuired").not().isEmpty(),
  ],
  async (re, res) => {
    //validation for imput fields
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //destructure request body
    const { title, subtitle, endingdate, status, giturl, tags } = req.body;

    //build project object

    //get current user
    const user = await User.findById(req.user.id).select("-password");

    projectFields.owner = user;

    const projectFields = {};
    if (title) projectFields.title = title;
    if (subtitle) projectFields.subtitle = subtitle;
    if (status) projectFields.status = status;
    if (giturl) projectFields.giturl = giturl;
    if (endingdate) projectFields.endingdate = endingdate;

    if (tags) {
      projectFields.tags = tags.split(",").map((tag) => tag.trim());
    }

    const project = new Project(projectFields);
    await project.save();
    res.json(project);
  }
);

module.exports = router;
